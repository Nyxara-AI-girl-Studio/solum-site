
async function addToken() {
  try {
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0xYourTokenAddress',
          symbol: 'SLM',
          decimals: 18,
          image: 'https://yourdomain.com/img/solum-logo-b.png',
        },
      },
    });
    if (wasAdded) {
      console.log('Token added');
    }
  } catch (error) {
    console.error(error);
  }
}

function transferToken() {
  alert('Transfer functionality is not implemented in this prototype.');
}

function claimNFT() {
  alert('NFT claiming is not implemented yet.');
}
