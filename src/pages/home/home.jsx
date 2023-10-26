import { useTranslation } from 'react-i18next';

import Hero from '../../components/hero/hero';
import Features from '../../layouts/features/features';
import { useUpdateTitle } from '../../hook/useUpdateTitle';

function Home() {
  const { t } = useTranslation('homePage');

  useUpdateTitle(t('pageTitle'));

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default Home;
