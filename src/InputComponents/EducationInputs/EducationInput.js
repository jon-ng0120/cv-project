import React, { useState, useRef, useEffect } from 'react';

const EducationInput = (props) => {
  const [isNew, setIsNew] = useState(true);

  const schoolNameRef = useRef();
  const degreeRef = useRef();
  const schoolLocationRef = useRef();
  const schoolDateFromRef = useRef();
  const schoolDateToRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const schoolData = {
      id: Date.now(),
      name: schoolNameRef.current.value,
      location: schoolLocationRef.current.value,
      degree: degreeRef.current.value,
      dateFrom: schoolDateFromRef.current.value,
      dateTo: schoolDateToRef.current.value,
    };
    props.onEducationInputChange(schoolData);
    endInput();
  };

  const cancelInput = () => {
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

  useEffect(() => {
    if (!isNew) {
      schoolNameRef.current.focus();
    }
  });

  return (
    <div>
      <h1 className="section-header">Education</h1>
      {isNew && (
        <div className="long-button" onClick={startInput}>
          <span>+</span>
          <span>Add Education</span>
        </div>
      )}
      {!isNew && (
        <form onSubmit={submitHandler} className="form-input">
          <div className="row">
            <label>School Name</label>
            <input type="text" ref={schoolNameRef} />
          </div>
          <div className="row">
            <label>Degree</label>
            <input type="text" ref={degreeRef} />
          </div>
          <div className="row">
            <label>Location</label>
            <input type="text" ref={schoolLocationRef} />
          </div>

          <div className="row">
            <label>Date From</label>
            <input type="date" ref={schoolDateFromRef} />
          </div>
          <div className="row">
            <label>Date To</label>
            <input type="date" ref={schoolDateToRef} />
          </div>
          <button className="btn">Save Education</button>
          <button type="button" onClick={cancelInput} className="btn">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default EducationInput;
