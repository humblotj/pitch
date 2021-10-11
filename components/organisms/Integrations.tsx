import cn from 'classnames';

import styles from './Integrations.module.css';

const Integrations = () => {
  return (
    <div className={cn(styles.integrations, 'wf-section')}>
      <div className={styles.integrations__wrapper}>
        <div className={styles.integrations__text}>
          <h2 className={styles['integrations__text-heading']}>
            Connected to what matters
          </h2>
          <p className={styles['integrations__text-paragraph']}>
            Knowledge isn’t static — why should your presentations be? We
            integrate with the tools you rely on every day to keep information
            and conversations up-to-date, turning presentations into living
            documents.
          </p>
        </div>
        <div className={styles.integrations__lottie}></div>
      </div>
    </div>
  );
};

export default Integrations;
