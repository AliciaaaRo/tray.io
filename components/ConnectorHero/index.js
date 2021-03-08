import React from 'react';

import style from './ConnectorHero.module.css';

const ConnectorHero = ({ connector, connector2 }) => {
  console.log(connector2)
  const connectorName = connector && connector.name;
  const connector2Name = connector2 && `and ${connector2.name} `;
 
  return (
    <div className={style.ConnectorHero}>
      <div className={style.container}>
        <a href="/" className={style.logoContainer}>
          <img src="/logo.svg" className={style.logo} />
        </a>
        <div className={style.content}>
          <div>
            <h1 className={style.title}> {connectorName}  {connector2Name} integration + automation</h1>
            <p className={style.subtitle}>
              {connectorName}  {connector2Name}  integrations couldn’t be easier with the Tray Platform’s robust{' '}
             {connectorName}  {connector2Name}  connector, which connects any services without the need for separate
              integration tools.
            </p>
            <button>Try our {connectorName}  {connector2Name}  {connector2Name ? 'connectors' : 'connector'} </button>
          </div>
          <div className={style.connectorIconContainer}>
            <img src={connector.logo} className={style.connectorIcon} />
            {connector2 && <span className={style.plusIcon}> + </span>}
            {connector2 && <img src={connector2.logo} className={style.connectorIcon} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectorHero;
