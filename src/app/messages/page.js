import styles from './page.module.css';

export default function messages() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Just a quick note to say</h1>
      <p>Content goes here...</p>
    </div>
  );
}
