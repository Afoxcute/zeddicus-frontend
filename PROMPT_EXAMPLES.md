# RSK BATTLE ARENA - Prompt Examples

This document contains examples of prompts used with AI tools (like ChatGPT and GitHub Copilot) throughout the development of RSK Battle Arena. These prompts show how AI was used to generate code, solve problems, and optimize the project.

## Smart Contract Development Prompts

### Initial Contract Structure
```
I need to build a Rock-Paper-Scissors game as a smart contract on RSK Testnet. The game should:
1. Allow users to create games with a stake amount in tRBTC
2. Support multiple game types (single round, best of 3, best of 5)
3. Let other players join games by matching the stake
4. Track player moves and determine winners based on classic RPS rules
5. Keep history of all games and moves
6. Pay out winners automatically

Please generate a Solidity contract (version 0.8.26) with all necessary functions, events, and data structures.
```

### Game Logic Implementation
```
I need to implement the game logic for my Rock-Paper-Scissors smart contract. Specifically, I need a function to:
1. Process player moves (rock, paper, scissors)
2. Determine the winner of each round
3. Track scores across multiple rounds
4. Determine when a game is complete
5. Handle payouts to winners

Can you provide the Solidity code for these functions with proper error handling and security considerations?
```

### Security Review
```
Please review my RockPaperScissors smart contract for potential security vulnerabilities. The contract handles user stakes in tRBTC, so I want to ensure:
1. No reentrancy attacks are possible
2. Players can't cheat by seeing opponent moves first
3. Funds are distributed correctly to winners
4. No player can manipulate game outcomes

Contract code:
[Insert contract code here]
```

## Frontend Development Prompts

### Game Creation Component
```
I need a React component for creating a new Rock-Paper-Scissors game on RSK Testnet. The component should:
1. Allow selection of game type (Lightning Duel, Warrior Clash, Epic Tournament)
2. Have a stake amount input with validation
3. Include a "Create Game" button that calls the contract
4. Show loading states during transaction
5. Display success/error messages

Use Tailwind CSS for styling with a dark gaming theme, and integrate with Wagmi hooks for contract interaction.
```

### Game Interface Design
```
Design an interactive game interface for playing Rock-Paper-Scissors on the blockchain. The UI should:
1. Show both players' information and scores
2. Have intuitive controls for selecting rock, paper, or scissors
3. Display the current round and game status
4. Show move history and results
5. Include animations for move selection and outcome reveals

The interface should feel modern and gamified while being responsive on mobile devices.
```

### State Management
```
I'm building a blockchain game with Next.js, React, and Wagmi. I need help with state management to:
1. Track game creation and joining status
2. Listen for contract events to update the UI in real-time
3. Handle user authentication and wallet connection
4. Manage loading states during blockchain transactions
5. Store game history for the current user

Can you provide a pattern using React hooks that efficiently manages this state?
```

## Problem-Solving Prompts

### Debugging Transaction Errors
```
I'm getting this error when trying to join a game on RSK Testnet:
"ContractFunctionExecutionError: execution reverted: Incorrect stake amount"

Here's my code that's calling the contract:
[Insert code]

How can I fix this issue? The stake amount seems correct according to the UI.
```

### Optimizing Gas Usage
```
My Rock-Paper-Scissors contract is using more gas than expected. Can you help optimize these functions to reduce gas costs while maintaining the same functionality?

[Insert contract functions]

Specifically, I want to focus on the makeMove and resolveRound functions which are called frequently.
```

### UI Performance Issues
```
My game interface is experiencing performance issues, especially when updating the UI after moves are made. I'm using Wagmi's event listeners and React state, but it's causing re-renders and delays.

Here's my current component structure:
[Insert component code]

How can I optimize this to make the UI more responsive while still keeping it in sync with blockchain events?
```

## Documentation Prompts

### README Creation
```
Generate a comprehensive README.md for my RSK Battle Arena project, which is a blockchain-based Rock-Paper-Scissors game on RSK Testnet. Include:
1. Project overview
2. Features list
3. Technologies used (Next.js, React, Wagmi, RSK Testnet)
4. Installation and setup instructions
5. How to play the game
6. Smart contract details
7. Screenshots or diagrams (describe what these would be)
```

### User Guide
```
Create a user guide explaining how to play RSK Battle Arena. Include instructions for:
1. Connecting a wallet to the game
2. Creating a new game with stakes
3. Finding and joining existing games
4. Making moves during gameplay
5. Viewing game history and results
6. Understanding different game modes

Make it user-friendly for people who may be new to blockchain games.
``` 