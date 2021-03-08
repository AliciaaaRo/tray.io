import React from 'react';
import BarProgress from './BarProgress';
import Step from './Step';
import style from './ConnectorSteps.module.css';

const ConnectorSteps = ({ connector1, connector2 }) => {
  return (
    <>
      <div className={style.ConnectorSteps}>
        <Step img="/manualTriggerIcon.svg" label="Manual Trigger" />
        <BarProgress />
        <Step img={connector1.logo} label={connector1.name} />
        <BarProgress />
        {connector2 ? (
          <Step img={connector2.logo} label={connector2.name} />
        ) : (
          <Step label="Any API or service" />
        )}
      </div>
    </>
  );
};

export default ConnectorSteps;
