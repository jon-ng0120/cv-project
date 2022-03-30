import React, { useState } from 'react';

const ExperienceInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputJobTitle, setEnteredJobTitle] = useState(props.title);
  const [inputCompany, setEnteredCompany] = useState(props.company);
  const [inputJobCity, setEnteredJobCity] = useState(props.city);
  const [inputJobProvince, setEnteredJobProvince] = useState(props.province);
  const [inputDateFrom, setEnteredDateFrom] = useState(props.dateFrom);
  const [inputDateTo, setEnteredDateTo] = useState(props.dateTo);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const jobTitleHandler = (e) => {
    setEnteredJobTitle(e.target.value);
  };

  const companyHandler = (e) => {
    setEnteredCompany(e.target.value);
  };

  const cityHandler = (e) => {
    setEnteredJobCity(e.target.value);
  };

  const provinceHandler = (e) => {
    setEnteredJobProvince(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };

  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const cancelEdit = () => {
    setEnteredJobTitle(props.name);
    setEnteredCompany(props.city);
    setEnteredJobProvince(props.province);
    setEnteredCompany(props.degree);
    setEnteredDateFrom(props.dateFrom);
    setEnteredDateTo(props.dateTo);
    stopEditing();
  };

  const experienceEditHandler = () => {
    const editedExperienceData = {
      id: props.id,
      name: inputJobTitle,
      company: inputCompany,
      city: inputJobCity,
      province: inputJobProvince,
      dateFrom: inputDateFrom,
      dateTo: inputDateTo,
    };
    props.editExperienceHandler(props.id, editedExperienceData);
    stopEditing();
  };

  if (isEditing) {
    return (
      <div className="form-row">
        <div className="row">
          <label>Job Title</label>
          <input type="text" value={inputJobTitle} onChange={jobTitleHandler} />
        </div>
        <div className="row">
          <label>Company</label>
          <input type="text" value={inputCompany} onChange={companyHandler} />
        </div>
        <div className="row">
          <label>City</label>
          <input type="text" value={inputJobCity} onChange={cityHandler} />
        </div>
        <div className="row">
          <label>Province</label>
          <input
            type="text"
            value={inputJobProvince}
            onChange={provinceHandler}
          />
        </div>
        <div className="row">
          <label>Date From</label>
          <input type="date" value={inputDateFrom} onChange={dateFromHandler} />
        </div>
        <div className="row">
          <label>Date To</label>
          <input type="date" value={inputDateTo} onChange={dateToHandler} />
        </div>
        <button className="btn" type="button" onClick={experienceEditHandler}>
          Save
        </button>
        <button className="btn" type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    );
  } else {
    return (
      <div className="form-row">
        <div className="row">
          <div className="form-row-1">
            <p className="school-name">{inputJobTitle}</p>
            <div className="form-icons">
              <div>
                <span className="material-icons" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  className="material-icons"
                  onClick={() => props.deleteExperienceHandler(props.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>
            {inputCompany}, {inputJobCity} {inputJobProvince}
          </p>
          <p>
            {inputDateFrom} to {inputDateTo}
          </p>
        </div>
      </div>
    );
  }
};

export default ExperienceInputItem;
