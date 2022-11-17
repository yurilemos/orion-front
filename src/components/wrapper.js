import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layout';
import { useContext } from 'react';
import AuthContext from '../utils/auth';

/* Componente que verifica o token e decide se irá para tela de login 
ou se irá para a tela selecionada e aplicar o componente layout */
const Wrapper = ({ children }) => {
  const { token } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!token || token === '' || token === undefined) {
      navigate('/login');
    }
  }, [token, navigate]);

  return <Layout>{children}</Layout>;
};

export default Wrapper;
