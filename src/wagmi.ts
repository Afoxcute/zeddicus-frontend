import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  rootstockTestnet,
} from "wagmi/chains";
import { http } from 'wagmi';
// import { taikoHekla as taikotemp } from "viem/_types/chains";

export const config = getDefaultConfig({
  appName: 'RockPaperScissors',
  projectId: '2c22698ed6fa65b5ab4a6acb4af0b952',
  chains: [rootstockTestnet],
  ssr: true,
  transports: {
    [rootstockTestnet.id]: http(
      'https://public-node.testnet.rsk.co'
    ),
  },
});
