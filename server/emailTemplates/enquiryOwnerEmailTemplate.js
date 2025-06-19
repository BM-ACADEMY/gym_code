const getEnquiryOwnerEmailTemplate = (name, email, phone, details) => `
  <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f5f7fa; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04);">
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="color: #2d3748; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">New Enquiry</h2>
        <p style="color: #718096; margin: 0; font-size: 16px;">A potential member has contacted you through the website</p>
      </div>

      <div style="background: #f0f5ff; padding: 24px; border-radius: 12px; margin-bottom: 32px; border: 1px solid #e2e8f0;">
        <h3 style="color: #2d3748; font-size: 18px; font-weight: 600; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Contact Information</h3>
        <div style="display: flex; margin-bottom: 16px; align-items: center;">
          <span style="flex: 0 0 100px; color: #4a5568; font-weight: 500; font-size: 15px;">Name:</span>
          <span style="color: #2d3748; font-weight: 500;">${name}</span>
        </div>
        <div style="display: flex; margin-bottom: 16px; align-items: center;">
          <span style="flex: 0 0 100px; color: #4a5568; font-weight: 500; font-size: 15px;">Email:</span>
          <a href="mailto:${email}" style="color: #4299e1; text-decoration: none; font-weight: 500;">${email}</a>
        </div>
        <div style="display: flex; margin-bottom: 16px; align-items: center;">
          <span style="flex: 0 0 100px; color: #4a5568; font-weight: 500; font-size: 15px;">Phone:</span>
          <span style="color: #2d3748; font-weight: 500;">${phone || "Not provided"}</span>
        </div>
      </div>
      
      <div style="margin-bottom: 32px;">
        <h3 style="color: #2d3748; font-size: 18px; font-weight: 600; margin-bottom: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Message Details</h3>
        <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border-left: 5px solid #f6871f;">
          <p style="margin: 0; color: #4a5568; line-height: 1.6; font-size: 15px;">${details}</p>
        </div>
      </div>
      
      <div style="text-align: center; padding-top: 24px; border-top: 1px solid #edf2f7;">
        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #f6871f 0%, #f8a825 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 16px;">Reply to ${name.split(' ')[0]}</a>
        <p style="color: #a0aec0; font-size: 14px; margin: 0;">Please respond to this enquiry within 24 hours for best conversion.</p>
      </div>
    </div>
  </div>
`;


module.exports = getEnquiryOwnerEmailTemplate;