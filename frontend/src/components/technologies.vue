<template>
  <section>
    <h1>Technologies</h1>
    <!-- <div class="frontend-block main-blocks">
      <h2>FRONTEND <span class="line"></span></h2>
      <div class="sub-categories-container">
        <div class="sub-category">
          <h3>Frameworks et libraries</h3>
          <ul>
            <li>Vue.js 2 et 3</li>
            <li>React</li>
            <li>Pinia</li>
            <li>Vuetify</li>
            <li>Buefy</li>
            <li>Bulma</li>
            <li>GSAP</li>
          </ul>

        </div>
        <div class="sub-category">
          <h3>Standards et outils</h3>
          <ul>
            <li> Webpack</li>
            <li> Vite</li>
            <li>HTML5</li>
            <li> CSS3</li>
          </ul>
        </div>
      </div>

    </div>
    <div class="divider"></div>
    <div class="backend-block main-blocks">
      <h2>BACKEND <span class="line"></span></h2>
      <div class="sub-categories-container">
        <div class="sub-category">
          <h3>Base de données et ORM</h3>
          <ul>
            <li>MongoDB</li>
            <li>Sequelize</li>
            <li>MariaDB</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div class="sub-category">
          <h3>Environments</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Docker</li>
          </ul>

        </div>
      </div>
    </div> -->

    <!-------------------------- NEW LAYOUT -------------------------->

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
        <p>Langages: HTML5, CSS3, Javascript</p>
      </article>
      <article class="art-2">
        <div class="content">

          <img
            src="../assets/logos/vue-logo.png"
            alt="logo vuejs"
          >
          <img
            src="../assets/react-logo.png"
            alt="logo reactjs"
          >
        </div>
        <p>2: Frameworks et librairies Frontend principales: vue, react</p>
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
        <p>3: autres librairies frontend : pinia, vuetify, buefy, bulma, GSAP, Vite etc</p>
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
        <p>4: LG back : Javascript, Java</p>
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
        <p>5: environnement et frameworks: Node.js, Express.js, Docker, Github, Gitlab</p>
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
        <p>6: BDD et ORM: MongoDB, Sequelize, MariaDB, Prisma</p>
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
  /* grid-template-rows: repeat(6, 1fr); */
  grid-template-rows: repeat(6, 20vh);
  grid-gap: 10px;
}
.grid article {
  border: 1px solid #b3aea66a;
  /* background-color: #b3aea6; */
  backdrop-filter: blur(60px);
  padding: 2%;
  box-sizing: border-box;
}

.grid article p {
  align-self: flex-end;
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
  /* max-height: 15vh; */
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
  max-width: 11%;
}
.grid .art-4 .content img {
  max-width: 45%;
  margin: 3% 1.5%;
}
.grid .art-5 .content img {
  max-width: 12.5%;
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
