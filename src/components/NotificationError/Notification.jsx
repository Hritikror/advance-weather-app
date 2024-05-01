import React, { useContext } from 'react'
import styles from './Notification.module.css'
import {CONTEXT} from '../../misc/Context'
const Notification = ({city ="Nanauta"}) => {

  const {setNotification} = useContext(CONTEXT)

  return (
    <dialog className={styles.notification}>
      <div className={styles.myText}>City <span style={{color:'green'}}>{city}</span> weather not Found. Please try with different city</div>
      <button className={styles.btn} onClick={()=>setNotification(false)}><strong>x</strong></button>
    </dialog>
  )
}

export default Notification
