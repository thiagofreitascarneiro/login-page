import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import Input from '../Input';


const Sidebar = () => {
  return (
  <div className={styles.Container}>
    <div className={styles.logoWrapper}>
      <img src={logo} alt=""/>
      <h3>
          Finance <span>club</span>
      </h3>
    </div>
    <form>
      <h3>Sign up</h3>
      <Input type = "" placeholder="Full Name" />
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
      <Input type="password" placeholder="Confirm Password"/>
    </form>
  </div>
  );
};

export default Sidebar;
