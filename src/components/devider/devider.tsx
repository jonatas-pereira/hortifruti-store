import styles from "./devider.module.scss"

export default function Devider({ msg, drawrow } : { msg?: string; drawrow?: boolean }) {
  return (
    <div className={styles.devider}>
      <div className={`${drawrow && styles.deviderElement}`}></div>
      <span className={styles.deviderContent}>{ msg }</span> 
      <div className={`${drawrow && styles.deviderElement}`}></div>
    </div>
  )
}