import React, { useState, useRef, useEffect } from 'react';

const EducationInput = (props) => {
  const [isNew, setIsNew] = useState(true);

  const schoolNameRef = useRef();
  const degreeRef = useRef();
  const schoolLocationRef = useRef();
  const schoolDateFromRef = useRef();
  const [schoolDateTo, setSchoolDateTo] = useState('');
  const [current, setCurrent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const schoolData = {
      id: Date.now(),
      name: schoolNameRef.current.value,
      location: schoolLocationRef.current.value,
      degree: degreeRef.current.value,
      dateFrom: schoolDateFromRef.current.value,
      dateTo: schoolDateTo,
      current: current,
    };
    setCurrent(false);
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

  const setCurrentlyAttend = (e) => {
    if (e.target.checked) {
      setSchoolDateTo('Current');
      setCurrent(true);
    } else {
      setSchoolDateTo('');
      setCurrent(false);
    }
  };

  const dateToHandler = (e) => setSchoolDateTo(e.target.value);

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
            <div>
              <input
                type="checkbox"
                value="current"
                onClick={setCurrentlyAttend}
              />
              <label>I currently attend here</label>
            </div>
          </div>
          {!current && (
            <div className="row">
              <label>Date To</label>
              <input
                type="date"
                value={schoolDateTo}
                onChange={dateToHandler}
              />
            </div>
          )}

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
