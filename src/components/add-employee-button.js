"use client";

import React, { useState } from "react";
import AddEmployeeModal from "@/components/add-employee-modal";

export default function AddEmployeeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="absolute top-0 right-0 bg-green-500 text-white py-2 px-2 rounded mt-4"
      >
        Add New Employee
      </button>
      {isModalOpen && (
        <AddEmployeeModal open={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}
