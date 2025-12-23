import { Badge } from "@/components/ui/badge";
import { CertificationBadge } from "@/components/ui/certification-badge";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  // Process & Operations Icons
  Search,
  LineChart,
  BarChart3,
  TrendingUp,
  Activity,
  Workflow,
  GitBranch,
  Layers,
  
  // AI & Automation Icons
  Sparkles,
  Cpu,
  Bot,
  Zap,
  WandSparkles,
  BrainCircuit,
  
  // Governance & Security Icons
  Shield,
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck,
  ClipboardCheck,
  
  // Data & Analytics Icons
  Database,
  Server,
  HardDrive,
  CloudCog,
  Boxes,
  Package,
  
  // Business & Strategy Icons
  Target,
  Compass,
  Map,
  Award,
  Trophy,
  Medal,
  
  // Action & UI Icons
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  Settings,
  
  // Communication Icons
  Mail,
  Phone,
  MessageSquare,
  Users,
  Building2,
  Globe,
  
  // Status Icons
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Clock,
} from "lucide-react";

export default function IconsBadgesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <Section spacing="lg" background="muted">
        <div className="text-center space-y-4">
          <Heading level={1} size="display-xl">
            Icons & Badges System
          </Heading>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Icon patterns and certification badges using lucide-react
          </p>
        </div>
      </Section>

      {/* Icon Categories */}
      <Section>
        <div className="space-y-12">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Icon Library
            </Heading>
            <p className="text-muted-foreground mb-8">
              All icons from lucide-react - organized by category for easy selection
            </p>
          </div>

          {/* Process & Operations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Process & Operations</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[
                { Icon: Search, name: "Search" },
                { Icon: LineChart, name: "LineChart" },
                { Icon: BarChart3, name: "BarChart3" },
                { Icon: TrendingUp, name: "TrendingUp" },
                { Icon: Activity, name: "Activity" },
                { Icon: Workflow, name: "Workflow" },
                { Icon: GitBranch, name: "GitBranch" },
                { Icon: Layers, name: "Layers" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">AI & Automation</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[
                { Icon: Sparkles, name: "Sparkles" },
                { Icon: Cpu, name: "Cpu" },
                { Icon: Bot, name: "Bot" },
                { Icon: Zap, name: "Zap" },
                { Icon: WandSparkles, name: "WandSparkles" },
                { Icon: BrainCircuit, name: "BrainCircuit" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                  <Icon className="h-6 w-6 text-secondary" />
                  <span className="text-xs text-muted-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Governance & Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Governance & Security</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[
                { Icon: Shield, name: "Shield" },
                { Icon: ShieldCheck, name: "ShieldCheck" },
                { Icon: Lock, name: "Lock" },
                { Icon: UserCheck, name: "UserCheck" },
                { Icon: FileCheck, name: "FileCheck" },
                { Icon: ClipboardCheck, name: "ClipboardCheck" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="text-xs text-muted-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data & Analytics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Data & Analytics</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[
                { Icon: Database, name: "Database" },
                { Icon: Server, name: "Server" },
                { Icon: HardDrive, name: "HardDrive" },
                { Icon: CloudCog, name: "CloudCog" },
                { Icon: Boxes, name: "Boxes" },
                { Icon: Package, name: "Package" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                  <Icon className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business & Strategy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business & Strategy</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
              {[
                { Icon: Target, name: "Target" },
                { Icon: Compass, name: "Compass" },
                { Icon: Map, name: "Map" },
                { Icon: Award, name: "Award" },
                { Icon: Trophy, name: "Trophy" },
                { Icon: Medal, name: "Medal" },
              ].map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                  <Icon className="h-6 w-6" />
                  <span className="text-xs text-muted-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Icon Usage Patterns */}
      <Section background="muted">
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Icon Usage Patterns
            </Heading>
            <p className="text-muted-foreground mb-6">
              Common ways to use icons in the design system
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Icon Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Icon Sizes</CardTitle>
                <CardDescription>Standard icon size patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <code className="text-sm">h-4 w-4</code>
                  <span className="text-sm text-muted-foreground">- Small (inline text)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <code className="text-sm">h-5 w-5</code>
                  <span className="text-sm text-muted-foreground">- Default (buttons)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                  <code className="text-sm">h-6 w-6</code>
                  <span className="text-sm text-muted-foreground">- Medium (cards)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-8 w-8 text-muted-foreground" />
                  <code className="text-sm">h-8 w-8</code>
                  <span className="text-sm text-muted-foreground">- Large (features)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-12 w-12 text-muted-foreground" />
                  <code className="text-sm">h-12 w-12</code>
                  <span className="text-sm text-muted-foreground">- Hero sections</span>
                </div>
              </CardContent>
            </Card>

            {/* Icon Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Icon Colors</CardTitle>
                <CardDescription>Using brand colors with icons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <code className="text-sm">text-primary</code>
                  <span className="text-sm text-muted-foreground">- Navy blue</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bot className="h-6 w-6 text-secondary" />
                  <code className="text-sm">text-secondary</code>
                  <span className="text-sm text-muted-foreground">- Deep teal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <code className="text-sm">text-accent</code>
                  <span className="text-sm text-muted-foreground">- Amber</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                  <code className="text-sm">text-muted-foreground</code>
                  <span className="text-sm text-muted-foreground">- Gray</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <code className="text-sm">text-green-600</code>
                  <span className="text-sm text-muted-foreground">- Success</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Certification Badges */}
      <Section>
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Certification Badges
            </Heading>
            <p className="text-muted-foreground mb-6">
              Specialized badges for displaying certifications and credentials
            </p>
          </div>

          {/* SAP Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SAP Certifications</h3>
            <div className="flex flex-wrap gap-2">
              <CertificationBadge name="Business Data Cloud" provider="SAP" variant="primary" />
              <CertificationBadge name="Business Technology Platform" provider="SAP" variant="primary" />
              <CertificationBadge name="Analytics Cloud" provider="SAP" variant="primary" />
              <CertificationBadge name="Signavio" provider="SAP" variant="primary" />
            </div>
          </div>

          {/* Databricks Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Databricks Certifications</h3>
            <div className="flex flex-wrap gap-2">
              <CertificationBadge name="Generative AI Engineer" provider="Databricks" variant="secondary" />
              <CertificationBadge name="Machine Learning Professional" provider="Databricks" variant="secondary" />
            </div>
          </div>

          {/* Enterprise Architecture */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enterprise Architecture</h3>
            <div className="flex flex-wrap gap-2">
              <CertificationBadge name="TOGAF 9 Certified" variant="outline" />
            </div>
          </div>

          {/* Governance & Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Governance & Compliance</h3>
            <div className="flex flex-wrap gap-2">
              <CertificationBadge 
                name="GRC Professional" 
                provider="OCEG" 
                variant="outline" 
                inProgress 
              />
            </div>
          </div>

          {/* Without Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Compact Version (No Icons)</h3>
            <div className="flex flex-wrap gap-2">
              <CertificationBadge name="SAP BDC" variant="primary" showIcon={false} />
              <CertificationBadge name="SAP BTP" variant="primary" showIcon={false} />
              <CertificationBadge name="SAP SAC" variant="primary" showIcon={false} />
              <CertificationBadge name="Databricks GenAI" variant="secondary" showIcon={false} />
              <CertificationBadge name="Databricks ML" variant="secondary" showIcon={false} />
              <CertificationBadge name="TOGAF" variant="outline" showIcon={false} />
            </div>
          </div>
        </div>
      </Section>

      {/* Regular Badges */}
      <Section background="muted">
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Standard Badges
            </Heading>
            <p className="text-muted-foreground mb-6">
              Regular badge component for status, tags, and labels
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Badge Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
                <CardDescription>Different visual styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Badges with Icons */}
            <Card>
              <CardHeader>
                <CardTitle>Badges with Icons</CardTitle>
                <CardDescription>Combining badges with icons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                  <Badge variant="outline">
                    <Clock className="h-3 w-3" />
                    In Progress
                  </Badge>
                  <Badge variant="secondary">
                    <Sparkles className="h-3 w-3" />
                    AI-Powered
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Common Use Cases</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Process Status</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="default">Active</Badge>
                  <Badge variant="outline">Pending</Badge>
                  <Badge variant="secondary">Completed</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Technology Tags</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="outline">SAP</Badge>
                  <Badge variant="outline">Databricks</Badge>
                  <Badge variant="outline">AI</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Priority Levels</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="destructive">High</Badge>
                  <Badge variant="default">Medium</Badge>
                  <Badge variant="outline">Low</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Code Examples */}
      <Section>
        <div className="space-y-8">
          <div>
            <Heading level={2} size="display-md" className="mb-4">
              Code Examples
            </Heading>
            <p className="text-muted-foreground mb-6">
              How to use icons and badges in your components
            </p>
          </div>

          <div className="grid gap-6">
            {/* Icon Import */}
            <Card>
              <CardHeader>
                <CardTitle>Importing Icons</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { Search, Shield, Sparkles } from "lucide-react";

// Use in JSX
<Search className="h-5 w-5 text-primary" />
<Shield className="h-6 w-6 text-secondary" />
<Sparkles className="h-8 w-8 text-accent" />`}
                </pre>
              </CardContent>
            </Card>

            {/* Certification Badge */}
            <Card>
              <CardHeader>
                <CardTitle>Using Certification Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { CertificationBadge } from "@/components/ui/certification-badge";

// Basic usage
<CertificationBadge 
  name="Business Data Cloud" 
  provider="SAP" 
  variant="primary" 
/>

// In progress certification
<CertificationBadge 
  name="GRC Professional" 
  provider="OCEG" 
  inProgress 
/>

// Compact without icon
<CertificationBadge 
  name="TOGAF" 
  showIcon={false} 
/>`}
                </pre>
              </CardContent>
            </Card>

            {/* Regular Badge */}
            <Card>
              <CardHeader>
                <CardTitle>Using Standard Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

// Simple badge
<Badge>New</Badge>

// With variant
<Badge variant="secondary">Featured</Badge>

// With icon
<Badge variant="default">
  <CheckCircle2 className="h-3 w-3" />
  Verified
</Badge>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
