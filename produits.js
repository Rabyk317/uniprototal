// On attend que la page soit bien chargée
document.addEventListener('DOMContentLoaded', function() {

    // 1. On sélectionne tous les liens de la sidebar (à gauche)
    const links = document.querySelectorAll('.tab-link');
    // 2. On sélectionne tous les panneaux de contenu (à droite)
    const contents = document.querySelectorAll('.product-panel');

    // 3. On ajoute un "écouteur" de clic sur chaque lien
    links.forEach(link => {
        link.addEventListener('click', function() {
            
            // ÉTAPE A : Nettoyage
            // On retire la classe 'active' du lien précédent
            links.forEach(l => l.classList.remove('active'));
            // On cache tous les contenus à droite
            contents.forEach(c => c.classList.remove('active'));

            // ÉTAPE B : Activation
            // On ajoute 'active' au lien sur lequel on vient de cliquer
            this.classList.add('active');

            // On récupère le nom de la cible (ex: "lampes")
            const targetId = this.getAttribute('data-target');
            // On affiche le bloc qui a cet ID précis
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});