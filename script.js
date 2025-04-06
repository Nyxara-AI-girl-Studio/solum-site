
async function addToken() {
    try {
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: '0x1234567890abcdef1234567890abcdef12345678',
                    symbol: 'SLM',
                    decimals: 18,
                    image: 'https://nyxara.github.io/solum-site/seed-of-solum.png',
                },
            },
        });

        if (wasAdded) {
            console.log('Token added');
        } else {
            console.log('Token not added');
        }
    } catch (error) {
        console.error(error);
    }
}

async function transferToken() {
    const recipient = prompt("Enter recipient address:");
    const amount = prompt("Enter amount of SLM to transfer:");
    if (!recipient || !amount) return;

    const contractAddress = '0x1234567890abcdef1234567890abcdef12345678';
    const abi = [
        {
            "constant": false,
            "inputs": [
                { "name": "_to", "type": "address" },
                { "name": "_value", "type": "uint256" }
            ],
            "name": "transfer",
            "outputs": [{ "name": "", "type": "bool" }],
            "type": "function"
        }
    ];

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
        const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, 18));
        console.log('Transaction sent:', tx.hash);
        await tx.wait();
        alert('Transfer successful!');
    } catch (error) {
        console.error(error);
        alert('Transfer failed!');
    }
}
