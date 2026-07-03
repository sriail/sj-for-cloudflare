// config.js for wisp config and round-robin selection
const currentUrl = new URL(window.location.href);
const wsProtocol = currentUrl.protocol === 'https:' ? 'wss:' : 'ws:';

export const wispConfig = {
  "wss_routes": [
    {
      "name": "local-wisp",
      "route": `${wsProtocol}//${currentUrl.host}/ws`, // local wisp (only host when a server side present)
      "priority": 0
    },
    {
      "name": "anura-wisp",
      "route": "wss://anura.pro/", // non-local Wisp (calls for fallback)
      "priority": 1
    }
  ]
};

