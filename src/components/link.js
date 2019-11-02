import React from 'react';
import { Link as RouterLink } from '@bsonntag/router';
import classNames from 'classnames';
import styles from './link.css';

export function Link({ className, ...rest }) {
  return (
    <RouterLink {...rest} className={classNames(styles.link, className)} />
  );
}
