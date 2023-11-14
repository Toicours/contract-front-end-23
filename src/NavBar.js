// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";

const NavBar = () => {
  const [{ wallet }, connect, disconnect] = useConnectWallet();
  const wallets = useWallets();

  const handleConnect = () => {
    connect().catch((e) => console.error(e));
  };

  const displayAddress = wallet?.accounts[0]?.address;
  const formattedAddress = displayAddress
    ? `${displayAddress.substring(0, 6)}...${displayAddress.substring(
        displayAddress.length - 4
      )}`
    : "Connect Wallet";

  return (
    <nav>
      <ul>
        <li>
          <Link to="/swap">Swap</Link>
        </li>
        <li>
          <Link to="/liquidity">Liquidity</Link>
        </li>
        <li>
          <Link to="/farm">Farm</Link>
        </li>
        <li>
          <a
            href="https://external-site-for-docs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        </li>
        <li style={{ float: "right" }} onClick={handleConnect}>
          {formattedAddress}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
