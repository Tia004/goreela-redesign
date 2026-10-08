// Interattività e animazioni
document.addEventListener("DOMContentLoaded", () => {
    console.log("⚡ Progetto caricato con successo!");
    const btn = document.getElementById("cta-btn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("🚀 Benvenuto in " + document.title + "! Progetto operativo e pronto per lo sviluppo.");
        });
    }
});
