// étape 1 : Faire le HTML ( mettre les id et les classe )

// étape 2 : Construire l'URL de l'API avec le nom de l'artiste

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json"

// étape 3 : Faire le FETCH
fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        // étape 4 : Tester les données 
        console.log(data.);
// étape 5 : parcourir la liste des produits (data.product en id)
// étape 6 : chaque produits creer une div (creat element)
// - creer une div (card) pour englober les elements qui suivent
// - creer un paragraphe p pour afficher le 
// - creer un titre h3 pour afficher le nom (textcontent)






    })
