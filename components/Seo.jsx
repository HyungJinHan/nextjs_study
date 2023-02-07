import Head from 'next/head';
import React from 'react';

function Seo({ title }) {
  return (
    <Head>
      <title>{`${title} | NextJS Movie App`}</title>
    </Head>
  );
}

export default Seo;