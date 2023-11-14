// src/initOnboard.js
import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();

// Initialize Onboard
const onboard = init({
  wallets: [injected],
  chains: [
    // You can add more chains here if needed
    {
      id: "0x2105", // Base Mainnet
      token: "ETH",
      label: "Base Mainnet",
      rpcUrl:
        "https://base-mainnet.g.alchemy.com/v2/-kOv8-44rAh5hSOh5Nu3cmjg4DxxLZhj",
    },
    {
      id: "0x14a33", // Base Goerli
      token: "ETH",
      label: "Base Goerli",
      rpcUrl:
        "https://base-goerli.g.alchemy.com/v2/YO-BkqiS_xFz1FxWHUWFhc19MdC-7jtO",
    },
  ],
  appMetadata: {
    name: "Your App Name",
    icon: "<URL_TO_YOUR_APP_ICON>",
    description: "Your App Description",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      // You can add more recommended wallets here
    ],
  },
});

export default onboard;
