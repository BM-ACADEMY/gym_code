const getOwnerEmailTemplate = (name, email, phone, details) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Franchise Inquiry</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background-color: #eff6ff;
      color: #111;
    }

    .container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
    }

    .card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .header {
      background-color: #2563eb;
      color: white;
      padding: 32px 24px;
      text-align: center;
    }

    .header h1 {
      font-size: 24px;
      margin: 0 0 8px;
    }

    .header p {
      font-size: 14px;
      margin: 0;
      opacity: 0.9;
    }

    .content {
      padding: 32px 24px;
    }

    .info-box {
      background: #f0f5ff;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 24px;
    }

    .info-row {
      display: flex;
      margin-bottom: 12px;
    }

    .info-label {
      font-weight: 600;
      width: 100px;
      color: #444;
    }

    .info-value a {
      color: #2563eb;
      text-decoration: none;
    }

    .info-value a:hover {
      text-decoration: underline;
    }

    .message-box {
      background: #f9fbff;
      border-left: 4px solid #2563eb;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
    }

    .message-box h3 {
      margin-top: 0;
      font-size: 16px;
      color: #111;
    }

    .message-content {
      color: #333;
      line-height: 1.6;
      margin: 0;
    }

    .footer {
      border-top: 1px solid #eee;
      text-align: center;
      font-size: 12px;
      color: #888;
      padding-top: 20px;
    }

    .footer a {
      color: #2563eb;
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <h1>New Franchise Inquiry</h1>
        <p>You've received a new franchise request from your website</p>
      </div>

      <div class="content">
        <div class="info-box">
          <div class="info-row">
            <span class="info-label">Name:</span>
            <span class="info-value">${name}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email:</span>
            <span class="info-value"><a href="mailto:${email}">${email}</a></span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone:</span>
            <span class="info-value">${phone || "Not provided"}</span>
          </div>
        </div>

        <div class="message-box">
          <h3>Inquiry Details</h3>
          <p class="message-content">${details}</p>
        </div>

        <div class="footer">
          <p>This email was automatically generated. Please respond directly to the sender.</p>
          <p>
            &copy; ${new Date().getFullYear()} 
            <a href='https://bmtechx.in' target='_blank' rel="noopener noreferrer">
              BMTechx.in
            </a> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

module.exports = getOwnerEmailTemplate;
