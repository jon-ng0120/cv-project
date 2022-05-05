import React, { useState } from 'react';

const SkillsInput = (props) => {
  const [isNew, setIsNew] = useState(true);
  const [enteredSkill, setEnteredSkill] = useState('');
  const enteredSkillHandler = (e) => {
    setEnteredSkill(e.target.value);
  };

  const skillSubmitHandler = (e) => {
    e.preventDefault();
    const skillsData = {
      id: Date.now(),
      skill: enteredSkill,
    };
    props.onSkillsInputChange(skillsData);
    setEnteredSkill('');
    endInput();
  };

  const cancelInput = () => {
    setEnteredSkill('');
    endInput();
  };

  const startInput = () => setIsNew(false);

  const endInput = () => setIsNew(true);

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
            <input onChange={enteredSkillHandler} value={enteredSkill} />
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
