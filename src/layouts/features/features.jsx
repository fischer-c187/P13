import { useTranslation } from 'react-i18next';

import FeatureCard from '../../components/featureCard/featureCard';
import featuresCardItems from '../../constants/features';

import styles from './features.module.css';

/**
 * Features Component.
 * Maps feature card items to individual FeatureCard components.
 * 
 */
function Features() {
  const { t } = useTranslation('homePage');

  return (
    <section className={styles.features}>
      {featuresCardItems.map((item) => (
        <FeatureCard
          key={item.namescope}
          icon={item.icon}
          title={t(`features.${item.namescope}.title`)}
          text={t(`features.${item.namescope}.text`)}
        />
      ))}
    </section>
  );
}

export default Features;
