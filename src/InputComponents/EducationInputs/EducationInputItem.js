import React, { useState } from 'react';

const EducationInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputSchoolName, setEnteredSchoolName] = useState(props.name);
  const [inputSchoolCity, setEnteredSchoolCity] = useState(props.city);
  const [inputSchoolProvince, setEnteredSchoolProvince] = useState(
    props.province
  );
  const [inputDegree, setEnteredDegree] = useState(props.degree);
  const [inputDateFrom, setEnteredDateFrom] = useState(props.dateFrom);
  const [inputDateTo, setEnteredDateTo] = useState(props.dateTo);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const schoolNameHandler = (e) => {
    setEnteredSchoolName(e.target.value);
  };

  const degreeHandler = (e) => {
    setEnteredDegree(e.target.value);
  };

  const cityHandler = (e) => {
    setEnteredSchoolCity(e.target.value);
  };

  const provinceHandler = (e) => {
    setEnteredSchoolProvince(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };

  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const cancelEdit = () => {
    setEnteredSchoolName(props.name);
    setEnteredSchoolCity(props.city);
    setEnteredSchoolProvince(props.province);
    setEnteredDegree(props.degree);
    setEnteredDateFrom(props.dateFrom);
    setEnteredDateTo(props.dateTo);
    stopEditing();
  };

  const educationEditHandler = () => {
    const editedSchoolData = {
      id: props.id,
      name: inputSchoolName,
      city: inputSchoolCity,
      province: inputSchoolProvince,
      degree: inputDegree,
      dateFrom: inputDateFrom,
      dateTo: inputDateTo,
    };
    props.editSchoolHandler(props.id, editedSchoolData);
    stopEditing();
  };

  if (isEditing) {
    return (
      <div className="form-row">
        <div className="row">
          <label>School Name</label>
          <input
            type="text"
            value={inputSchoolName}
            onChange={schoolNameHandler}
          />
        </div>
        <div className="row">
          <label>City</label>
          <input type="text" value={inputSchoolCity} onChange={cityHandler} />
        </div>
        <div className="row">
          <label>Province</label>
          <input
            type="text"
            value={inputSchoolProvince}
            onChange={provinceHandler}
          />
        </div>
        <div className="row">
          <label>Degree</label>
          <input type="text" value={inputDegree} onChange={degreeHandler} />
        </div>
        <div className="row">
          <label>Date From</label>
          <input type="date" value={inputDateFrom} onChange={dateFromHandler} />
        </div>
        <div className="row">
          <label>Date To</label>
          <input type="date" value={inputDateTo} onChange={dateToHandler} />
        </div>
        <button className="btn" type="button" onClick={educationEditHandler}>
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
            <p className="school-name">{inputSchoolName}</p>
            <div className="form-icons">
              <div>
                <span className="material-icons" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  className="material-icons"
                  onClick={() => props.deleteSchoolHandler(props.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>
            {inputSchoolCity}, {inputSchoolProvince}
          </p>
          {<p>{inputDegree || ''}</p>}
          <p>
            {inputDateFrom} to {inputDateTo}
          </p>
        </div>
      </div>
    );
  }
};

export default EducationInputItem;
