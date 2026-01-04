# Test script for Contact Form API
# Run this script to test the API endpoint

$apiUrl = "http://localhost:3001/api/contact"

$testData = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Company"
    services = @("process-analytics", "sap-modernization")
    currentEnvironment = @("sap-s4hana")
    message = "This is a test message from the contact form API test script."
} | ConvertTo-Json -Depth 10

Write-Host "Testing Contact Form API at: $apiUrl" -ForegroundColor Cyan
Write-Host "Request Body:" -ForegroundColor Yellow
Write-Host $testData -ForegroundColor Gray
Write-Host ""

try {
    $response = Invoke-RestMethod -Uri $apiUrl -Method POST -ContentType "application/json" -Body $testData
    
    Write-Host "Response Status: SUCCESS" -ForegroundColor Green
    Write-Host "Response Data:" -ForegroundColor Yellow
    $response | ConvertTo-Json -Depth 10 | Write-Host -ForegroundColor Gray
    
    if ($response.success) {
        Write-Host ""
        Write-Host "API test PASSED!" -ForegroundColor Green
        if ($response.messageId) {
            Write-Host "Message ID: $($response.messageId)" -ForegroundColor Cyan
        }
    } else {
        Write-Host ""
        Write-Host "API returned success=false" -ForegroundColor Red
    }
} catch {
    Write-Host ""
    Write-Host "API test FAILED!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body:" -ForegroundColor Yellow
        Write-Host $responseBody -ForegroundColor Gray
    }
}
