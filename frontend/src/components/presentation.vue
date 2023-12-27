<template>
  <section>
    <h1>Présentation</h1>
    <div class="presentation">
      <h2 class="playfair-font">Je suis Lysiane, développeuse web fullstack spécialisée en Javascript. Je crée des projets intuitifs et performants, avec chaque ligne de code visant à améliorer l'expérience utilisateur.</h2>
      <h2 class="playfair-font">Inspirée par les créateurs de
        <a
          href="https://www.notion.so/fr-fr"
          target="_blank"
          rel="noopener noreferrer"
        >Notion</a>, je m'applique à rendre le complexe simple et agréable. Pour une vision détaillée de mon travail, <a
          :href="cvLink"
          download="CV_Lysiane_DON.pdf"
          class="download-link"
        >téléchargez mon CV ici</a>.
      </h2>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cvLink: new URL("../assets/CV-FRENCH.pdf", import.meta.url).href
    };
  }
};
</script>
  <style scoped>
section {
  min-height: 70vh;
  padding: 0 2vw;
  font-family: "Playfair Display", serif;
  width: 93vw;
  max-width: 100vw;
  margin: auto;
  overflow-x: hidden;
}
h1 {
  font-family: "Oswald", sans-serif;
  text-align: end;
  color: #b3aea6;
  line-height: 70%;
}
.presentation {
  width: 60vw;
  margin: 27vh 0 0vh 0;
}
.presentation h2 {
  text-align: justify;
  line-height: 300%;
  font-size: 1.2rem;
}

.download-link {
  color: black;
  font-size: 1em;
  letter-spacing: 1px;
  font-family: "Oswald", sans-serif;
  font-weight: 100;
  text-decoration: underline;
  text-underline-offset: 4px;
}

h2 a {
  color: black;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  font-weight: 100;
}

@media (max-width: 768px) {
  section {
    padding: 0 3vw;
    min-height: 55vh;
  }
  .presentation {
    width: 100%;
    margin: 10vh 0 0vh 0;
  }
  h1 {
    font-size: 3.5em;
  }
  .presentation h2 {
    line-height: 265%;
    font-size: 1em;
    margin: auto;
  }
}
</style>
  