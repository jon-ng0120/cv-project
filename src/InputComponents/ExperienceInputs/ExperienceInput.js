import React, { useState, useRef, useEffect } from 'react';

const ExperienceInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const titleRef = useRef();
  const companyRef = useRef();
  const jobLocationRef = useRef();
  const jobDateFromRef = useRef();
  const jobDateToRef = useRef();
  const jobDescription = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const experienceData = {
      id: Date.now(),
      title: titleRef.current.value,
      location: jobLocationRef.current.value,
      company: companyRef.current.value,
      dateFrom: jobDateFromRef.current.value,
      dateTo: jobDateToRef.current.value,
      description: jobDescription.current.value,
    };
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
            <label>Date To</label>
            <input type="date" ref={jobDateToRef} />
          </div>
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
