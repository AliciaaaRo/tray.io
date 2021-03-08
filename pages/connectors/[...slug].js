import React from 'react';

import { useRouter } from 'next/router';

import Head from 'next/head';
import ConnectorHero from '../../components/ConnectorHero';
import PageCta from '../../components/PageCta';
import AppStream from '../../components/AppStream';
import ConnectorSteps from '../../components/ConnectorSteps';
import data from '../api/data.json';
import Integrations from '../../components/Integrations';
import Spinner from '../../components/Spinner/Spinner';

const DEFAULT_CONNECTORS = data.connectors;

const findConnector = ([slug1, slug2]) => {
  const filteredConnectors = DEFAULT_CONNECTORS.filter((x) => {
    const connector1 = x.slug === slug1;
    const connector2 = x.slug === slug2;
    return connector2 + connector1;
  });
  return filteredConnectors;
};

export default function Connector() {
  const router = useRouter();
  const slug = router.query.slug || [];
  if (!slug[0]) return <Spinner />;

  const [slug1, slug2] = findConnector(slug[0].split('-'));
  return (
    <>
      <Head>
        <title>
          {slug1 && slug1.name}
          {slug2 && slug2.name} Integrations + Automations
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectorHero connector={slug1 && slug1} connector2={slug2 && slug2} />
      <ConnectorSteps connector1={slug1} connector2={slug2} />
      <Integrations connector1={slug1} connector2={slug2} otherConnectors={DEFAULT_CONNECTORS} />
      <AppStream connectors={DEFAULT_CONNECTORS} />
      <PageCta />
    </>
  );
}
