import React from 'react';
import style from './Integrations.module.css';
import SingleIntegration from './SingleIntegration';


const Integrations = ({connector1, connector2, otherConnectors}) => {
  const connectorName = connector1 && connector1.name;
  const connector2Name = connector2 && `and ${connector2.name} `;
  return (
    <div className={style.Integrations}>
    <h3 className={style.title}> Popular {connectorName} {connector2Name} integrations </h3>
    <div className={style.integrationsContent}>
    
     {otherConnectors.filter((el) => el.name !== connector1.name && connector2?.name !==  el.name).map((item) => (
      <SingleIntegration connector={connector1} otherConnectors={item} />
    ))}
    
    {connector2 && otherConnectors.filter((el) => el.name !== connector2.name && el.name !== connector1.name ).map((item) => (
      <SingleIntegration connector={connector2} otherConnectors={item} />
    ))}


    </div>
 
      

    </div>
  );
};

export default Integrations;