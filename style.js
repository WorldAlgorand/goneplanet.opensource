const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

// Send Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
      params: [
        {
          from: accounts[0], // The user's active address.
          to: <recipient address> // Required except during contract publications.
          value: <value in wei to send> // Only required to send ether to the recipient from the initiating external account.
          gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
          maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
          maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error(error));
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}


