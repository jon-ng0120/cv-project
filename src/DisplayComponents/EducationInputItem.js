import React, { useState } from 'react';

const EducationInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputSchoolName, setEnteredSchoolName] = useState(props.name);
  const [inputDegree, setEnteredDegree] = useState(props.degree);
  const [inputDate, setEnteredDate] = useState(props.date);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const schoolNameHandler = (e) => {
    setEnteredSchoolName(e.target.value);
  };

  const degreeHandler = (e) => {
    setEnteredDegree(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const educationEditHandler = () => {
    const editedSchoolData = {
      id: props.id,
      name: inputSchoolName,
      degree: inputDegree,
      date: inputDate,
    };
    props.editSchoolHandler(props.id, editedSchoolData);
    stopEditing();
  };

  if (isEditing) {
    return (
      <div className="education-row">
        <div className="row">
          <label>School Name</label>
          <input
            type="text"
            value={inputSchoolName}
            onChange={schoolNameHandler}
          />
        </div>
        <div className="row">
          <label>Degree</label>
          <input type="text" value={inputDegree} onChange={degreeHandler} />
        </div>
        <div className="row">
          <label>Date</label>
          <input type="date" value={inputDate} onChange={dateHandler} />
        </div>
        <button type="button" onClick={educationEditHandler}>
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="education-row">
        <div className="row">
          <div className="education-row-1">
            <p className="school-name">{inputSchoolName}</p>
            <div className="education-icons">
              <div>
                <span class="material-icons" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  class="material-icons"
                  onClick={() => props.deleteSchoolHandler(props.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {inputDegree || ''}
          {/* <p>{inputDegree}</p> */}
          <p>{inputDate}</p>
        </div>
        {/* <button type="button" onClick={startEditing} className="btn">
          Edit
        </button> */}
        {/* <button
          onClick={() => props.deleteSchoolHandler(props.id)}
          className="btn"
        >
          Delete
        </button> */}
      </div>
    );
  }
};

export default EducationInputItem;
