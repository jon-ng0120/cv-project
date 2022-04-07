import React, { useState, useEffect } from 'react';

const GeneralInput = (props) => {
  const [generalData, setGeneralData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    province: '',
    postal: '',
    phone: '',
    email: '',
  });

  const generalDataHandler = (e) => {
    const value = e.target.value;
    setGeneralData({
      ...generalData,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    props.onGeneralInputChange(generalData);
  });

  return (
    <div id="general-input">
      <h1>Contact Info</h1>
      <div className="row">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={generalData.firstName}
          placeholder="John"
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Smith"
          value={generalData.lastName}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Street</label>
        <input
          type="text"
          name="street"
          placeholder="Fake St"
          value={generalData.street}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Vancouver"
          value={generalData.city}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Province</label>
        <input
          type="text"
          name="province"
          placeholder="BC"
          value={generalData.province}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Postal Code</label>
        <input
          type="text"
          name="postal"
          placeholder="V2C 4J9"
          value={generalData.postal}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="604 123 1234"
          value={generalData.phone}
          onChange={generalDataHandler}
        />
      </div>
      <div className="row">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={generalData.email}
          placeholder="John.Smith@gmail.com"
          onChange={generalDataHandler}
        />
      </div>
    </div>
  );
};

export default GeneralInput;
