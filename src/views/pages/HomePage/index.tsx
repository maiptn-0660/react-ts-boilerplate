import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  return <div>{t('homePage.welcome')}</div>;
}

export default HomePage;
