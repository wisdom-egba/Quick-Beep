import React from "react";

const Button = ({ text, image }) => {
  return (
    <div>
      <button className=" border-gray-700 text-gray-600 px-3 py-2 rounded-md shadow-md hover:shadow-xl hover:bg-[#5810ac] hover:text-white flex items-center justify-center gap-2">
        {text}
        {image}
      </button>
    </div>
  );
};

export default Button;
