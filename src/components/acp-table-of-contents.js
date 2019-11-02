import React from 'react';
import classNames from 'classnames';
import faker from 'faker';
import styles from './acp-table-of-contents.css';

let page = 1;

const items = new Array(6).fill(null).map((value, index) => {
  const isImageLarge = index === 3;
  page = faker.random.number({ min: page + 1, max: page + 6 });
  return {
    title: faker.lorem.word().replace(/^\w/, letter => letter.toUpperCase()),
    description: faker.lorem.sentence(faker.random.number({ min: 3, max: 5 })),
    image: faker.image.imageUrl(
      isImageLarge ? 378 : 180,
      180,
      faker.random.arrayElement(['business', 'city', 'transport']),
      true
    ),
    isImageLarge,
    page,
  };
});

export function AcpTableOfContents() {
  return (
    <ul className={classNames('container', styles.grid)}>
      {items.map((item, index) => (
        <li key={index} className={styles.row}>
          <div className={styles.text}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <img
            className={item.isImageLarge ? styles.imageLarge : styles.image}
            alt=''
            src={item.image}
            style={item.isImageLarge ? { gridRow: index + 1 } : null}
          />
          <div
            className={styles.page}
            style={item.isImageLarge ? { gridRow: index + 1 } : null}
          >
            <span aria-label='page'>p </span>
            {item.page}
          </div>
        </li>
      ))}
    </ul>
  );
}
