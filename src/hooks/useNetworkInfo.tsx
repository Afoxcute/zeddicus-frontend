import { useChainId } from 'wagmi';
import { useState, useEffect } from 'react';
import { rootstockTestnet } from 'wagmi/chains';

export function useNetworkInfo() {
  const chainId = useChainId();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Check if connected to RSK Testnet
  const isRSKTestnet = isMounted && chainId === rootstockTestnet.id;
  
  // Determine network name based on chain ID
  let networkName = "Unknown Network";
  let networkClass = "bg-gray-900/50 text-gray-400";
  let tokenSymbol = "RBTC"; // Default symbol
  
  if (isRSKTestnet) {
    networkName = "RSK Testnet";
    networkClass = "bg-blue-900/50 text-blue-400";
    tokenSymbol = "tRBTC";
  }
  
  return {
    chainId,
    isMainnet: false,
    isTestnet: isRSKTestnet,
    networkName,
    networkClass,
    tokenSymbol,
    isMounted
  };
} 