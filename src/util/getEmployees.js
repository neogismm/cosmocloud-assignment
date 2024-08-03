import { unstable_noStore } from "next/cache";
import fs from 'fs';

async function handler() {
  const params = new URLSearchParams({
    limit: 10,
    offset: 0,
  });

  try {
    unstable_noStore();
    // Commenting out the real API call
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/employees?${params.toString()}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       projectid: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
    //       environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
    //     },
    //   }
    // );

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    // const data = await response.json();
    // return data;

    // Using dummy response from response.json
    const fileContents = fs.readFileSync('/Users/neog/Desktop/cosmocloud-assignment/src/response.json', 'utf8');
    const data = JSON.parse(fileContents);
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