'use client';

import { useRouter } from "next/navigation";
import React from "react";

const EmployeeList = ({ employees }) => {
  const router = useRouter();
  const handleEmployeeButtonClick = (id) => {
    router.push(`/employees/${id}`);
  };

  return (
    <div className="p-8 mt-10">
      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees found</p>
      ) : (
        <div className="border rounded">
          <div className="grid grid-cols-5 text-center gap-4 bg-gray-900 p-4 rounded font-semibold">
            <span>Name</span>
            <span>ID</span>
            <span>Address</span>
            <span>Country</span>
            <span>Zip Code</span>
          </div>
          <ul className=" p-4 rounded-b-3xl">
            {employees.map((employee) => (
              <li
                key={employee._id}
                className="grid grid-cols-5 gap-4 p-4 mb-4 border-b border-gray-200 hover:bg-gray-800 cursor-pointer"
                onClick={() => handleEmployeeButtonClick(employee._id)}
              >
                <span className="text-lg font-semibold">{employee.name}</span>
                <span className="text-gray-500 text-center">{employee._id}</span>
                <span className="text-gray-500 text-center">{employee.address.line1}</span>
                <span className="text-gray-500 text-center">{employee.address.country}</span>
                <span className="text-gray-500 text-center">{employee.address.zip_code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
