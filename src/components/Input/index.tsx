import React from 'react';
 /* eslint-disable */ 
// eslint-disable-next-line
import styles from './styles.module.scss'
import styled from 'styled-components'


interface imputData {
    type: string;
    placeholder: string;
  }


const Input = ({ type, placeholder }: imputData) => {
  return (
    <div className={styles.Container}>
            <input className={styles.StyledImput} 
            placeholder={placeholder && placeholder} 
            type={type ? type: "text"}
            required
            autoComplete='off'
            />
        <div className={styles.Status}>

        </div>         
    </div>
  );
};


const Status = styled.div `

` 


export default Input;
