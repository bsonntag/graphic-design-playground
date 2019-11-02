import React from 'react';
import { useMatch } from '@bsonntag/router';
import classNames from 'classnames';
import { Link } from './link';
import styles from './navigation.css';

export function Navigation() {
  const { path } = useMatch();
  const page = parseInt(path.substring(1), 10);
  const previousPage = `/${page - 1}`;
  const nextPage = `/${page + 1}`;

  return (
    <nav className={classNames('container', styles.navigation)}>
      {page > 1 ? (
        <Link className={styles.navLink} to={previousPage}>
          Previous
        </Link>
      ) : (
        <span />
      )}

      <Link className={styles.navLink} to={nextPage}>
        Next
      </Link>
    </nav>
  );
}
