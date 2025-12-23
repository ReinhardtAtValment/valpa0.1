# Contact Form Service API Specification

## Base URL

**Production:** `https://your-domain.com/api`  
**Development:** `http://localhost:3001/api`

## Authentication

No authentication required. Rate limiting is applied per IP address.

## Rate Limiting

- **Limit:** 5 requests per minute per IP address
- **Window:** 60 seconds
- **Response:** HTTP 429 Too Many Requests when limit exceeded

## Endpoints

### Health Check

Check if the service is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "success": true,
  "message": "Service is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Service is operational

---

### Submit Contact Form

Submit a contact form with any number of fields.

**Endpoint:** `POST /contact`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**

The request body accepts any JSON object with form fields. Common fields include:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services.",
  "phone": "+1-555-123-4567",
  "subject": "General Inquiry",
  "company": "Acme Corp"
}
```

**Field Validation Rules:**

| Field | Type | Required | Validation | Max Length |
|-------|------|----------|------------|------------|
| `email` | string | No | Valid email format if provided | - |
| `name` | string | No | - | 200 characters |
| `message` | string | No | - | 5000 characters |
| `*` (any other field) | string | No | - | 1000 characters |

**Note:** All fields are optional. The service accepts any field names dynamically.

**Success Response:**

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "details": {
    "stored": true,
    "notified": true
  }
}
```

**Partial Success Response:**

If one service fails but the other succeeds:

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "details": {
    "stored": true,
    "notified": false
  }
}
```

**Error Responses:**

**Status Code:** `400 Bad Request` - Validation Error

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Message must not exceed 5000 characters",
      "param": "message",
      "location": "body"
    }
  ]
}
```

**Status Code:** `429 Too Many Requests` - Rate Limit Exceeded

```json
{
  "success": false,
  "message": "Too many requests from this IP, please try again later."
}
```

**Status Code:** `500 Internal Server Error` - Both Services Failed

```json
{
  "success": false,
  "message": "Failed to process form submission",
  "errors": {
    "sheets": "Google Sheets operation failed: ...",
    "email": "Email sending failed: ..."
  }
}
```

**Status Code:** `404 Not Found` - Invalid Endpoint

```json
{
  "success": false,
  "message": "Route not found"
}
```

---

## CORS Configuration

The service is configured to accept requests from specific origins. Make sure your static website domain is included in the `ALLOWED_ORIGINS` environment variable.

**Allowed Origins Format:**
```
https://yourstaticsite.com,https://www.yourstaticsite.com
```

---

## Example Usage

### JavaScript (Fetch API)

```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch('https://your-domain.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      console.log('Form submitted successfully!');
      if (result.details.stored && result.details.notified) {
        console.log('Data stored and notification sent');
      } else if (result.details.stored) {
        console.log('Data stored, but notification failed');
      } else if (result.details.notified) {
        console.log('Notification sent, but storage failed');
      }
      return result;
    } else {
      console.error('Validation errors:', result.errors);
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Usage
submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello, I would like to learn more about your services.',
  phone: '555-123-4567'
});
```

### HTML Form with JavaScript

```html
<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('https://your-domain.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Thank you! Your message has been sent.');
      e.target.reset();
    } else {
      alert('Error: ' + result.message);
      if (result.errors) {
        console.error('Validation errors:', result.errors);
      }
    }
  } catch (error) {
    alert('Failed to submit form. Please try again later.');
    console.error(error);
  }
});
</script>
```

### cURL

```bash
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message",
    "phone": "555-123-4567"
  }'
```

### Python (requests)

```python
import requests
import json

url = "https://your-domain.com/api/contact"
data = {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message",
    "phone": "555-123-4567"
}

response = requests.post(url, json=data)

if response.status_code == 200:
    result = response.json()
    if result["success"]:
        print("Form submitted successfully!")
        print(f"Stored: {result['details']['stored']}")
        print(f"Notified: {result['details']['notified']}")
    else:
        print(f"Error: {result['message']}")
else:
    print(f"HTTP Error: {response.status_code}")
    print(response.json())
```

### PHP

```php
<?php
$url = 'https://your-domain.com/api/contact';
$data = [
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'message' => 'Hello, this is a test message',
    'phone' => '555-123-4567'
];

$options = [
    'http' => [
        'header' => "Content-type: application/json\r\n",
        'method' => 'POST',
        'content' => json_encode($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo "Error submitting form";
} else {
    $response = json_decode($result, true);
    if ($response['success']) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $response['message'];
    }
}
?>
```

---

## Response Time

- **Typical:** 500ms - 2s
- **Timeout:** 60 seconds

## Error Handling Best Practices

1. **Always check the `success` field** in the response
2. **Handle validation errors** by displaying them to the user
3. **Implement retry logic** for network errors (not for 400/429 errors)
4. **Show user-friendly messages** based on error types
5. **Log errors** for debugging purposes

## Testing

You can test the API using:

1. **Postman** - Import the endpoints and test with sample data
2. **cURL** - Use command line examples above
3. **Browser DevTools** - Use fetch() in console
4. **Online tools** - Postman Web, Insomnia, etc.

## Support

For issues or questions, check the main [README.md](README.md) file for setup and troubleshooting information.

