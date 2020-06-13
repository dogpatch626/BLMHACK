
  const CLOUD_BASE_URL = 'https://www.cloudflare.com/cdn-cgi/trace';
  
  const adapter = {
    getLocation: () => fetch(CLOUD_BASE_URL).then(res => res.text()),
  
  };
  
  
  export default adapter;
  