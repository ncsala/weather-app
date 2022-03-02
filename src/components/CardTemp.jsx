import styles from './CardTemp.module.css';

export default function CardTemp({label, value}) {
  return (
    <div className={styles.temp}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
}
