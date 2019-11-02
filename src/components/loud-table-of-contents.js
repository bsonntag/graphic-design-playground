import React from 'react';
import faker from 'faker';
import styles from './loud-table-of-contents.css';

function getTitle(minSize, maxSize) {
  let title;

  do {
    title = faker.lorem.word();
  } while (title.length > maxSize || title.length < minSize);

  return title;
}

const items = new Array(3).fill(null).map((value, index) => {
  return {
    image: faker.image.cats(400, index === 2 ? 400 : 200, true),
    title: getTitle(...index === 0 ? [6, 12] : [3, 6]),
  };
});

export function LoudTableOfContents() {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p className={index === 2 ? styles.largeTitle : styles.title}>
            <span>{item.title}</span> 0{index + 1}
          </p>
          <picture className={styles.image}>
            <img alt='' src={item.image} />
          </picture>
        </React.Fragment>
      ))}
    </div>
  );
}
