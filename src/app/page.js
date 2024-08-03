import React from "react";
import EmployeeList from "@/components/employee-listing";
import getEmployees from "@/util/getEmployees";
import AddEmployeeButton from "@/components/add-employee-button";

export default async function Page() {
  try {
    const employees = await getEmployees();
    const employeeCount = employees.page.total;

    return (
      <div className="p-8 mt-10">
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Employee List</h1>
              <p className="mt-2 text-sm">Employee count: {employeeCount}</p>
            </div>
            <AddEmployeeButton />
          </div>
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
