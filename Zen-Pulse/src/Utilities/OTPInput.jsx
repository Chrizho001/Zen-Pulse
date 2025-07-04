import React, { useRef } from "react";

export default function OTPInput({ length = 6, onChange }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      e.target.value = value;
      if (index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else if (value === "") {
      // Allow deletion
    } else {
      e.target.value = ""; // Clear invalid input
    }

    const otp = inputsRef.current.map((input) => input.value).join("");
    onChange && onChange(otp);
  };



  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-10 h-12 text-center text-black text-xl bg-gray-200 border-b-2 border-gray-400 outline-none focus:border-black py-2"
        />
      ))}
    </div>
  );
}
