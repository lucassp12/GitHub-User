import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Repositories from '../components/Repositories';

import { Container } from '../styles/pages/home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Container>
        <UserInfo />
        <Repositories />
      </Container>
    </>
  );
};

export default Home;
