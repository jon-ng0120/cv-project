import React from 'react';
import formatDate from './formatDate';
import TextareaAutosize from 'react-autosize-textarea';

const ExperienceItem = (props) => {
  return (
    <div className="experience-item">
      <div>
        <p className="highlight uppercase">{props.company}</p>
        <p className="highlight">{props.location}</p>
      </div>
      <div>
        <p className="bold">{props.title}</p>
        <p className="highlight">
          {formatDate(props.dateFrom)} - {formatDate(props.dateTo)}
        </p>
      </div>
      <div>
        <TextareaAutosize
          className="job-description-display"
          value={props.description}
          readOnly
        />
      </div>
    </div>
  );
};

export default ExperienceItem;
