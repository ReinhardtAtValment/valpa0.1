"use client";

import { useState, FormEvent } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";

// Import contact content from JSON
import contactContent from "@/content/contact.json";

interface FormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  currentEnvironment: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  services?: string;
}

interface ApiError {
  field: string;
  message: string;
}

export default function ContactPage() {
  const content = contactContent;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    services: [],
    currentEnvironment: [],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company is now optional - no validation needed

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      // Construct API endpoint URL
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL 
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : process.env.NODE_ENV === 'production'
        ? 'https://app.valment.com/api/contact'
        : 'http://localhost:3001/api/contact';
      
      // Log debugging information
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'server-side';
      console.log('Submitting to API:', apiBaseUrl);
      console.log('Current origin:', currentOrigin);
      
      const requestBody = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || undefined,
        services: formData.services, // Keep as array - API accepts arrays
        currentEnvironment: formData.currentEnvironment.length > 0 
          ? formData.currentEnvironment 
          : undefined, // Only include if not empty
        message: formData.message.trim() || undefined,
      };
      
      console.log('Request body:', requestBody);
      
      const response = await fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok && response.status !== 400) {
        // For non-400 errors, try to get error message
        const errorText = await response.text();
        console.error('API Error Response:', response.status, errorText);
      }

      const result = await response.json();

      if (!response.ok) {
        // Handle validation errors (400)
        if (response.status === 400 && result.errors && Array.isArray(result.errors)) {
          const apiErrors: FormErrors = {};
          result.errors.forEach((error: ApiError) => {
            if (error.field === "email") {
              apiErrors.email = error.message;
            } else if (error.field === "name") {
              apiErrors.name = error.message;
            } else if (error.field === "company") {
              apiErrors.company = error.message;
            }
          });
          setErrors(apiErrors);
          setSubmitStatus("error");
        } 
        // Handle rate limiting (429)
        else if (response.status === 429) {
          setSubmitStatus("error");
          setErrors({ 
            email: "Too many requests. Please wait a few minutes before trying again." 
          });
        }
        // Handle other errors
        else {
          setSubmitStatus("error");
          setErrors({ 
            email: result.message || "Failed to submit form. Please try again." 
          });
        }
      } else if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          services: [],
          currentEnvironment: [],
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setErrors({ 
          email: result.message || "Failed to submit form. Please try again." 
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      // Handle network errors
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        // More detailed error message for debugging
        const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'unknown';
        console.error("Fetch failed. Possible causes:");
        console.error("1. API server not running on http://localhost:3001");
        console.error(`2. CORS issue - API server may not allow requests from ${currentOrigin}`);
        console.error("   Solution: Configure API server ALLOWED_ORIGINS to include:", currentOrigin);
        console.error("3. Network connectivity issue");
        
        const errorMessage = `Unable to connect to the API server. This is likely a CORS (Cross-Origin Resource Sharing) issue. The API server needs to allow requests from ${currentOrigin}. Please check the API server configuration.`;
        setErrors({ 
          email: errorMessage
        });
      } else if (error instanceof Error) {
        setErrors({ 
          email: `Error: ${error.message}` 
        });
      } else {
        setErrors({ 
          email: "An unexpected error occurred. Please try again later." 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (category: keyof Pick<FormData, "services" | "currentEnvironment">, value: string) => {
    setFormData((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
    if (category === "services" && errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white pt-12 md:pt-16 pb-6">
        <div className="container mx-auto px-6">
          <SectionHeader
            headline={content.hero.headline}
            subheadline={content.hero.subheadline}
            align="center"
            variant="standard"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-50 pt-2 pb-12 md:pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="font-semibold text-green-900">
                      {content.form.submit.success}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <p className="font-semibold text-red-900">
                      {content.form.submit.error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                      {content.form.sections.contact.label}
                    </h3>
                    
                    <div className="space-y-4">
                      {content.form.sections.contact.fields.map((field) => (
                        <div key={field.name}>
                          <Label htmlFor={field.name}>
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </Label>
                          <Input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            value={formData[field.name as keyof FormData] as string}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className={`mt-1 ${errors[field.name as keyof FormErrors] ? "border-red-500" : ""}`}
                            required={field.required}
                          />
                          {errors[field.name as keyof FormErrors] && (
                            <p className="text-sm text-red-600 mt-1">
                              {errors[field.name as keyof FormErrors]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services Section */}
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {content.form.sections.services.label}
                        <span className="text-red-500 ml-1">*</span>
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {content.form.sections.services.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {content.form.sections.services.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(option.value)}
                            onChange={() => handleCheckboxChange("services", option.value)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                          />
                          <span className="text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.services && (
                      <p className="text-sm text-red-600">{errors.services}</p>
                    )}
                  </div>

                  {/* Current Environment Section */}
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {content.form.sections.currentEnvironment.label}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {content.form.sections.currentEnvironment.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {content.form.sections.currentEnvironment.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.currentEnvironment.includes(option.value)}
                            onChange={() => handleCheckboxChange("currentEnvironment", option.value)}
                            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {content.form.sections.message.label}
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={content.form.sections.message.placeholder}
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          {content.form.submit.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {content.form.submit.text}
                        </>
                      )}
                    </Button>
                    
                    <p className="text-sm text-gray-600 mt-3">
                      {content.form.submit.reassurance}
                    </p>
                    
                    <p className="text-xs text-gray-500 mt-2">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
