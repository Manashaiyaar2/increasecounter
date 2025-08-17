# IncreaseCounter

## Project Description

IncreaseCounter is a simple Clarity smart contract that demonstrates a basic on-chain counter. Users can increment the counter and view its current value.

## Project Vision

To provide a foundational example for learning Clarity smart contract development and to serve as a building block for more complex decentralized applications.

## Future Scope

- Add decrement functionality.
- Emit events on counter changes.
- Implement access control for counter operations.
- Integrate with front-end applications for user interaction.

## Contract Address

`SPXXXX.../counter` (replace with actual deployed contract address)

## Getting Started

### Deploy the contract
```sh
clarinet deploy
```

### Interact with the contract
```sh
clarinet console
# Call functions like:
# (contract-call? .counter increment)
# (contract-call? .counter decrement)
# (contract-call? .counter get-counter)
```

### Run tests
```sh
clarinet test
```

## Planned Improvement

We will improve the contract by adding events that emit whenever the counter is incremented or decremented. This will make it easier to track changes to the counter state.
