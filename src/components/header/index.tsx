import { Link } from 'react-router';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Itx frontend</h1>
      </Link>
    </header>
  );
};
