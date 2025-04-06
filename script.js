const tokenAddress = "0xB3f1aF8C19Dc3dAeF6e1D24e06A2C6D41966B8b3"; // Sepolia
const tokenSymbol = "SLM";
const tokenDecimals = 18;

document.getElementById("addTokenBtn").addEventListener("click", async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Пожалуйста, установите MetaMask!");
    return;
  }

  try {
    await ethereum.request({ method: "eth_requestAccounts" });

    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
        },
      },
    });

    const status = document.getElementById("status");
    if (wasAdded) {
      status.textContent = "Токен SLM добавлен в MetaMask!";
    } else {
      status.textContent = "Добавление токена отменено.";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("status").textContent = "Ошибка: " + error.message;
  }
});

document.getElementById("transferBtn").addEventListener("click", async () => {
  const recipient = prompt("Введите адрес получателя:");
  const amount = prompt("Введите количество токенов для отправки:");

  if (!recipient || !amount) return;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      tokenAddress,
      [
        "function transfer(address to, uint amount) public returns (bool)",
      ],
      signer
    );

    const tx = await contract.transfer(recipient, ethers.utils.parseUnits(amount, tokenDecimals));
    document.getElementById("status").textContent = "Транзакция отправлена: " + tx.hash;
  } catch (error) {
    console.error(error);
    document.getElementById("status").textContent = "Ошибка: " + error.message;
  }
});