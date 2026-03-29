function openCardTab(evt, tabId) {
  // 1. On cache tout le contenu
  let contents = document.getElementsByClassName("card-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("show");
  }

  // 2. On désactive tous les boutons
  let tabs = document.getElementsByClassName("tab-item");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // 3. On affiche et on active
  document.getElementById(tabId).classList.add("show");
  evt.currentTarget.classList.add("active");
}
function openTab(evt, tabId) {
    // 1. On cache tous les contenus
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("show");
    }

    // 2. On enlève la classe active de tous les onglets de gauche
    let tabItems = document.getElementsByClassName("tab-item");
    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].classList.remove("active");
    }

    // 3. On affiche le contenu sélectionné
    const selectedContent = document.getElementById(tabId);
    
    // CONDITION CRUCIALE : Le texte n'apparaît que si c'est 'nos-cartes'
    if (tabId === 'nos-cartes') {
        selectedContent.classList.add("show");
    } else {
        // Optionnel : afficher un autre message ou laisser vide pour les autres onglets
        selectedContent.classList.add("show"); 
    }

    evt.currentTarget.classList.add("active");
}

// Fonction pour souligner au clic
function selectTitle(elementId) {
    // On retire le soulignement des autres titres s'il y en a
    let titles = document.getElementsByClassName("clickable-title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove("active-link");
    }
    
    // On ajoute le soulignement sur celui cliqué
    document.getElementById(elementId).classList.add("active-link");
}