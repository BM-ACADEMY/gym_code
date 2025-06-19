const getEnquiryUserEmailTemplate = (name) => `
  <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f5f7fa; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04);">
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="color: #2d3748; font-size: 28px; font-weight: 700; margin: 0 0 8px 0;">Thanks for reaching out, ${name}!</h2>
        <p style="color: #718096; margin: 0; font-size: 16px;">We've received your gym enquiry and will get back to you shortly 🎊</p>
      </div>

      <div style="margin-bottom: 32px;">
        <p style="color: #4a5568; margin-bottom: 20px; line-height: 1.6; font-size: 16px;">Thank you for your interest in our fitness center! Our team will review your enquiry and respond within 24 hours with all the details you need to start your fitness journey with us.</p>
      </div>
      
      <div style="text-align: center; padding-top: 24px; border-top: 1px solid #edf2f7;">
        <p style="color: #a0aec0; font-size: 14px; margin: 0;">If you didn't make this enquiry, please disregard this email.</p>
      </div>
    </div>
  </div>
`;


module.exports = getEnquiryUserEmailTemplate;