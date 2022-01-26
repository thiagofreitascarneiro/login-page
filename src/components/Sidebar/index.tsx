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
    
      <button className={styles.ButtonSign}> 
              Sign Up
      </button>
    </form>
    <div className={styles.Terms}>
        <p>
          signing up, I agree to the Privacy Policy <br /> and Terms of Service 
        </p>
   </div>
   <h4>
        Already have an account? 
        <span> Sign In</span>
   </h4>
  </div>
  );
};

export default Sidebar;
