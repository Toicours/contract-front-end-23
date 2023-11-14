import React from "react";
import { useConnectWallet, useWallets } from "@web3-onboard/react";

const Swap = () => {
  const wallets = useWallets();
  const walletAddress =
    wallets.length > 0 ? wallets[0].accounts[0].address : null;

  // Use walletAddress here
  return <div>Swap content goes here</div>;
};

export default Swap;
