import React from 'react';
import classNames from 'classnames';
import faker from 'faker';
import styles from './loud-page-8.css';

export function LoudPage8() {
  return (
    <main className={styles.wrapper}>
      <img
        className={styles.coverImage}
        alt=''
        src={faker.image.imageUrl(
          1200,
          600,
          faker.random.arrayElement(['animals', 'city', 'nature', 'nightlife'])
        )}
        height={600}
        width={1200}
      />

      <div className={classNames('container', styles.content)}>
        <h1 className={styles.title}>{faker.lorem.word()}</h1>
        <p className={styles.intro}>{faker.lorem.paragraph(10)}</p>
        <p className={styles.paragraph}>{faker.lorem.paragraph(10)}</p>
        <quote className={styles.quote}>{faker.lorem.sentences(2)}</quote>
        <p className={styles.paragraph}>{faker.lorem.paragraph(10)}</p>
      </div>
    </main>
  );
}
