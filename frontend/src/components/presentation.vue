<template>
    <section>
      <h1>Présentation</h1>
      <div class="presentation">
        <h2 class="playfair-font">Je suis Lysiane, développeuse web fullstack spécialisée en Javascript. Je crée des projets intuitifs et performants, avec chaque ligne de code visant à améliorer l'expérience utilisateur.</h2>
        <h2 class="playfair-font">Inspirée par les créateurs de <a href="https://www.notion.so/fr-fr" target="_blank" rel="noopener noreferrer">Notion</a>, je m'applique à rendre le complexe simple et agréable. Pour une vision détaillée de mon travail, <a href="../../public/CV-FRENCH.pdf" download="CV_Lysiane_DON.pdf" class="download-link">téléchargez mon CV ici</a>.</h2>
      </div>
    </section>
  </template>

  <style scoped>
  section{
    min-height: 70vh;
    padding: 0 2vw;
    font-family: 'Playfair Display', serif;
    width: 100% ;
    overflow-x: hidden;
  }
 h1{
    font-family: 'Oswald', sans-serif;
    text-align: end;
    color: #b3aea6;
    line-height: 70%;
  }
  .presentation {
    width: 60vw;
    margin: 27vh 0 0vh 0;
  }
  .presentation h2{
    text-align: justify;
    line-height: 300%;
    font-size: 1.2rem;  
  }
  
  .download-link{
    color: black;
    font-size: 1em;
    letter-spacing: 1px;
    font-family: 'Oswald', sans-serif;
    font-weight: 100;
  }
  
  h2 a {
    color: black;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    section {
        padding: 0 3vw;
    }
    .presentation{
        width: 100%;
        margin: 10vh 0 0vh 0;
    }
    h1{
        font-size: 3.5em;
        /* text-align: center; */
    }
    .presentation h2{
      line-height: 200%;
      font-size: 1em;
      margin: auto;
    }
  }

  </style>
  