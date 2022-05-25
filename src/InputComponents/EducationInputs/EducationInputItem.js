import React, { useState } from 'react';

const EducationInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputSchoolName, setEnteredSchoolName] = useState(props.name);
  const [inputSchoolLocation, setEnteredSchoolLocation] = useState(
    props.location
  );
  const [inputDegree, setEnteredDegree] = useState(props.degree);
  const [inputDateFrom, setEnteredDateFrom] = useState(props.dateFrom);
  const [inputDateTo, setEnteredDateTo] = useState(props.dateTo);
  const [current, setCurrent] = useState(props.current);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const schoolNameHandler = (e) => {
    setEnteredSchoolName(e.target.value);
  };

  const degreeHandler = (e) => {
    setEnteredDegree(e.target.value);
  };

  const locationHandler = (e) => {
    setEnteredSchoolLocation(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };

  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const cancelEdit = () => {
    setEnteredSchoolName(props.name);
    setEnteredSchoolLocation(props.location);
    setEnteredDegree(props.degree);
    setEnteredDateFrom(props.dateFrom);
    setEnteredDateTo(props.dateTo);
    setCurrent(props.current);
    stopEditing();
  };

  const educationEditHandler = () => {
    const editedSchoolData = {
      id: props.id,
      name: inputSchoolName,
      location: inputSchoolLocation,
      degree: inputDegree,
      dateFrom: inputDateFrom,
      dateTo: inputDateTo,
      current: current,
    };
    props.editSchoolHandler(props.id, editedSchoolData);
    stopEditing();
  };

  const setCurrentlyAttend = (e) => {
    if (e.target.checked) {
      setEnteredDateTo('Current');
      setCurrent(true);
    } else {
      setEnteredDateTo('');
      setCurrent(false);
    }
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
          <label>Location</label>
          <input
            type="text"
            value={inputSchoolLocation}
            onChange={locationHandler}
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
          <div>
            <input
              type="checkbox"
              value="current"
              onClick={setCurrentlyAttend}
              defaultChecked={current}
            />
            <label>I currently attend here</label>
          </div>
        </div>
        {!current && (
          <div className="row">
            <label>Date To</label>
            <input type="date" value={inputDateTo} onChange={dateToHandler} />
          </div>
        )}
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
            <p className="item-header">{inputSchoolName}</p>
            <div className="form-icons">
              <div>
                <span className="material-icons edit" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  className="material-icons delete"
                  onClick={() => props.deleteSchoolHandler(props.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p>{inputSchoolLocation}</p>
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
