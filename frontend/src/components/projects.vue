<template>
  <section class="project-section">
    <div class="project-navigation">
      <h1><span class="line"></span>Projets <span class="line"></span></h1>
      <ul
        class="project-list"
        v-if="projects && projects.length"
      >
        <li
          v-for="(project, index) in projects"
          :key="index"
          @click="selectProject(index)"
        >
          <span :class="project.name === selectedProject.name ? 'highlight' : null"> N°{{ index + 1 }} - {{ project.name }}</span>
        </li>
      </ul>
    </div>
    <div class="project-container">
      <button
        @click="previousProject"
        class="nav-button"
        v-if="projects && projects.length > 1"
      >Précédent</button>
      <div
        class="project-content"
        v-if="selectedProject"
      >
        <div class="project-img">
          <a
            v-if="selectedProject && selectedProject.readMeImg && selectedProject.readMeImg.length"
            :href="selectedProject.html_url"
            target="_blank"
          >
            <img
              :src="selectedProject.readMeImg[0]"
              alt="gif image of the project"
              class="projectImg"
            >
          </a>
          <p
            v-else
            class=""
          >Aucune image disponible.</p>
        </div>
        <div class="project-details">
          <p class="description">{{ selectedProject.description || 'Aucune description disponible.' }}</p>
          <p>{{ projectDuration }}</p>
          <div class="technical-infos">
            <div class="realisations">
              <h4>Réalisations</h4>
              <ul>
                <li
                  v-for="(mission, index) in selectedProject.missions"
                  :key="index"
                >{{ mission }}</li>

              </ul>
            </div>
            <div class="divider"></div>
            <div class="technos-used">
              <h4>Technologies utilisées</h4>
              <ul>
                <li
                  v-for="(stack, index) in selectedProject.stacks"
                  :key="index"
                >{{ stack }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        v-show="projects && projects.length > 1"
        @click="nextProject"
        class="nav-button"
      >Suivant</button>
    </div>

    <div
      class="see-more"
      v-if="selectedProject"
    >
      <a
        :href="selectedProject.html_url"
        target="_blank"
        class="see-more-button"
      >VOIR</a>
    </div>
    <div
      class="nav-container-mobile"
      v-if="projects && projects.length > 1"
    >
      <button
        @click="previousProject"
        class="nav-button-mobile"
      >Précédent</button>
      <button
        @click="nextProject"
        class="nav-button-mobile"
      >Suivant</button>
    </div>
  </section>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      projects: null,
      selectedProjectIndex: 0
    };
  },
  computed: {
    selectedProject() {
      return (this.projects && this.projects[this.selectedProjectIndex]) || { name: "" };
    },
    projectDuration() {
      const project = this.selectedProject;
      if (!project) return "";
      const createdYear = new Date(project.created_at).getFullYear();
      const pushedYear = new Date(project.pushed_at).getFullYear();
      if (createdYear === pushedYear) {
        return `${createdYear}`;
      }
      return `${createdYear} - ${pushedYear}`;
    }
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const username = "lysianedon";
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        let projects = response.data.filter(
          (p) => p.stargazers_count > 0 && p.name !== "lysianewebstudio"
        );

        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          project.readMeImg = await this.fetchReadmeImages(project.name);
          const name = project.name.split("-").join(" ").trim();
          project.name = name;

          if (project.description && project.description !== "") {
            const [description, accomplishments] = project.description.split(/Réalisations:/);
            project.description = description.trim();

            project.missions = accomplishments
              ? accomplishments.split(",").map((item) => item.trim())
              : [];
          }
          project.stacks = project.topics;
        }
        this.projects = projects;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },

    async fetchReadmeImages(repoName) {
      const username = "lysianedon";
      let readme = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
        headers: { Accept: "application/vnd.github.VERSION.raw" }
      });
      readme = await readme.text();
      const imageRegex = /!\[.*?\]\((.*?)\)/g;
      const urls = [];
      let match;
      while ((match = imageRegex.exec(readme)) !== null) {
        urls.push(match[1]);
      }
      return await Promise.all(urls);
    },
    selectProject(index) {
      this.selectedProjectIndex = index;
    },
    previousProject() {
      this.selectedProjectIndex > 0
        ? (this.selectedProjectIndex -= 1)
        : (this.selectedProjectIndex = this.projects.length - 1);
    },
    nextProject() {
      this.selectedProjectIndex < this.projects.length - 1
        ? (this.selectedProjectIndex += 1)
        : (this.selectedProjectIndex = 0);
    }
  }
};
</script>
  
