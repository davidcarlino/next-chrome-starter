import styles from "../../styles/Pages.module.css";
import styles1 from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles1.footer}>
      <a
        href="https://users.iplatforms.com.au/"
        target="_blank"
        rel="noopener noreferrer"
      >
        V.1.0.1
        <span className={styles1.logo}>
          <img
            src="icons/icon16.png"
            alt="Logo"
            width={16}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}

export function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <img
          src="icons/group-logo.png"
          alt="Logo"
          width={270}
          height={70} />

        <p className={styles.description}>
        </p>

        <body>
      

          <button className={styles.portalButton}
            type="button" name="portalButton" autofocus onclick="navigate()"><a href="http://localhost:3000/argon-dashboard-material-ui/dashboard" target="_blank">Go To Portal</a></button>
        </body>
      </main>
    </div>
  );
}

