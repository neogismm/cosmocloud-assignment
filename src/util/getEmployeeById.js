// async function handler(id) {
  function handler(id) {

  try {
    // Commenting out the real API call
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/employees/${id}`, {
    //   method: "GET",
    //   headers: {
    //     projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
    //     environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
    //   },
    // });
    // if (!response.ok) {
    //     throw new Error("Network response was not ok");
    // }
    // const data = await response.json();
    // return data;

    // Hard-coded response data
    const data = [
      {
        "_id": "66ad523fded4500c17e591af",
        "name": "Jessica Garcia",
        "address": {
          "line1": "456 Fir St",
          "city": "San Jose",
          "country": "USA",
          "zip_code": "95101"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "jessica.garcia@example.com"
        }
      },
      {
        "_id": "66ad52c0ded4500c17e591b3",
        "name": "Daniel Hernandez",
        "address": {
          "line1": "321 Willow St",
          "city": "Austin",
          "country": "USA",
          "zip_code": "73301"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "daniel.hernandez@example.com"
        }
      },
      {
        "_id": "66ad52cdded4500c17e591b4",
        "name": "Christopher Martinez",
        "address": {
          "line1": "852 Redwood St",
          "city": "Dallas",
          "country": "USA",
          "zip_code": "75201"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "christopher.martinez@example.com"
        }
      },
      {
        "_id": "66ad52eaded4500c17e591b5",
        "name": "David Wilson",
        "address": {
          "line1": "159 Birch St",
          "city": "San Antonio",
          "country": "USA",
          "zip_code": "78201"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "david.wilson@example.com"
        }
      },
      {
        "_id": "66ad5319ded4500c17e591b7",
        "name": "Emily Davis",
        "address": {
          "line1": "987 Cedar St",
          "city": "Philadelphia",
          "country": "USA",
          "zip_code": "19101"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "emily.davis@example.com"
        }
      },
      {
        "_id": "66adc2537222a0f11bebbd20",
        "name": "Jane Doe",
        "address": {
          "line1": "456 Elm St",
          "city": "Los Angeles",
          "country": "USA",
          "zip_code": "90001"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "jane.doe@example.com"
        }
      },
      {
        "_id": "66adc2627222a0f11bebbd21",
        "name": "Robert Smith",
        "address": {
          "line1": "789 Oak St",
          "city": "Chicago",
          "country": "USA",
          "zip_code": "60601"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "robert.smith@example.com"
        }
      },
      {
        "_id": "66adc27a7222a0f11bebbd22",
        "name": "Alice Johnson",
        "address": {
          "line1": "321 Pine St",
          "city": "Houston",
          "country": "USA",
          "zip_code": "77001"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "alice.johnson@example.com"
        }
      },
      {
        "_id": "66adc2917222a0f11bebbd23",
        "name": "Michael Brown",
        "address": {
          "line1": "654 Maple St",
          "city": "Phoenix",
          "country": "USA",
          "zip_code": "85001"
        },
        "contact_methods": {
          "contact_method": "EMAIL",
          "value": "michael.brown@example.com"
        }
      }
    ];

    // Find the employee by id
    const employee = data.find((emp) => emp._id === id);
    if (!employee) {
      throw new Error(`Employee with id ${id} not found`);
    }
    return employee;
  } catch (error) {
    console.error(`Failed to fetch employee with id ${id}:`, error);
    throw error;
  }
}

async function getEmployeeById(id) {
  // const employee = await handler(id);
  const employee = handler(id);

  return employee;
}

export default getEmployeeById;