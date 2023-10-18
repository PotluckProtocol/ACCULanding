import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Logo from './components/Logo';
import ButtonLink from './components/ButtonLink';
import Inner from './components/Inner';
import YieldSection from './components/YieldSection';
import OnlyOnShimmerSection from './components/OnlyOnShimmerSection';
import Footer from './components/Footer';

const Layout = styled.div`

`;

function App() {
  return (
    <Layout>
      <Inner>
        <Header />
        <div className='flex justify-center'>
          <Logo className='pt-12' />
        </div>
        <div className='flex justify-center'>
          <ButtonLink href='https://accumulator.gitbook.io/accumulator/' target='_blank'>Read docs</ButtonLink>
        </div>
      </Inner>

      <YieldSection style={{ marginTop: -30 }} className='pb-12 py-12' />
      <OnlyOnShimmerSection />

      <Footer />
    </Layout >
  );
}

export default App;
