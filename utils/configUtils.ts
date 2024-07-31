import { IProviderMetadata } from "@walletconnect/modal-react-native";

const providerMetadata: IProviderMetadata = {
  name: "Modal with UProvider",
  description: "RN example using Universal Provider by WalletConnect",
  url: "https://walletconnect.com/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "wcmuprovidersample://",
  },
};

const sessionParams = {
  namespaces: {
    eip155: {
      methods: ["eth_sendTransaction", "personal_sign"],
      chains: ["eip155:1"],
      events: ["chainChanged", "accountsChanged"],
      rpcMap: {},
    },
  },
};

export default {
  providerMetadata,
  sessionParams,
};
