'use client'

import React, { useEffect, useState } from "react";
import EmployeeList from "@/components/employee-listing";
import getEmployees from "@/util/getEmployees";
import AddEmployeeButton from "@/components/buttons/add-employee-button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import EmployeeDetailsToggleButton from "@/components/buttons/employee-details-toggle-button";

export default function Page() {
  const [employees, setEmployees] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [addEmployeeStatus, setAddEmployeeStatus] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchEmployees() {
      console.log("Fetching employees...");
      try {
        const employeesData = await getEmployees();
        console.log("Employees data fetched");
        setEmployees(employeesData.data);
        setEmployeeCount(employeesData.page.total);
      } catch (error) {
        toast.error("Error fetching employees");
      }
    }

    fetchEmployees();
  }, []);

  useEffect(() => {
    if (addEmployeeStatus === "success") {
      toast.success(`New employee added. Refresh to see changes`);
      router.refresh();
    } else if (addEmployeeStatus === "error") {
      toast.error("Failed to add employee");
    }
  }, [addEmployeeStatus]);

  return (
    <div className="p-8 mt-10">
      <ToastContainer />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Employee List</h1>
            <p className="mt-2 text-sm">Employee count: {employeeCount}</p>
          </div>
          <AddEmployeeButton setAddEmployeeStatus={setAddEmployeeStatus} />
        </div>
        <div className="flex items-center justify-end ">
          <EmployeeDetailsToggleButton showDetails={showDetails} setShowDetails={setShowDetails} />
        </div>
        <EmployeeList employees={employees} employeeCount={employeeCount} showDetails={showDetails} />
      </div>
    </div>
  );
}