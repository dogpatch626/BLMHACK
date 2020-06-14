
const CLOUD_BASE_URL = 'https://www.cloudflare.com/cdn-cgi/trace';
const API_BASE_URL = 'https://protect-blm.uc.r.appspot.com/zip/'
const VERIFY_BASE_URL = 'https://www.google.com/recaptcha/api/siteverify'

const adapter = {
  getLocation: () => fetch(CLOUD_BASE_URL).then(res => res.text()),
  apiSearch: (ZIP) => fetch(API_BASE_URL + ZIP.toString()).then(res => res.json()),
  verifyCaptcha: (data) => fetch(VERIFY_BASE_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' }
  }
  ).then(res => res.json())


};


export default adapter;
