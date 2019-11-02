import React from 'react';
import classNames from 'classnames';
import faker from 'faker';
import styles from './acp-page-35.css';

export function AcpPage35() {
  return (
    <div className={classNames('container', styles.page)}>
      <main>
        <img
          className={styles.mainImage}
          alt=''
          src={faker.image.transport(800, 600, true)}
        />

        <div className={styles.content}>
          <h1 className={styles.title}>
            {faker.fake('{{commerce.productAdjective}} {{commerce.product}}')}
          </h1>
          <p className={styles.lead}>{faker.lorem.sentences(4)}</p>

          <div className={styles.gallery}>
            <img alt='' src={faker.image.transport(500, 300, true)} />
            <img alt='' src={faker.image.transport(500, 300, true)} />
          </div>

          <p className={styles.description}>{faker.lorem.paragraph(20)}</p>
        </div>
      </main>

      <aside className={styles.aside}>
        <img
          className={styles.asideImage}
          alt=''
          src={faker.image.transport(200, 150, true)}
          height={150}
          width={200}
        />
        <div>
          <h2 className={styles.asideTitle}>
            {faker.fake('{{commerce.productAdjective}} {{commerce.product}}')}
          </h2>
          <p className={styles.asideText}>{faker.lorem.paragraph(3)}</p>
        </div>
      </aside>
    </div>
  );
}
