import { unstable_noStore } from "next/cache";

async function handler() {
  const params = new URLSearchParams({
    limit: 100000,
    offset: 0,
  });

  try {
    unstable_noStore();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/employees?${params.toString()}`,
      {
        method: "GET",
        headers: {
          projectid: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
          environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
}

async function getEmployees() {
  try {
    const employees = await handler();
    return employees;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
}

export default getEmployees;