import React from "react";
import EmployeeList from "@/components/employee-listing";
import getEmployees from "@/util/getEmployees";

export default async function Page() {
  try {
    const employees = await getEmployees();
    return (
      <div className="p-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 mt-4">Employees</h1>
          <EmployeeList employees={employees.data} />
        </div>
      </div>
    );
  } catch (error) {
    return (
      <main>
        <p>Error fetching employees</p>
      </main>
    );
  }
}