import React from 'react';

import { Container } from './styles';
import CardRepository from '../CardRepository';

import { useUser } from '../../contexts/user';

const Repositories: React.FC = () => {
  const { repos } = useUser();
  return (
    <>
      {repos.length > 0 && (
        <Container>
          <h1>Repositórios</h1>

          {repos.map(repo => (
            <CardRepository key={repo.id} repository={repo} />
          ))}
        </Container>
      )}
    </>
  );
};

export default Repositories;
