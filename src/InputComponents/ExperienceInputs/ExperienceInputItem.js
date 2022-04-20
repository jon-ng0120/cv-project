import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const ExperienceInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [inputJobTitle, setEnteredJobTitle] = useState(props.title);
  const [inputCompany, setEnteredCompany] = useState(props.company);
  const [inputJobLocation, setEnteredJobLocation] = useState(props.location);
  const [inputDateFrom, setEnteredDateFrom] = useState(props.dateFrom);
  const [inputDateTo, setEnteredDateTo] = useState(props.dateTo);
  const [inputDescription, setEnteredDescription] = useState(props.description);

  const startEditing = () => setIsEditing(true);

  const stopEditing = () => setIsEditing(false);

  const jobTitleHandler = (e) => {
    setEnteredJobTitle(e.target.value);
  };

  const companyHandler = (e) => {
    setEnteredCompany(e.target.value);
  };

  const locationHandler = (e) => {
    setEnteredJobLocation(e.target.value);
  };

  const dateFromHandler = (e) => {
    setEnteredDateFrom(e.target.value);
  };

  const dateToHandler = (e) => {
    setEnteredDateTo(e.target.value);
  };

  const descriptionHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  const cancelEdit = () => {
    setEnteredJobTitle(props.title);
    setEnteredJobLocation(props.location);
    setEnteredCompany(props.company);
    setEnteredDateFrom(props.dateFrom);
    setEnteredDateTo(props.dateTo);
    setEnteredDescription(props.description);
    stopEditing();
  };

  const experienceEditHandler = () => {
    const editedExperienceData = {
      id: props.id,
      title: inputJobTitle,
      company: inputCompany,
      location: inputJobLocation,
      dateFrom: inputDateFrom,
      dateTo: inputDateTo,
      description: inputDescription,
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
          <label>Location</label>
          <input
            type="text"
            value={inputJobLocation}
            onChange={locationHandler}
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
        <div className="row">
          <label>Description</label>
          <textarea
            className="job-description"
            value={inputDescription}
            onChange={descriptionHandler}
            rows="7"
            placeholder="Describe your position"
          ></textarea>
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
            <p className="item-header">{inputJobTitle}</p>
            <div className="form-icons">
              <div>
                <span className="material-icons edit" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  className="material-icons delete"
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
            {inputCompany}, {inputJobLocation}
          </p>
          <p>
            {inputDateFrom} to {inputDateTo}
          </p>
          <TextareaAutosize
            className="job-description-display "
            value={inputDescription}
            readOnly
          />
        </div>
      </div>
    );
  }
};

export default ExperienceInputItem;
