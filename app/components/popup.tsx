import React from "react";

const PopUp = ({ openPopUp, closePopUp }) => {
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModalContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModalContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 bg-dark flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-light w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          Images
        </div>
      </div>
    </div>
  );
};

export default PopUp;
