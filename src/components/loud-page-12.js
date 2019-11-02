import React from 'react';
import classNames from 'classnames';
import faker from 'faker';
import styles from './loud-page-12.css';

const items = new Array(11).fill(null).map((value, index) => {
  return {
    band: faker.fake('{{commerce.productAdjective}} {{commerce.product}}'),
    song: faker.lorem.word().replace(/^\w/, letter => letter.toUpperCase()),
    album: faker.fake('{{commerce.productAdjective}} {{commerce.product}}'),
    image: faker.image.imageUrl(
      150,
      150,
      faker.random.arrayElement([
        'animals',
        'city',
        'food',
        'nature',
        'nightlife',
      ]),
      true
    ),
    year: faker.random.number({ min: 1970, max: 2019 }),
    text: faker.lorem.paragraph(4),
  };
});

export function LoudPage12() {
  return (
    <main className={classNames('container', styles.wrapper)}>
      <div>
        <img
          className={styles.authorImage}
          alt=''
          src={faker.image.people(200, 300)}
          height={300}
          width={200}
        />
        <h1>{faker.name.findName()}</h1>
        <p>
          {faker.fake('{{commerce.productAdjective}} {{commerce.product}}')}
        </p>
        <p className={styles.authorDescription}>{faker.lorem.paragraph(6)}</p>
      </div>

      {items.map((item, index) => (
        <div key={index} className={styles.review}>
          <img
            className={styles.image}
            alt=''
            src={item.image}
            height={150}
            width={150}
          />
          <h2 className={styles.reviewTitle}>
            <span className={styles.band}>{item.band}</span>
            <span>{item.song}</span>
            <span>
              {item.album}, {item.year}
            </span>
          </h2>
          <p>{item.text}</p>
        </div>
      ))}
    </main>
  );
}
