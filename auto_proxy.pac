const PROXY_HOST = "127.0.0.1";
const PROXY_PORT = 8888;

function FindProxyForURL(url, host) {
   return `PROXY ${PROXY_HOST}:${PROXY_PORT}; DIRECT`;
}

