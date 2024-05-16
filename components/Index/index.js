import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <img
            src="icons/group-logo.png"
            alt="Logo"
            width={270}
            height={70}
          />

        <p className={styles.description}>
        </p>
        
      	<button className={styles.portalButton} type="button" name="portalButton" autofocus>Go To Portal</button>
        
        <p>{""}</p>
        <p onClick={() => navigateToPage('new')}>{""}</p>
      </main>
    </div>
  );
}
