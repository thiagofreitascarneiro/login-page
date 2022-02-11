 /* eslint-disable */ 
// eslint-disable-next-line

import React from 'react';
import bg from '../assets/bg.png'
import styled from 'styled-components';
import styles from './styles.module.scss';
import Sidebar from './Sidebar';
import Main from './Main';
import finance from '../assets/finance.jpg';
import finance2 from '../assets/finance2.jpg';
import finance3 from '../assets/finance3.jpeg';


const App = () => {
  return (
  <div className= { styles.Container}>
    <Wrapper>
      <Sidebar />
      <Main />
   </Wrapper>
   </div>
  )
};

const Wrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;


export default App;
