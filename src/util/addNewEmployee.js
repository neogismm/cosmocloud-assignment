async function addNewEmployee(data) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`, {
      method: "POST",
      headers: {
        projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
        environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Employee added successfully:", result);
    return result;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
}

export default addNewEmployee;
