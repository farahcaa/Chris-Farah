import React, { useState } from "react";

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Popup disappears after 3 seconds
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="border border-black p-5 rounded-full px-10 text-white font-bold bg-Asb text-2xl transform duration-100 hover:-translate-y-2"
      >
        Send
      </button>
      {showPopup && (
        <div className=" text-black fixed bottom-[20px] right-[20px] p-10 bg-white rounded-xl border border-black shadow-xl">
          Message Sent
        </div>
      )}
    </div>
  );
};

export default PopupMessage;
