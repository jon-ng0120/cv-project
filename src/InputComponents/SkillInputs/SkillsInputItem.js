import React, { useState } from 'react';

const SkillsInputItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputSkill, setInputSkill] = useState(props.skill);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  const skillInputHandler = (e) => setInputSkill(e.target.value);

  const cancelEdit = () => {
    setInputSkill(props.skill);
    stopEditing();
  };

  const skillEditHandler = () => {
    const editedSkillData = {
      id: props.id,
      skill: inputSkill,
    };
    props.editSkillHandler(props.id, editedSkillData);
    stopEditing();
  };

  if (isEditing) {
    return (
      <div className="form-row">
        <div className="row">
          <label>Skill</label>
          <input type="text" value={inputSkill} onChange={skillInputHandler} />
        </div>
        <button className="btn" type="button" onClick={skillEditHandler}>
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
            <p className="item-header">{inputSkill}</p>
            <div className="form-icons">
              <div>
                <span className="material-icons edit" onClick={startEditing}>
                  edit
                </span>
              </div>
              <div>
                <span
                  className="material-icons delete"
                  onClick={() => props.deleteSkillHandler(props.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SkillsInputItem;
