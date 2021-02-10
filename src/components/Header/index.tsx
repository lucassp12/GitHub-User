import React, { useState } from 'react';

import Logo from '../../assets/logo.png';
import { Container } from './styles';

import { useUser } from '../../contexts/user';

const Header: React.FC = () => {
  const [name, setName] = useState('');

  const { findUser } = useUser();

  const handlerFindUser = (): void => {
    findUser(name);
    setName('');
  };
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <button type="button" onClick={handlerFindUser}>
          Pesquisar
        </button>
      </div>
    </Container>
  );
};

export default Header;
