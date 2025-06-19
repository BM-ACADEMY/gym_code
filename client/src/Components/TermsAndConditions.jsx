import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Termsandcondition = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '900px',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    overflowY: 'auto'
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="terms-and-conditions-modal"
      aria-describedby="terms-and-conditions-for-franchise"
    >
      <Box sx={style}>
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <h1 className="text-3xl md:text-2xl sm:text-xl font-bold text-center mb-6 text-red-600">
 Terms & Conditions
</h1>
        
        <div className="space-y-8">
          {/* Eligibility */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Applicant must be 21 years or older and legally eligible to operate a business in India.</li>
              <li>Business or fitness industry experience is an advantage but not mandatory.</li>
              <li>Passion for fitness, customer service, and business growth is essential.</li>
            </ul>
          </section>

          {/* Franchise Fee */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Franchise Fee & Investment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A one-time, non-refundable franchise fee is applicable.</li>
              <li>Total investment includes gym setup, imported equipment, branding, tech software, and working capital.</li>
              <li>Investment structure will vary depending on the city and gym format (standard/premium).</li>
            </ul>
          </section>

          {/* Branding */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Branding & Identity</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Franchisee must follow Battle Fitness's brand identity strictly-this includes logo, interiors, uniforms, and marketing content.</li>
              <li>Unauthorized brand changes are not permitted and may lead to termination.</li>
            </ul>
          </section>

          {/* Location */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location & Setup</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Final location approval is mandatory and based on feasibility and market research.</li>
              <li>Interiors and layout will be executed as per the brand's standardized design guide.</li>
              <li>The franchisee is responsible for site development as per approved plans..</li>
            </ul>
          </section>

          {/* Equipment */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Equipment & Technology</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All equipment must be procured through Battle Fitness's authorized vendors to maintain uniformity and quality.</li>
              <li>Franchisees are required to use our centralized gym management software.</li>
            </ul>
          </section>

          {/* Training */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Training & Support</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Complete training will be provided to the franchisee and core team before launch.</li>
              <li>Ongoing support in marketing, technical operations, staff hiring, and sales training will be provided.</li>
            </ul>
          </section>

          {/* Operational Standards */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Operational Standards</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hygiene, safety, staff behavior, and member experience must meet Battle Fitness standards..</li>
              <li>Monthly audits and service reviews will be conducted to ensure compliance.</li>
            </ul>
          </section>

          {/* Marketing */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Marketing & Promotions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>National marketing campaigns will be managed by Battle Fitness HQ.</li>
              <li>Local promotions must be approved and aligned with the brand tone and message.</li>
            </ul>
          </section>

          {/* Revenue */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Revenue Sharing & Royalties</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A monthly royalty fee (percentage of gross revenue) will be payable to Battle Fitness.</li>
              <li>Timely financial reporting and royalty payments are mandatory for continuity.</li>
            </ul>
          </section>

          {/* Contract */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contract Duration & Renewal</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Initial franchise agreement is valid for 5 years.</li>
              <li>Renewal is based on performance review and mutual agreement.</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Termination Policy</h2>
            <p className="mb-2 text-gray-700">Franchise rights can be terminated under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-medium">Breach of agreement</span></li>
              <li><span className="font-medium">Brand reputation damage</span></li>
              <li><span className="font-medium">Consistent operational non-compliance</span></li>
              <li><span className="font-medium">Non-payment of royalties or dues</span></li>
            </ul>
          </section>

          {/* Non-Compete */}
          <section className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Non-Compete & Confidentiality</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The franchisee agrees not to start or partner with any competing fitness brand during the agreement period and up to 12 months post termination.</li>
              <li>All business, client, and training data must remain confidential.</li>
            </ul>
          </section>
        </div>
      </Box>
    </Modal>
  );
};

export default Termsandcondition;