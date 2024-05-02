import React from 'react';

function SchoolMenu() {
  const schools = [
    // Define your school data here
    { name: 'School Name 1', city: 'City Name', board: 'CBSE' },
    { name: 'School Name 2', city: 'City Name', board: 'ICSE' },
    // ... add more schools
  ];

  return (
    <section className="school-list">
      <h2>Explore Schools</h2>
      <ul>
        {schools.map((school) => (
          <li key={school.name}>
            {/* Display school details (name, city, board) */}
            <p>{school.name} ({school.city} - {school.board})</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SchoolMenu;