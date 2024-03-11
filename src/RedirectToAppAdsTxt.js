import { useEffect } from 'react';

const RedirectToAppAdsTxt = () => {
  useEffect(() => {
    window.open(process.env.PUBLIC_URL + '/app-ads.txt', '_blank');
  }, []);

  // Optionally, return null or some placeholder content
  // that will appear briefly before the redirect occurs
  return null;
};

export default RedirectToAppAdsTxt;
