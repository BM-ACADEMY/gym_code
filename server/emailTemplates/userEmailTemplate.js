const getUserEmailTemplate = (name, details) => `
  <div style="font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background-color: #e6f0fa; padding: 24px;">
    <div style="max-width: 640px; margin: 0 auto; background: white; padding: 32px; border-radius: 16px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); border: 2px solid #004aad;">
      
      <div style="text-align: center; margin-bottom: 24px;">
        <h2 style="color: #004aad; font-size: 26px; font-weight: 700; margin: 0;">Franchise Form Submitted</h2>
        <p style="color: #1e1e1e; margin-top: 10px;">Thanks, ${name}, for showing interest in joining our fitness family!</p>
      </div>
      
      <div style="margin-bottom: 24px;">
        <p style="color: #000000; margin-bottom: 16px; line-height: 1.6;">
          We've received your franchise inquiry and our team will get in touch with you shortly to discuss further steps.
        </p>
        
        <h3 style="color: #004aad; font-size: 18px; font-weight: 700; margin-bottom: 12px;">Submitted Details</h3>
        <div style="background: #f0f7ff; padding: 16px; border-radius: 8px; border-left: 5px solid #004aad;">
          <p>${details}</p>
        </div>
      </div>

      <div style="text-align: center; padding-top: 24px; border-top: 1px solid #b3d1f5; color: #6b6b6b; font-size: 14px;">
        <p style="margin: 8px 0;">This email was automatically generated. Please respond directly to the sender.</p>
        <p style="margin: 8px 0;">
          &copy; ${new Date().getFullYear()} 
          <a href="https://bmtechx.in" target="_blank" rel="noopener noreferrer" style="color: #004aad; text-decoration: none;">BMTechx.in</a>. 
          All rights reserved.
        </p>
      </div>

    </div>
  </div>
`;

module.exports = getUserEmailTemplate;
