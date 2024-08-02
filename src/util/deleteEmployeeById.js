async function handler(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/employees/${id}`,
      {
        method: "DELETE",
        headers: {
          projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
          environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
        },
        body: "{}",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Failed to fetch employee with id ${id}:`, error);
    throw error;
  }
}

async function deleteEmployeeById(id) {
  const employee = await handler(id);
  return employee;
}
export default deleteEmployeeById;
