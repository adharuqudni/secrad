import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { TYPE, PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY,CLIENT_EMAIL, CLIENT_ID, AUTH_URI, TOKEN_URI, AUTH_PROVIDER_X509_CERT_URL, CLIENT_X509_CERT_URL  } = publicRuntimeConfig;

export default {
  "type": TYPE,
  "project_id": PROJECT_ID,
  "private_key_id": PRIVATE_KEY_ID,
  "private_key": PRIVATE_KEY,
  "client_email": CLIENT_EMAIL,
  "client_id": CLIENT_ID,
  "auth_uri": AUTH_URI,
  "token_uri": TOKEN_URI,
  "auth_provider_x509_cert_url": AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": CLIENT_X509_CERT_URL
}
