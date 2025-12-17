// Faire le HTML - structure (header, main et footer, nav avec lien cliquable)

// étape 2 : Construire l'URL de l'API avec le nom de l'artiste

const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json`

// étape 3 : Parcourir le tableau JSON  et mettre le fetch 
fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        // étape 4 : Tester les données 

        console.log(data.realisations);
        // etape 5 : Creer le nom de l'entreprise (h1), slogan (H2) et les boutons
        const logo = document.getElementById("logo");
        logo.textContent = data.entreprise;

        let titre = document.createElement("h2");
        titre.textContent = data.titre;
        // titre.classList.add("h2");

        let slogan = document.createElement("p");
        slogan.textContent = data.propositionDeValeur;
        // slogan.classList.add("p");

        let boutton = document.createElement("button");
        boutton.textContent = data.texteBouton;
        boutton.classList.add("button");

        let accroche = document.getElementById("accroche");
        accroche.appendChild(titre);
        accroche.appendChild(slogan);
        accroche.appendChild(boutton);

        let avantage = document.getElementById("container");
        data.promessesClients.forEach(promess => {
            let promesses = document.createElement("p");
            promesses.textContent = promess;


            console.log(promesses);
            avantage.appendChild(promesses);

            // Il manque un appendChild
        });




        data.realisations.forEach(real => {
            let containerReal = document.getElementById("real");
            let card = document.createElement("div");

            // ETAPE 6 : Pour chaque élement du tableau "réalisation"créer une DIV
            // - Créer un titre (h3) pour afficher le nom
            let title = document.createElement("h3");
            title.textContent = real.titre
            console.log(title);
            // - Créer un paragraphe (p) pour la description
            let paragraphe = document.createElement("p");
            paragraphe.textContent = real.description
            console.log(paragraphe);
            // - Créer un élément image (img) pour afficher la photo
            let image = document.createElement("img");
            image.src = real["image-url"];
            console.log(image);

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(paragraphe);


            // ETAPE 7 : Envoyer dans le HTML les élements crées (appenchild)
            containerReal.appendChild(card);
        });


        data.temoignages.forEach(temo => {
            let div = document.createElement("div");


            // ETAPE 8 : Pour chaque élement du tableau "témoignages"
            // - Créer un titre (h3) pour afficher le prénom
            let name = document.createElement("h3");
            name.textContent = temo.prenom
            console.log(name);

            // - Créer un titre (h4) pour afficher le type de prestation
            let presta = document.createElement("h4");
            presta.textContent = temo.typePrestation
            console.log(presta);

            // - Créer un paragraphe (p) pour les commentaires
            let comment = document.createElement("p");
            comment.textContent = temo.commentaire
            console.log(comment);
            // - creer un p pour la note
            let note = document.createElement("p");
            note.textContent = temo.note
            console.log(note);

            let test = document.getElementById("temoi")
            test.appendChild(div);
            div.appendChild(name);
            div.appendChild(presta);
            div.appendChild(comment);
            div.appendChild(note);
            // ETAPE 9 : Envoyer dans le HTML les élements crées (appenchild)
        });
    })
