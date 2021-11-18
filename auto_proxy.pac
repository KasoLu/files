const PROXY_HOST = "172.20.82.31";
const PROXY_PORT = 8888;

function FindProxyForURL(url, host) {
  if (isInNet(host, "172.20.82.31", "255.255.252.0")) {
      return "DIRECT";
  }

  return `PROXY ${PROXY_HOST}:${PROXY_PORT}; DIRECT`;
}

