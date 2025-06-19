import { useState } from "react";
import axios from "axios";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Mailiamge from '../assets/Mail/FIT0021.jpg'

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: "",  // Changed from fullName to name
    email: "",
    phone: "",  // Changed from contactNumber to phone
    details: "",  // Changed from message to details
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ type: "", message: "" });

    try {
      // Change the axios post URL in handleSubmit
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/send-franchise-email`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      
      console.log("Response:", response.data);
      setNotification({
        type: "success",
        message: "Your inquiry was submitted successfully!",
      });
      
      // Reset form data only after success
      setFormData({ name: "", email: "", phone: "", details: "" });
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      setNotification({
        type: "error",
        message: error.response?.data?.message || "Failed to submit the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${Mailiamge})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
      id="franchise"
    >
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700 font-commissioner">Franchise Inquiry</h2>
          <p className="text-sm text-gray-600 mt-2">Start your journey with us today!</p>
        </div>

        {notification.message && (
          <div
            className={`text-center py-3 px-4 rounded-lg font-medium text-sm ${
              notification.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500 text-lg" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-xl border border-gray-300 bg-white/90 transition duration-200"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail className="text-gray-500 text-lg" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-xl border border-gray-300 bg-white/90 transition duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-500 text-lg" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-xl border border-gray-300 bg-white/90 transition duration-200"
                  placeholder="+91 99235 98091"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                Details <span className="text-orange-600">*</span>
              </label>
              <textarea
                name="details"
                id="details"
                value={formData.details}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 text-gray-800 rounded-xl border border-gray-300 bg-white/90 transition duration-200"
                placeholder="Tell us about your franchise interest..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-xl text-white font-semibold flex items-center justify-center transition duration-200 ${
              isSubmitting
                ? "bg-[#e06666] cursor-not-allowed"
                : "bg-[#c72527] hover:bg-[#a91d1e] active:bg-[#861719] shadow-md hover:shadow-lg"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FranchiseForm;