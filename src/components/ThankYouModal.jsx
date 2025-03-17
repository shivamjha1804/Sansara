import React from "react";

const ThankYouModal = ({ onClose, name }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-6">
          {name ? `Thank you ${name}` : "Thank you"} for submitting your
          enquiry. Our real estate team will contact you shortly.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
