import React from 'react';

function Teachers() {
  const teachers = [
    { name: 'Dr. Gagandeep singh', subject: 'Mathematics', experience: '10 years' },
    { name: 'Mr. Keshav sharma', subject: 'Science', experience: '8 years' },
    { name: 'Ms. muskan chauhan', subject: 'English', experience: '12 years' },
    { name: 'Prof. Garv kumar', subject: 'History', experience: '15 years' }
  ];

  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <h2>Our Teachers</h2>
        <div className="teachers-list">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              <h3>{teacher.name}</h3>
              <p><strong>Subject:</strong> {teacher.subject}</p>
              <p><strong>Experience:</strong> {teacher.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;