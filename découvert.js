function openTab(evt, tabId) {
  // 1. Cacher tous les contenus
  let contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("show");
  }

  // 2. Désactiver tous les onglets (couleur grise)
  let tabs = document.getElementsByClassName("tab-item");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // 3. Afficher le bon contenu et activer le bon onglet
  document.getElementById(tabId).classList.add("show");
  evt.currentTarget.classList.add("active");
}