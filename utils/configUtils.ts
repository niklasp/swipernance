import { IProviderMetadata } from "@walletconnect/modal-react-native";

const providerMetadata: IProviderMetadata = {
  name: "Swipernance",
  description: "Polkadot Governance in your pocket",
  url: "https://walletconnect.com/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "wcmuprovidersample://",
  },
};

const sessionParams = {
  namespaces: {
    polkadot: {
      methods: ["polkadot_sendTransaction", "polkadot_signMessage"],
      chains: [
        "polkadot:91b171bb158e2d3848fa23a9f1c25182", //polkadot relay
      ],
      events: ["chainChanged", "accountsChanged"],
      rpcMap: {
        "polkadot:91b171bb158e2d3848fa23a9f1c25182": "https://rpc.polkadot.io",
      },
    },
  },
};

export default {
  providerMetadata,
  sessionParams,
};
