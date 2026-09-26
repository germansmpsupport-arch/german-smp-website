const serverIp = document.getElementById("serverIp");
const copyBtn = document.getElementById("copyBtn");
const copyMessage = document.getElementById("copyMessage");

copyBtn.addEventListener("click", async () => {
  const ip = serverIp.textContent.trim();

  try {
    await navigator.clipboard.writeText(ip);
    copyBtn.textContent = "KOPIERT ✓";
    copyMessage.textContent = "Die Server-IP wurde in die Zwischenablage kopiert.";
    setTimeout(() => {
      copyBtn.textContent = "KOPIEREN";
      copyMessage.textContent = "IP kopieren und Minecraft starten.";
    }, 2200);
  } catch {
    copyMessage.textContent = "Kopieren nicht möglich – markiere die IP einfach manuell.";
  }
});
