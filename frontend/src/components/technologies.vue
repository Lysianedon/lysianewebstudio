<template>
  <section>
    <h1>Technologies</h1>

    <div class="grid">
      <article class="art-1">
        <div class="content">
          <img
            src="../assets/logos/html-logo.png"
            alt="logo HTML"
          >
          <img
            src="../assets/logos/css-logo.png"
            alt="logo CSS"
          >
          <img
            src="../assets/logos/js-logo.png"
            alt="logo Javascript"
          >
        </div>
        <div class="description">
          <h5><span class="bold">Langages</span>: HTML5, CSS3, Javascript:</h5>
          <p> Je maîtrise les langages fondamentaux du développement web, permettant de construire des sites dynamiques et responsives</p>
        </div>
      </article>
      <article class="art-2">
        <div class="content">

          <img
            src="../assets/logos/vue-logo.png"
            alt="logo vuejs"
          >
          <img
            src="../assets/logos/react-logo.png"
            alt="logo reactjs"
          >
        </div>
        <div class="description">
          <h5>Frameworks et librairies Frontend principales: vue, react</h5>
          <p>Dotée d'une expertise approfondie en Vue 2 et 3, avec une solide compétence en React pour le développement d'applications front-end réactives et modernes.</p>
        </div>
      </article>

      <article class="art-3">
        <div class="content">
          <img
            src="../assets/logos/pinia-logo.png"
            alt="logo Javascript"
          >
          <img
            src="../assets/logos/vuetify-logo.png"
            alt="logo vuetify"
          >
          <img
            src="../assets/logos/buefy-logo.png"
            alt="logo buefy"
          >
          <img
            src="../assets/logos/bulma-logo.png"
            alt="logo bulma"
          >
          <img
            src="../assets/logos/gsap-logo.png"
            alt="logo gsap"
          >
          <img
            src="../assets/logos/vite-logo.png"
            alt="logo vite"
          >
        </div>
        <div class="description">
          <h5>Autres librairies frontend : pinia, vuetify, buefy, bulma, GSAP, Vite etc:</h5>
          <p>J'utilise une gamme de librairies front-end avancées pour concevoir des interfaces utilisateur complexes, offrant ainsi une expérience optimisée, intuitive et fluide. </p>
        </div>
      </article>
      <article class="art-4">
        <div class="content">
          <img
            src="../assets/logos/js-logo.png"
            alt="logo javascript"
          >
          <img
            src="../assets/logos/java-logo.png"
            alt="logo java"
          >
        </div>
        <div class="description">
          <h5>4: LG back : Javascript, Java</h5>
          <p>Capable de naviguer entre les paradigmes de programmation, j'aligne mon approche sur les objectifs du projet, optant pour la programmation orientée objet en Java ou JavaScript pour créer des solutions backend robustes et adaptées.</p>
        </div>
      </article>

      <article class="art-5">
        <div class="content">
          <img
            src="../assets/logos/angular-logo.png"
            alt="logo angular"
          >
          <img
            src="../assets/logos/spring-logo.png"
            alt="logo spring"
          >
          <img
            src="../assets/logos/maven-logo.png"
            alt="logo maven"
          >
          <img
            src="../assets/logos/nodejs-logo.png"
            alt="logo nodejs"
          >
          <img
            src="../assets/logos/express-logo.png"
            alt="logo express"
          >
          <img
            src="../assets/logos/docker-logo.png"
            alt="logo docker"
          >
          <img
            src="../assets/logos/github-logo.png"
            alt="logo github"
          >
          <img
            src="../assets/logos/gitlab-logo.png"
            alt="logo gitlab"
          >
        </div>
        <div class="description">
          <h5>5: environnement et frameworks: Node.js, Express.js, Docker, Github, Gitlab</h5>
          <p>Je gère l'environnement de développement complet, du serveur avec Node.js à la conteneurisation avec Docker, appuyé par une maîtrise des outils de versionning comme GitHub et GitLab.</p>
        </div>
      </article>
      <article class="art-6">
        <div class="content">
          <img
            src="../assets/logos/mongodb-logo.png"
            alt="logo mongodb"
          >
          <img
            src="../assets/logos/sequelize-logo.png"
            alt="logo sequelize"
          >
          <img
            src="../assets/logos/mariadb-logo.png"
            alt="logo mariadb"
          >
          <img
            src="../assets/logos/prisma-logo.png"
            alt="logo prisma"
          >
        </div>
        <div class="description">
          <h5>Base de données et ORM: MongoDB, Sequelize, MariaDB, Prisma</h5>
          <p>Je gère efficacement les données en maîtrisant divers systèmes de gestion de bases de données comme MongoDB et MariaDB, ainsi que des ORM tels que Sequelize et Prisma, optimisant l'accès et la manipulation des données pour des applications performantes.</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
}
h1 {
  text-align: center;
  margin: 0 0 5vh 0;
}
/* GRID */
.grid {
  width: 80%;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 20vh);
  grid-template-rows: repeat(6, 0.6fr);
  /* background: url("../assets/logos/angular-logo.png"); */
  grid-gap: 10px;
}
.grid article {
  border: 1px solid #b3aea66a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.grid article .content {
  padding: 2%;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.grid article .description {
  padding: 0% 15% 0 2%;
  background: white;
  /* fix transition below */
  transition: background 1s ease;
  color: rgb(84, 84, 84);
}
.grid article .description:hover {
  color: rgb(43, 42, 42);
  background: rgb(210, 198, 173);
  background: linear-gradient(
    175deg,
    rgba(223, 211, 186, 0.091) 8%,
    rgba(173, 143, 95, 0.05) 40%,
    rgba(116, 119, 116, 0.223) 100%
  );
}
.grid article h5 {
  font-size: 1rem;
  font-family: "Playfair Display", serif;
  margin: 25px 0 0 0;
}
.grid article p {
  font-family: "Playfair Display", serif;
  font-size: 0.9rem;
}

.grid article .content img {
  max-width: 15%;
  margin: 0 2%;
}

.grid .art-1 {
  grid-column: 1/4;
  grid-row: 1/2;
}
.grid .art-2 {
  grid-column: 4/7;
  grid-row: 1/2;
}
.grid .art-3 {
  grid-column: 1/7;
  grid-row: 2/3;
}
.grid .art-4 {
  grid-column: 1/3;
  grid-row: 3/4;
}
.grid .art-5 {
  grid-column: 3/7;
  grid-row: 3/4;
}
.grid .art-6 {
  grid-column: 1/7;
  grid-row: 4/5;
}

.grid .art-1 .content,
.grid .art-2 .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.grid .art-1 .content img,
.grid .art-2 .content img {
  max-width: 20%;
  margin: 3% 0;
}
.grid .art-3 .content img {
  max-width: 9%;
}
.grid .art-4 .content img {
  max-width: 45%;
  margin: 3% 1.5%;
}
.grid .art-5 .content img {
  max-width: 12.5%;
  margin: 2%;
}
.grid .art-6 .content img {
  max-width: 12%;
  margin: 2%;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3.5em;
    text-align: center;
    width: 100%;
    margin: 0 0 9vh 0;
  }
  .main-blocks {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .main-blocks h2 {
    font-size: 2.5em;
    width: 100%;
  }
  .frontend-block h2 {
    margin: 0;
    text-align: left;
  }
  .main-blocks h2 .line {
    width: 100%;
    display: inline-flex;
    flex-grow: stretch;
    border-top: 1px solid rgba(0, 0, 0, 0.723);
  }
  .backend-block h2 {
    margin: 0;
    text-align: right;
  }
  .sub-categories-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .sub-category {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
  }
  .sub-category h3 {
    color: rgb(74, 71, 63);
    font-size: 1.2em;
  }
  ul {
    padding-left: 1em;
    list-style-position: inside;
  }

  ul li {
    font-size: 1.1rem;
    line-height: 250%;
  }
  .divider {
    width: 0;
    margin: 0;
  }
}

@media (max-width: 425px) {
  h1 {
    margin: 0 0 5vh 0;
  }
  .sub-categories-container {
    flex-direction: column;
  }
  .main-blocks h2 {
    font-size: 2em;
    margin: 0;
    text-align: center;
  }
  .main-blocks h2 .line {
    display: none;
  }
  .sub-category h3 {
    text-decoration: underline;
    margin: 0;
  }
}
</style>
