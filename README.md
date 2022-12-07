### Setup

Fill in your API Keys

> PRIVATE_KEY= \
> ETHERSCAN_KEY= \
> INFURA_API_KEY= 


Deploy the Smart Contract to Goerli
> npx hardhat run scripts/deploy.ts --network goerli


Verify the Smart Contract on Goerli
> npx hardhat verify <CONTRACT_ADDR> --network goerli


### Troubleshoot
1. Invalid API Key
> In case you receive "Invalid API Key", this most likely happens after you create a fresh new Etherscan API key.
> Waiting for 10-15min might resolve that issue

2. sendTransaction error
> this occurs, if you forget to rename the .env-template to .env

