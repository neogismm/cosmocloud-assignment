import EmployeeDetails from "@/components/employee-listing";

async function handler() {
  const params = new URLSearchParams({
    limit: 10,
    offset: 0,
  });

  try {
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
    return error.json();
  }
}

export default async function getEmployees() {
  try {
    const employees = await handler();
    const name = employees.data[0].name;
    const line1 = employees.data[0].address.line1;
    const city = employees.data[0].address.city;
    const country = employees.data[0].address.country;
    const zipCode = employees.data[0].address.zip_code;

    return (
      <EmployeeDetails
        name={name}
        line1={line1}
        city={city}
        country={country}
        zipCode={zipCode}
      />
    );
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    return (
      <main>
        <p>Error fetching employees</p>
      </main>
    );
  }
}
