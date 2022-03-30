import React, { useState } from 'react';

const ExperienceInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [enteredtitle, setEnteredtitle] = useState('');
  const [enteredCompany, setEnteredCompany] = useState('');
  const [enteredCity, setEnteredCity] = useState('');
  const [enteredProvince, setEnteredProvince] = useState('');
  const [enteredDateFrom, setEnteredDateFrom] = useState('');
  const [enteredDateTo, setEnteredDateTo] = useState('');

  const titleHandler = (e) => {
    setEnteredtitle(e.target.value);
  };

  const companyHandler = (e) => {
    setEnteredCompany(e.target.value);
  };
  const cityHandler = (e) => {
    setEnteredCity(e.target.value);
  };
  const provinceHandler = (e) => {
    setEnteredProvince(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };
  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const schoolData = {
      id: Date.now(),
      title: enteredtitle,
      city: enteredCity,
      province: enteredProvince,
      company: enteredCompany,
      dateFrom: enteredDateFrom,
      dateTo: enteredDateTo,
    };
    props.onExperienceInputChange(schoolData);
    setEnteredtitle('');
    setEnteredCompany('');
    setEnteredCity('');
    setEnteredProvince('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
    endInput();
  };

  const cancelInput = () => {
    setEnteredtitle('');
    setEnteredCompany('');
    setEnteredCity('');
    setEnteredProvince('');
    setEnteredDateFrom('');
    setEnteredDateTo('');
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

  return (
    <div>
      <h1>Experience</h1>
      {isNew && (
        <div className="long-button" onClick={startInput}>
          <span>+</span>
          <span>Add Experience</span>
        </div>
      )}
      {!isNew && (
        <form onSubmit={submitHandler} className="form-input">
          <div className="row">
            <label>Job Title</label>
            <input type="text" onChange={titleHandler} value={enteredtitle} />
          </div>
          <div className="row">
            <label>Company</label>
            <input
              type="text"
              onChange={companyHandler}
              value={enteredCompany}
            />
          </div>
          <div className="row">
            <label>City</label>
            <input type="text" onChange={cityHandler} value={enteredCity} />
          </div>
          <div className="row">
            <label>Province</label>
            <input
              type="text"
              onChange={provinceHandler}
              value={enteredProvince}
            />
          </div>
          <div className="row">
            <label>Date From</label>
            <input
              type="date"
              onChange={dateFromHandler}
              value={enteredDateFrom}
            />
          </div>
          <div className="row">
            <label>Date To</label>
            <input type="date" onChange={dateToHandler} value={enteredDateTo} />
          </div>
          <button className="btn">Save</button>
          <button type="button" onClick={cancelInput} className="btn">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ExperienceInput;
