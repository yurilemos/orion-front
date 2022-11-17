import { Image } from 'antd';
import { useContext } from 'react';
import AuthContext from '../utils/auth';

/* Componente da foto de perfil do usuário */
export const ProfilePic = ({ avatar, width, height }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Image
      width={width ?? 200}
      height={height ?? 200}
      src={avatar ? avatar : currentUser?.avatar ?? ''}
      fallback="images/profile.svg"
    />
  );
};
