import React, { useState } from 'react';

const RegistrationForm = () => {

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const handleSubmit = (event) => {
    
    console.log('Form submitted:', { fullName, address, occupation, contactNumber });
    setFullName('')
    setAddress('')
    setOccupation('')
    setContactNumber('')
  };
  return (
    <div style={{ textAlign: "start", margin: "20px" }}>
      <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto", display: "flex", flexDirection: "column" }}>
        <label htmlFor="fullName" style={{ marginBottom: "5px" }}>Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
        />

        <label htmlFor="address" style={{ marginBottom: "5px" }}>Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          style={{ marginBottom: "20px", padding: "10px", fontSize: "16px", height: "60px" }}
        ></textarea>

        <label htmlFor="occupation" style={{ marginBottom: "5px" }}>Occupation:</label>
        <select
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
          style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
        >
          <option value="">Select Occupation</option>
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
          <option value="Self-employed">Self-employed</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="contactNumber" style={{ marginBottom: "5px" }}>Contact Number:</label>
        <input
        type="number"
        id="contactNumber"
        name="contactNumber"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        required
        
        style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
