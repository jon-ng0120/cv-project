import React, { useState, useRef, useEffect } from 'react';

const ExperienceInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const titleRef = useRef();
  const companyRef = useRef();
  const jobLocationRef = useRef();
  const jobDateFromRef = useRef();
  const [jobDateTo, setJobDateTo] = useState('');
  const jobDescription = useRef();
  const [current, setCurrent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const experienceData = {
      id: Date.now(),
      title: titleRef.current.value,
      location: jobLocationRef.current.value,
      company: companyRef.current.value,
      dateFrom: jobDateFromRef.current.value,
      dateTo: jobDateTo,
      description: jobDescription.current.value,
      current: current,
    };
    setCurrent(false);
    props.onExperienceInputChange(experienceData);
    endInput();
  };

  const cancelInput = () => {
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

  useEffect(() => {
    if (!isNew) {
      titleRef.current.focus();
    }
  });

  const setCurrentlyWork = (e) => {
    if (e.target.checked) {
      setJobDateTo('Current');
      setCurrent(true);
    } else {
      setJobDateTo('');
      setCurrent(false);
    }
  };

  const dateToHandler = (e) => setJobDateTo(e.target.value);

  return (
    <div>
      <h1 className="section-header">Experience</h1>
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
            <input type="text" ref={titleRef} />
          </div>
          <div className="row">
            <label>Company</label>
            <input type="text" ref={companyRef} />
          </div>
          <div className="row">
            <label>Location</label>
            <input type="text" ref={jobLocationRef} />
          </div>
          <div className="row">
            <label>Date From</label>
            <input type="date" ref={jobDateFromRef} />
          </div>
          <div className="row">
            <div>
              <input
                type="checkbox"
                value="current"
                onClick={setCurrentlyWork}
              />
              <label>I currently work here</label>
            </div>
          </div>
          {!current && (
            <div className="row">
              <label>Date To</label>
              <input type="date" value={jobDateTo} onChange={dateToHandler} />
            </div>
          )}
          <div className="row">
            <label>Description</label>
            <textarea
              className="job-description"
              rows="7"
              placeholder="Describe your position"
              ref={jobDescription}
            ></textarea>
          </div>
          <button className="btn">Add Experience</button>
          <button type="button" onClick={cancelInput} className="btn">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ExperienceInput;
