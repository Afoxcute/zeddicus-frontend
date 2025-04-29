# Smart Contract for Rock-Paper-Sissors on rootStock testnet

This is a decentralized Rock-Paper-Scissors Smart contract deployed on the CoreDao roostSTock testnet network. The Smart Contract acts as the intermediary that allows users to create and join games, track their move history, and view past game results, all while ensuring transparency and fairness through blockchain technology.

## Getting Started

To get started with the contract, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Afoxcute/rsk-battle-arena.git
   cd rsk-battle-arena
   Edit hardhat.config.ts and change the URL(which is the RPC URL) as desired.
   ```

2. Install the dependencies:
   ```bash
   npm install or yarn install
   create .env file and add YOUR_PRIVATE_KEY to it
   ```

3. Compile & Deploy Contract:
   ```bash
   npx hardhat compile
   npx hardhat run ./scripts/deploy.js
   ```

4. Open [[Testnet Contract on-chain](https://explorer.testnet.rootstock.io/address/0x7296c77edd04092fd6a8117c7f797e0680d97fa1)](https://explorer.testnet.rootstock.io/address/0x7296c77edd04092fd6a8117c7f797e0680d97fa1) in your browser to see the Contract on-chain.

