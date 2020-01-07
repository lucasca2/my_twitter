import axios from 'axios';
import CryptoJS from 'crypto-js';
import OAuth from 'oauth-1.0a';
import qs from 'qs';

const API_URL = 'https://api.twitter.com/1.1/';

export const HTTP = axios.create({
  baseURL: API_URL,
  paramsSerializer: params => qs.stringify({
    ...params
  }),
});

const consumer = { key: 'DnUG64EXKGMCPJ93KwH84m6LN', secret: 'zpq3GwJw66uriyJvv4eOnDtHKz9HGh0fJnBPf7Y8BwZupzUVeT' };
const token = { key: '1214307281501736960-HsVtEvM3XkqTwVszkY9FALFezrm75T', secret: 'qMyj3mggphiC6fJ5z3mn4O34nBpPB4DNiNZtxXJ5c8ybd' };

HTTP.interceptors.request.use(config => {
  try {
    const request_data = {
      url: `${config.baseURL}${config.url}`,
      method: config.method,
      data: config.data
    };

    const oauth = OAuth({
      consumer,
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return CryptoJS
          .HmacSHA1(base_string, key)
          .toString(CryptoJS.enc.Base64)
      },
    });

    const Authorization = oauth.toHeader(oauth.authorize(request_data, token));

    config.headers['Authorization'] = Authorization.Authorization;

    return config;
  } catch (err) {
    console.tron(err);
  }
});
