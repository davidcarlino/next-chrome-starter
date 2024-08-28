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
        
        <a href="https://ipartners.atlassian.net/wiki/company-hub" target="_blank" rel="noopener noreferrer" className={styles.portalButton}>
      Go To Portal
    </a>

      </main>
    </div>
  );
}