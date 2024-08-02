async function handler(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employees/${id}`, {
      method: "GET",
      headers: {
        projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
        environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
      },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch employee with id ${id}:`, error);
    throw error;
  }
}

async function getEmployeeById(id) {
  const employee = await handler(id);
  return employee;
}
export default getEmployeeById;
