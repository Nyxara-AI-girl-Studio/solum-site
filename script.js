
function setLanguage(lang) {
  const translations = {
    en: {
      title: "Solum: The Soil of Value",
      claimTitle: "Claim Your Seed of Solum",
      claimButton: "Claim NFT",
      idTitle: "Generate Your Solum ID",
      generateButton: "Generate",
      footerText: "© 2025 Solum Project — All rights decentralized."
    },
    ru: {
      title: "Solum: Почва Ценности",
      claimTitle: "Получите своё Семя Solum",
      claimButton: "Получить NFT",
      idTitle: "Создайте свой Solum ID",
      generateButton: "Создать",
      footerText: "© 2025 Solum Project — Все права децентрализованы."
    },
    es: {
      title: "Solum: El Suelo del Valor",
      claimTitle: "Reclama tu Semilla de Solum",
      claimButton: "Reclamar NFT",
      idTitle: "Genera tu Solum ID",
      generateButton: "Generar",
      footerText: "© 2025 Proyecto Solum — Todos los derechos descentralizados."
    },
    zh: {
      title: "Solum：价值之土",
      claimTitle: "领取你的Solum种子",
      claimButton: "领取NFT",
      idTitle: "生成你的Solum ID",
      generateButton: "生成",
      footerText: "© 2025 Solum项目 — 所有权利已去中心化。"
    }
  };

  const t = translations[lang];
  if (t) {
    document.getElementById("title").textContent = t.title;
    document.getElementById("claimTitle").textContent = t.claimTitle;
    document.getElementById("claimButton").textContent = t.claimButton;
    document.getElementById("idTitle").textContent = t.idTitle;
    document.getElementById("generateButton").textContent = t.generateButton;
    document.getElementById("footerText").textContent = t.footerText;
  }
}

function claimNFT() {
  alert("Claiming NFT is not implemented yet.");
}

function generateSolumID() {
  const adjectives = ["Ancient", "Luminous", "Hidden", "Silent", "Primordial"];
  const nouns = ["Seed", "Stone", "Flame", "Wind", "Root"];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const id = `${adj}-${noun}-${Math.floor(Math.random() * 10000)}`;
  document.getElementById("solumID").textContent = id;
}
