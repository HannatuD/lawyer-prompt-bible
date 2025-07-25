import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout title="UK Legal Prompt Bible" description="Curated GPT prompts">
      <main style={{textAlign:'center', padding:'4rem 1rem'}}>
        <h1>UK Legal Prompt Bible</h1>
        <p>
          Explore a growing library of GPT prompts for UK lawyers.
        </p>
        <Link className="button button--primary button--lg" to="/">
          Browse prompts →
        </Link>
      </main>
    </Layout>
  );
}
