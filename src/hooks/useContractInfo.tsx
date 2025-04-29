import { useChainId } from 'wagmi';
import { useState, useEffect } from 'react';
import { abi as testnetAbi, contractAddress as testnetAddress } from '../constants/contractInfo';
import { rootstockTestnet } from 'wagmi/chains';

export function useContractInfo() {
  const chainId = useChainId();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Always use testnet contract info since we're only using rootstockTestnet
  const isTestnet = isMounted && chainId === rootstockTestnet.id;
  
  // Log the current network and contract info being used
  useEffect(() => {
    if (isMounted && chainId) {
      console.log(`Connected to chain ID: ${chainId}`);
      console.log(`Using testnet contract info`);
    }
  }, [chainId, isMounted]);
  
  // Always use testnet contract info
  return {
    abi: testnetAbi,
    contractAddress: testnetAddress as `0x${string}`,
  };
} 