import React from "react";

function EmployeeDetailsForm({ employee }) {
  return (
    <div className="flex justify-center text-center">
      <div className="w-full max-w-md">
        <div className="mb-4 border border-white/40 p-4 rounded-3xl">
          <label className="block text-left text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={employee.name}
            readOnly
            className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 border border-white/40 p-4 rounded-3xl">
          <label className="block text-left text-sm font-bold mb-2">
            Employee ID
          </label>
          <input
            type="text"
            value={employee._id}
            readOnly
            className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 border border-white/40 p-4 rounded-3xl">
          <label className="block text-left text-sm font-bold mb-2">
            Address
          </label>
          <div className="mb-2">
            <label className="block text-left text-xs font-bold mb-1">
              Line 1
            </label>
            <input
              type="text"
              value={employee.address.line1}
              readOnly
              className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label className="block text-left text-xs font-bold mb-1">
              City
            </label>
            <input
              type="text"
              value={employee.address.city}
              readOnly
              className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label className="block text-left text-xs font-bold mb-1">
              Country
            </label>
            <input
              type="text"
              value={employee.address.country}
              readOnly
              className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-left text-xs font-bold mb-1">
              Zip Code
            </label>
            <input
              type="text"
              value={employee.address.zip_code}
              readOnly
              className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4 border border-white/40 p-4 rounded-3xl">
          <div>
            <label className="block text-left text-xs font-bold mb-1">
              {employee.contact_methods.contact_method}
            </label>
            <input
              type="text"
              value={employee.contact_methods.value}
              readOnly
              className="shadow appearance-none border border-white/40 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetailsForm;