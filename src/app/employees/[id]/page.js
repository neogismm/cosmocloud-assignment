"use client";

import React from "react";
import getEmployeeById from "@/util/getEmployeeById";
import EmployeeDetailsForm from "@/components/employee-details";
import deleteEmployeeById from "@/util/deleteEmployeeById";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

async function EmployeeDetails({ params }) {
  const router = useRouter();
  const handleEmployeeDelete = async (id) => {
    try {
      const res = await deleteEmployeeById(id);
      // revalidatePath("/");
      alert(res.message);
    } catch (error) {
      console.error("Failed to delete employee:", error);
      alert("Failed to delete employee");
    } finally {
      router.push("/");
      router.refresh();
    }
  };

  const getEmployee = await getEmployeeById(params.id);
  return (
    <div className="p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 mt-4 text-center">
          Employee Details
        </h1>
        {getEmployee ? (
          <>
            <EmployeeDetailsForm employee={getEmployee} />
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
