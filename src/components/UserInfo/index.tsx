import React from 'react';

import { AiOutlineStar } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import {
  Container,
  ContainerHeader,
  ContainerInfo,
  ContainerStatus,
  ContainerInfosUser,
} from './styles';

import { useUser } from '../../contexts/user';

const UserInfo: React.FC = () => {
  const { user, starred } = useUser();

  return (
    <>
      {user.name && (
        <Container>
          <ContainerHeader>
            <ContainerInfosUser>
              <img src={user.avatar_url} alt={user.name} />
              <ContainerInfo>
                <strong>{user.name}</strong>
                <span>{user.location}</span>
              </ContainerInfo>
            </ContainerInfosUser>
            <ContainerStatus>
              <span>
                <FiUsers size={16} />
                {user.followers} fallowers .
              </span>
              <span>{user.following} fallowing .</span>
              <span>
                <AiOutlineStar size={16} />
                {starred}
              </span>
            </ContainerStatus>
          </ContainerHeader>
          <p>{user.bio}</p>
        </Container>
      )}
    </>
  );
};

export default UserInfo;
