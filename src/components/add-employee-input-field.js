import addNewEmployee from "@/util/addNewEmployee";
import React, { useState } from "react";

const AddEmployeeForm = ({ onClose }) => {
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      address: {
        line1: event.target.line1.value,
        city: event.target.city.value,
        country: event.target.country.value,
        zip_code: event.target.zip_code.value,
      },
      contact_methods: {},
    };

    if (contactMethod === "EMAIL") {
      data.contact_methods = {
        contact_method: "EMAIL",
        value: event.target.email?.value || "",
      };
    } else if (contactMethod === "PHONE") {
      data.contact_methods = {
        contact_method: "PHONE",
        value: event.target.phone?.value || "",
      };
    }

    try {
      const result = await addNewEmployee(data);
      console.log("Employee added:", result);
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="line1"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Address Line 1
        </label>
        <input
          id="line1"
          name="line1"
          type="text"
          placeholder="123 Main St"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          City
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="New York"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Country
        </label>
        <input
          id="country"
          name="country"
          type="text"
          placeholder="USA"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="zip_code"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Zip Code
        </label>
        <input
          id="zip_code"
          name="zip_code"
          type="text"
          placeholder="10001"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact_method"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Preferred Contact Method
        </label>
        <select
          id="contact_method"
          name="contact_method"
          value={contactMethod}
          onChange={(e) => setContactMethod(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Select</option>
          <option value="EMAIL">Email</option>
          <option value="PHONE">Phone</option>
        </select>
      </div>
      {contactMethod === "EMAIL" && (
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      )}
      {contactMethod === "PHONE" && (
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      )}
      <button
        type="submit"
        className="mt-4 mb-4 py-2 px-4 bg-indigo-600 text-white rounded-md float-right"
      >
        Add
      </button>
    </form>
  );
};

export default AddEmployeeForm;