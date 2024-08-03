"use client";

import React, { useEffect, useState } from "react";
import getEmployeeById from "@/util/getEmployeeById";
import EmployeeDetailsForm from "@/components/employee-details";
import deleteEmployeeById from "@/util/deleteEmployeeById";
import { useRouter } from "next/navigation";

function EmployeeDetails({ params }) {
  const router = useRouter();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(params.id);
        setEmployee(data);
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [params.id]);

  const handleEmployeeDelete = async (id) => {
    try {
      const res = await deleteEmployeeById(id);
      alert(res.message);
    } catch (error) {
      console.error("Failed to delete employee:", error);
      alert("Failed to delete employee");
    } finally {
      router.push("/");
      router.refresh();
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 mt-4 text-center">
          Employee Details
        </h1>
        {employee ? (
          <>
            <EmployeeDetailsForm employee={employee} />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleEmployeeDelete(params.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <p>Employee not found</p>
        )}
      </div>
    </div>
  );
}

export default EmployeeDetails;