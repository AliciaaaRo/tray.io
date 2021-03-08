import React from 'react';
import style from './ConnectorSteps.module.css';

const Step = ({ img, label }) => {
  return (
    <div className={style.Step}>
      <div className={style.stepContainer}>
        {img ? (
          <img src={img} className={style.stepIcon} />
        ) : (
          <p className={style.label}> {label} </p>
        )}
      </div>

      {img && <p className={style.label}> {label} </p>}
    </div>
  );
};

export default Step;
