import styles from './AboutHeading.module.css';

const AboutHeading = () => {
  return (
    <>
      <div className={styles['about__heading-wrapper']}>
        <h1 className={styles.about__heading}>Pitch is a new beginning</h1>
      </div>
      <img
        src="/images/confetti.png"
        alt=""
        className={styles.about__confetti}
      />
    </>
  );
};

export default AboutHeading;
