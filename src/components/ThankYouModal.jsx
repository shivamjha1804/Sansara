import React from "react";

const ThankYouModal = ({ onClose, name }) => {
  // Function to handle the download of the brochure
  const handleDownloadBrochure = () => {
    // Replace 'brochure.pdf' with the actual path to your PDF file
    const pdfUrl = "https://psgroup.in/sansara-Eflyer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "sansara-Eflyer.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  console.log("Opened");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        {/* X button to close the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &#10005; {/* Unicode for 'X' */}
        </button>

        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-6">
          {name ? `Thank you ${name}` : "Thank you"} for submitting your
          enquiry. Our real estate team will contact you shortly.
        </p>

        {/* Download Brochure Button */}
        <div className="flex justify-end">
          <button
            onClick={handleDownloadBrochure}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
