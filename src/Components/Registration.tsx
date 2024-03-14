import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Registration = () => {
  const url = useParams();
  const [params, setParams] = useState<string | undefined>('');

  useEffect(() => {
    setParams(url.id);
    console.log(url);
    console.log(params);
  }, [url]);
  return (
    <>
      <h1>Email Confirmation</h1>
    </>
  );
};

export default Registration;
