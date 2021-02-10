import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Container, ContainerInformations } from './styles';

import { IRepos } from '../../contexts/user';

interface ICardRepositoryProps {
  repository: IRepos;
}

const CardRepository: React.FC<ICardRepositoryProps> = ({ repository }) => {
  return (
    <>
      <Container href={repository.html_url}>
        <ContainerInformations>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </ContainerInformations>
        <FaArrowRight size={20} />
      </Container>
    </>
  );
};

export default CardRepository;
