//const PROXY_HOST = "172.20.77.129";
const PROXY_HOST = "lujiazhou.local";
const PROXY_PORT = 8888;

function FindProxyForURL(url, host) {
  //if (isInNet(host, "172.20.77.129", "255.255.252.0")) {
  //    return "DIRECT";
  //}

  return `PROXY ${PROXY_HOST}:${PROXY_PORT}; DIRECT`;
}

