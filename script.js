
const tokenAddress = "0xf15e35d44ce5538f61884823fe546d391dc734f6";
const tokenSymbol = "SLM";
const tokenDecimals = 18;
const tokenImage = "Solum_a_logo_design_fo.png";

document.getElementById("addButton").addEventListener("click", async () => {
  try {
    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
});

const translations = {
  en: {
    title: "Solum",
    description: "Decentralized token of the Solum network.",
    addToMetaMask: "Add to MetaMask"
  },
  ru: {
    title: "Солум",
    description: "Децентрализованный токен сети Solum.",
    addToMetaMask: "Добавить в MetaMask"
  },
  es: {
    title: "Solum",
    description: "Token descentralizado de la red Solum.",
    addToMetaMask: "Agregar a MetaMask"
  },
  zh: {
    title: "Solum",
    description: "Solum 网络的去中心化代币。",
    addToMetaMask: "添加到 MetaMask"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
setLanguage("en");
