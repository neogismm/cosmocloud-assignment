import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <div className="p-8 mt-10">
      <ol className="flex flex-wrap justify-center gap-8 border border-white/50 p-4 rounded-3xl">
        {employees.map((employee, index) => (
          <li
            key={index}
            className="w-64 mt-5 text-center list-none p-4 rounded-3xl border border-white/40 shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-6xl">👤</span>
            </div>
            <h3 className="text-xl font-semibold">{employee.name}</h3>
            <p className="text-gray-500">id: {employee._id}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default EmployeeList;
