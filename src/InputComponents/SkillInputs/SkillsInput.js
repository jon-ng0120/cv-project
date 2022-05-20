import React, { useState, useRef, useEffect } from 'react';

const SkillsInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const skillRef = useRef();

  const skillSubmitHandler = (e) => {
    e.preventDefault();
    const enteredSkill = skillRef.current.value;
    const skillsData = {
      id: Date.now(),
      skill: enteredSkill,
    };
    props.onSkillsInputChange(skillsData);
    endInput();
  };

  const cancelInput = () => {
    endInput();
  };

  const startInput = () => {
    setIsNew(false);
  };

  const endInput = () => setIsNew(true);

  useEffect(() => {
    if (!isNew) {
      skillRef.current.focus();
    }
  });

  return (
    <div>
      <h1 className="section-header">Skills</h1>
      {isNew && (
        <div className="long-button" onClick={startInput}>
          <span>+</span>
          <span>Add Skill</span>
        </div>
      )}
      {!isNew && (
        <form onSubmit={skillSubmitHandler} className="form-input">
          <div className="row">
            <label>Skill</label>
            <input ref={skillRef} />
          </div>
          <button className="btn">Add Skill</button>
          <button className="btn" onClick={cancelInput} type="button">
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default SkillsInput;
