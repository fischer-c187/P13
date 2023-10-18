import { useTranslation } from 'react-i18next';
import styles from './hero.module.css';

/**
 * Hero Component
 * 
 * A component for displaying the hero section of the home page.
 * 
 */
function Hero() {
  const { t } = useTranslation('homePage');
  return (
    <div className={styles.hero}>
      <section className={styles.heroContent}>
        <h2 className='sr'>{t('hero.promotedContent')}</h2>
        <p className={styles.subtitle}>{t('hero.subtitles.noFees')}</p>
        <p className={styles.subtitle}>{t('hero.subtitles.noMinimumDeposit')}</p>
        <p className={styles.subtitle}>{t('hero.subtitles.highInterestRates')}</p>
        <p className={styles.text}>{t('hero.text')}</p>        
      </section>

    </div>
  );
}

export default Hero;
