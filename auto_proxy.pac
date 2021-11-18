const PROXY_HOST = "172.20.82.31";
const PROXY_PORT = 8888;

function FindProxyForURL(url, host) {
  if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
      isInNet(host, "172.16.0.0", "255.240.0.0") ||
      isInNet(host, "192.168.0.0", "255.255.0.0")) {
      return "DIRECT";
  } else {
      return `PROXY ${PROXY_HOST}:${PROXY_PORT}; DIRECT`;
  }
}

