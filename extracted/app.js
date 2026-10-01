const toast = document.querySelector(".toast");

document.querySelectorAll(".menu-card").forEach(card => {
  card.addEventListener("click", () => {
    const names = {
      "my-car": "Mein Auto – Fahrzeug & Details",
      repairs: "Reparaturen – Verwaltung",
      inspection: "Pickerl/TÜV – Termine & Fristen",
      maintenance: "Wartungen – Übersicht",
      overview: "Gesamtblick – wichtigste Infos",
      tires: "Reifen – Größen, Dimensionen und Alter"
    };
    toast.textContent = names[card.dataset.target] || "Bereich geöffnet";
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
