"use client";

import React, { useEffect, useState } from "react";
import getEmployeeById from "@/util/getEmployeeById";
import EmployeeDetailsForm from "@/components/forms/employee-details-form";
import deleteEmployeeById from "@/util/deleteEmployeeById";
import { useRouter } from "next/navigation";
import { ArrowUturnLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

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

  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 mt-4">
          <button
            onClick={handleGoBack}
            className="border border-white/40 rounded p-3"
          >
            <ArrowUturnLeftIcon className="size-6 text-white-500" />
          </button>
          <h1 className="text-3xl font-bold flex-grow text-center">
            <span>Employee Details</span>
          </h1>
          <div className="w-16"></div>
        </div>
        {employee ? (
          <>
            <EmployeeDetailsForm employee={employee} />
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleEmployeeDelete(params.id)}
                className="px-10 py-2 bg-red-500 text-white rounded"
              >
                <TrashIcon className="size-6" />
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