<style scoped>
.project-section {
  text-align: center;
  width: 95vw;
  margin: auto;
  min-height: 80vh;
}
h1 {
  line-height: 100%;
  text-align: start;
}
.nav-container-mobile {
  display: none;
}
.project-navigation h1 {
  margin-bottom: 0.5em;
}
.project-list {
  list-style: none;
  text-align: end;
  padding: 0;
  margin: 0 0 6vh 0;
  /* border: 1px solid black; */
  width: 83vw;
  max-width: 1550px;
}
.project-list li {
  cursor: pointer;
  margin: 0.5em 0;
  transition: all ease-in 1s;
}
.project-list .highlight {
  color: #b3aea6;
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
  transition: all ease-in 150ms;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  max-width: 1550px;
  margin: auto;
}
.project-content {
  display: flex;
  align-items: center;
  flex-grow: 1;
  border: 1px dotted #898989;
  width: 50%;
  margin: 0 2em;
}
.project-img {
  border-right: 1px dotted #898989;
  width: 50%;
  padding: 0;
  margin: 0;
}
.project-container .project-details {
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: "Playfair Display", serif;
}
.project-container .project-details p {
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px dotted #898989;
  padding-bottom: 20px;
}
.project-container .project-details .description {
  margin: -40px auto 0 auto;
  max-height: 50px;
  line-height: 160%;
  padding: 0.6em 0 1em 0;
}

.project-container .project-details .technical-infos {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: stretch;
}
.project-container .project-details .technical-infos .technos-used,
.project-container .project-details .technical-infos .realisations {
  width: 50%;
  max-width: 50%;
}
.project-container .project-details .technical-infos ul li {
  line-height: 210%;
  list-style-type: square;
}
.project-container .project-details .technical-infos .divider {
  flex: 0 0 1px;
  width: 100px;
  flex-shrink: 0;
  padding: 0 2% 0 1%;
  border-right: 1px dotted #898989;
  min-height: 250px;
  height: 100%;
}
.projectImg {
  max-width: 100%;
}
.nav-button,
.nav-button-mobile {
  background: none;
  border: none;
  font-size: 1rem;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  border-top: 1px solid black;
  color: black;
  padding-top: 15px;
}
.nav-button:hover {
  color: #b3aea6;
  border-top: 1px solid #b3aea6;
}
.see-more {
  margin-top: 1.4em;
}
.see-more-button {
  position: relative;
  text-decoration: none;
  background-color: transparent;
  padding: 40px;
  color: black;
  border-radius: 50%;
  border: none;
  letter-spacing: 1px;
  font-size: 2.2em;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s;
}
.see-more-button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 0;
  height: 1px;
  background-color: rgba(16, 16, 16, 0.483);
  transition: width 0.3s ease;
}
.see-more-button:hover::after {
  width: 100%;
}

/*---------------- RESPONSIVE ---------------- */
@media (min-width: 1500px) {
  .divider {
    margin: 4% auto 0 auto;
  }

  ul li {
    list-style-type: none;
  }
}
@media (max-width: 1200px) {
  .see-more {
    margin: 2.2em auto;
    font-size: 0.9em;
  }
  .nav-container-mobile {
    display: flex;
    justify-content: end;
  }
  .nav-button-mobile {
    margin: 0 1em;
    border: 1px solid grey;
    border-radius: 25px;
    padding: 0.5em 2em;
  }
  .nav-button {
    display: none;
  }
  .project-container .project-details .description {
    margin: 0 auto;
  }
}
@media (max-width: 900px) {
  h1 {
    text-align: center;
  }
  .project-container {
    flex-direction: column;
    border-left: 1px dotted #898989;
    width: 100%;
  }
  .project-list {
    width: 92vw;
  }
  .project-content {
    flex-direction: column;
    width: 100%;
  }
  .project-details {
    flex: 0 0 auto;
    width: 100% !important;
    border-left: none;
    margin: 0;
    padding: 0;
  }
  .project-img {
    flex: auto;
    width: 100%;
    flex: 0 0 auto;
    cursor: pointer;
    border-right: none;
  }
  .nav-button-mobile {
    margin: 0 auto;
  }
}
/* -------TABLET MODE-------  */
@media (max-width: 768px) {
  .project-container {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }
  .project-container .project-details p {
    margin-bottom: 10px;
    width: 100%;
    border-bottom: 1px dotted #898989;
    padding-bottom: 20px;
  }

  .project-content {
    margin: 0;
  }
  .project-img {
    margin: 0 auto;
    padding: 0 0 0 0.7em;
    flex: 0 0 45%;
    margin: 0;
    padding: 0;
  }
  .project-details {
    flex: 0 0 55%;
  }
  .see-more-button::after {
    display: none;
  }
}
</style>
  