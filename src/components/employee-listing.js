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
        <ol className="flex flex-wrap justify-center gap-8 border border-white/50 p-4 rounded-3xl">
          {employees.map((employee, index) => (
            <li
              key={index}
              className="w-64 mt-5 text-center list-none p-4 rounded-3xl border border-white/40 shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              <button onClick={() => handleEmployeeButtonClick(employee._id)}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold">{employee.name}</h3>
                <p className="text-gray-500">id: {employee._id}</p>
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default EmployeeList;