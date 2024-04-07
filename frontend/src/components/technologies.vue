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
          <h5> <span>Frameworks et librairies Frontend principales:</span> Vue, React</h5>
          <p>Dotée d'une expertise approfondie en Vue 2 et 3, avec une solide compétence en React pour le développement d'applications front-end réactives et modernes.</p>
        </div>
      </article>

      <article class="art-3">
        <div class="content">
          <img
            src="../assets/logos/angular-logo.png"
            alt="logo angular"
          >
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
          <h5> <span>Autres librairies frontend :</span> pinia, vuetify, buefy, bulma, GSAP, Vite</h5>
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
          <h5> <span>Côté Backend :</span> Javascript, Java</h5>
          <p>Capable de naviguer entre les paradigmes de programmation, j'aligne mon approche sur les objectifs du projet, optant pour la programmation orientée objet en Java ou JavaScript pour créer des solutions backend robustes et adaptées.</p>
        </div>
      </article>

      <article class="art-5">
        <div class="content">
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
        </div>
        <div class="description">
          <h5> <span>Environnements et frameworks Backend:</span></h5>
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
          <h5><span>Base de données et ORM:</span> MongoDB, Sequelize, MariaDB, Prisma</h5>
          <p>Pour gérer efficacement l'accès et la manipulation des données pour des applications performantes.</p>
        </div>
      </article>
      <article class="art-7">
        <div class="content">
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

          <h5>Outils de développement, CI/CD et Conteneurisation: Docker, Github, Gitlab</h5>
          <p>Je maîtrise les technologies de conteneurisation telles que Docker, et les plateformes de gestion de versions et d'intégration continue comme GitHub et GitLab.</p>
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
  width: 70%;
  max-width: 1500px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto, 1fr);
  grid-template-rows: repeat(auto, 0.5fr);
  grid-gap: 10px;
  /* animation */
  background: url("../assets/img/ball.png"), url("../assets/img/six.png");
  background-repeat: no-repeat;
  background-size: 55% 55%;
  -webkit-animation: animatedBackground 10s ease infinite;
  -moz-animation: animatedBackground 10s ease infinite;
  animation: animatedBackground 10s ease infinite;
}
@keyframes animatedBackground {
  0%,
  100% {
    background-position: center -5%;
  }
  25% {
    background-position: right center;
  }
  50% {
    background-position: center 115%;
  }
  75% {
    background-position: left center;
  }
}

.grid article {
  border: 1px solid #b3aea66a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(95px);
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
  padding: 0% 2%;
  line-height: 140%;
  color: rgb(104, 104, 104);
}

.grid article:hover {
  border: 1px solid #b3aea69a;
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
  font-weight: bold;
}

.grid article h5 span {
  font-size: 1.03rem;
}
.grid article p {
  font-family: "Playfair Display", serif;
  font-size: 0.9rem;
}

.grid article .content img {
  max-width: 12%;
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
  grid-column: 1/4;
  grid-row: 4/5;
}
.grid .art-7 {
  grid-column: 4/7;
  grid-row: 4/5;
}

.grid .art-1 .content,
.grid .art-2 .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.grid .art-1 .content img {
  margin: 3% 0 0 0;
  max-width: 25%;
  max-height: 60%;
}
.grid .art-2 .content img {
  margin: 3% 0 0 0;
  max-width: 20%;
  max-height: 60%;
}
.grid .art-3 .content img {
  max-width: 9%;
}
.grid .art-4 .content img {
  max-width: 45%;
  max-height: 55%;
  margin: 3% 0% 0% 0%;
}
.grid .art-5 .content img {
  max-width: 17%;
  max-height: 50%;
}
.grid .art-6 .content img {
  max-width: 25%;
  max-height: 60%;
  margin: 1% 0 0 0;
}
.grid .art-7 .content img {
  max-width: 25%;
  max-height: 60%;
}

/*-------------------- RESPONSIVE -------------------- */
@media (max-width: 900px) {
  .grid article {
    grid-column: 1/7 !important;
  }
  .grid article .content img {
    min-width: 75px;
    max-width: 15% !important;
  }
  .grid .art-1 {
    grid-row: 1/2;
  }
  .grid .art-2 {
    grid-row: 2/3;
  }
  .grid .art-3 {
    grid-row: 3/4;
  }
  .grid .art-4 {
    grid-row: 4/5;
  }
  .grid .art-5 {
    grid-row: 5/6;
  }
  .grid .art-6 {
    grid-row: 6/7;
  }
  .grid .art-1 .content img,
  .grid .art-6 .content img,
  .grid .art-7 .content img,
  .grid .art-2 .content img {
    max-height: 90%;
  }
  .grid .art-5 .content img {
    max-width: 24%;
    max-height: 100%;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 3.5em;
    text-align: center;
    width: 100%;
    margin: 0 0 9vh 0;
  }
}

@media (max-width: 425px) {
  h1 {
    margin: 0 0 5vh 0;
  }
}
</style>
