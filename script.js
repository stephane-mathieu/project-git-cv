function showCV(cvNumber) {
    // Charger le contenu du CV en fonction du numéro
    const cvContainer = document.getElementById("cv-container");

    // Vous pouvez remplacer le contenu des CVs par vos propres données
    const cvContent = `<h2>CV ${cvNumber}</h2>
                       <img src="lien_de_votre_image${cvNumber}.png" alt="Photo du CV ${cvNumber}">
                       <p>Informations sur le CV ${cvNumber}...</p>`;

    cvContainer.innerHTML = cvContent;
}
