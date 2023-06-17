import { useEffect } from 'react';
import { useApi, useAccount } from '@gear-js/react-hooks';
import { Header, Footer, ApiLoader } from 'components';
import { Home } from 'pages/home';

import "../App.scss"

function MainLayout() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  useEffect(() => {
    document.body.classList.add('gear-background');
  })

  return (
    <>
      <Header isAccountVisible={isAccountReady} />
      <main>{isAppReady ? <Home /> : <ApiLoader />}</main>
      <Footer />
    </>
  );
}

export { MainLayout };
