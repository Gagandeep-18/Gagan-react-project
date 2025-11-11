import React, { useState } from 'react';

function EnrollForm({ setShowEnroll }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) {
      setError('Please fill in all required fields.');
      return;
    }
    // Dummy submission (replace with API call)
    console.log('Enrollment submitted:', formData);
    alert('Thank you for enrolling! We will contact you soon.');
    setFormData({ name: '', email: '', course: '', message: '' });
    setError('');
    setShowEnroll(false);
  };

  return (
    <div className="enroll-modal" onClick={() => setShowEnroll(false)}>  {/* Close on outside click */}
      <div className="enroll-form" onClick={(e) => e.stopPropagation()}>  {/* Prevent close on form click */}
        <h2>Enroll Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a Course</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
          </select>
          <textarea
            name="message"
            placeholder="Additional Message (optional)"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">Submit Enrollment</button>
        </form>
        <button onClick={() => setShowEnroll(false)} className="close-button">Close</button>
      </div>
    </div>
  );
}

export default EnrollForm;