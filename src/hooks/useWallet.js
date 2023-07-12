import { useState } from "react";

const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Please install the MetaMask extension");
    }
  };

  return { walletAddress, connectWallet };
};

export default useWallet;
