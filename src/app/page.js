import EmployeeList from "@/components/employee-listing";
import getEmployees from "@/util/getEmployees";

export default async function Page() {
  try {
    const employees = await getEmployees();
    const name = employees.data[0].name;
    const line1 = employees.data[0].address.line1;
    const city = employees.data[0].address.city;
    const country = employees.data[0].address.country;
    const zipCode = employees.data[0].address.zip_code;

    return (
      <EmployeeList
        name={name}
        line1={line1}
        city={city}
        country={country}
        zipCode={zipCode}
      />
    );
  } catch (error) {
    return (
      <main>
        <p>Error fetching employees</p>
      </main>
    );
  }
}