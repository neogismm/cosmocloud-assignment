import React from "react";

const teamMembers = [
  { name: 'Michael Foster', title: 'Co-Founder / CTO', image: 'path_to_image' },
  { name: 'Dries Vincent', title: 'Business Relations', image: 'path_to_image' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', image: 'path_to_image' },
];

const Team = () => {
  return (
    <div className="p-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 mt-4">Employees</h1>
        <div className="flex flex-wrap justify-center gap-8 border border-white/50 p-4 rounded-3xl">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-40 text-center">
              <img className="w-24 h-24 mx-auto rounded-full object-cover mb-4" src={member.image} alt={member.name} />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;