// import { useEffect, useState } from 'react';

import './App.css';
import { useEffect, useState } from 'react';
import { sendConfirmation } from './Components/SendConfirmation';
import { Outlet } from 'react-router-dom';

export interface tokenTokenId {
  token: RegExpMatchArray | null;
  tokenId: RegExpMatchArray | null;
}

function App() {
  const url = window.location.href;
  const tokenReg = /(?<=token=)[^&]+/;
  const tokenIdReg = /(?<=tokenId=).+/;
  const [token, setToken] = useState<RegExpMatchArray | null>(null);
  const [tokenId, setTokenId] = useState<RegExpMatchArray | null>(null);

  const setTokenData = () => {
    setToken(url.match(tokenReg));
    setTokenId(url.match(tokenIdReg));
  };

  useEffect(() => {
    setTokenData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token && tokenId) {
      const tokenData = { token: token[0], tokenId: tokenId[0] };
      sendConfirmation(tokenData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <>
      <div>token: {token}</div>
      <div>TokenId: {tokenId}</div>
      <Outlet />
    </>
  );
}

export default App;
