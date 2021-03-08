import React from 'react';
import style from './Integrations.module.css';

const SingleIntegration = ({ connector, otherConnectors, slug }) => {
  return (
    <a href={`/connectors/${connector.slug}-${otherConnectors.slug}`} className={style.Integration}>
      <div className={style.content}>
        <img alt={connector.name} src={connector.logo} className={style.stepIcon} />
        <span className={style.plusIcon}> + </span>
        <img alt={otherConnectors.name} src={otherConnectors.logo} className={style.stepIcon} />
      </div>
      <p className={style.label}>
        {connector.name} and {otherConnectors.name}
      </p>
    </a>
  );
};

export default SingleIntegration;
