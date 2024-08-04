"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EmployeeList = ({ employees, employeeCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 6;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handleNextPage = () => {
    if (indexOfLastEmployee < employeeCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const router = useRouter();
  const handleEmployeeButtonClick = (id) => {
    router.push(`/employees/${id}`);
  };

  const displayedEmployeesCount = Math.min(indexOfLastEmployee, employeeCount);

  return (
    <div className="p-8 mt-10">
      {employeeCount === 0 ? (
        <p className="text-center text-gray-500">No employees found</p>
      ) : (
        <>
          <div className="flex justify-between">
            <span>
              List items:{" "}
              <span className="font-semibold">
                {displayedEmployeesCount}/{employeeCount}
              </span>
            </span>
            <div>
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50 mr-2"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={indexOfLastEmployee >= employeeCount}
                className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          <div className="border rounded mt-2">
            <div className="grid grid-cols-5 text-center gap-4 bg-gray-900 p-4 rounded font-semibold">
              <span>Name</span>
              <span>ID</span>
              <span>Address</span>
              <span>Country</span>
              <span>Zip Code</span>
            </div>
            <ul className="p-4 rounded-b-3xl">
              {currentEmployees.map((employee) => (
                <li
                  key={employee._id}
                  className="grid grid-cols-5 gap-4 p-4 mb-4 border-b border-gray-200 hover:bg-gray-800 cursor-pointer"
                  onClick={() => handleEmployeeButtonClick(employee._id)}
                >
                  <span className="text-lg font-semibold">{employee.name}</span>
                  <span className="text-gray-500 text-center">
                    {employee._id}
                  </span>
                  <span className="text-gray-500 text-center">
                    {employee.address.line1}
                  </span>
                  <span className="text-gray-500 text-center">
                    {employee.address.country}
                  </span>
                  <span className="text-gray-500 text-center">
                    {employee.address.zip_code}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeList;
