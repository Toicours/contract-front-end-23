import React from "react";
import { useConnectWallet, useWallets } from "@web3-onboard/react";

const Farm = () => {
  const wallets = useWallets();
  const walletAddress =
    wallets.length > 0 ? wallets[0].accounts[0].address : null;

  return <div>Farm content goes here</div>;
};

export default Farm;
