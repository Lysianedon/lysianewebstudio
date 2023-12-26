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
        </div>
        <div class="project-details">
          <p class="description">{{ selectedProject.description || 'Aucune description disponible.' }}</p>
          <p>{{ projectDuration }}</p>
          <div class="technical-infos">
            <div>
              <h4>Réalisations</h4>
              <ul>
                <li
                  v-for="(mission, index) in selectedProject.missions"
                  :key="index"
                >{{ mission }}</li>

              </ul>
            </div>
            <div class="divider"></div>
            <div>
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
        v-if="projects && projects.length > 1"
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
      // Extract the years from the dates
      const createdYear = new Date(project.created_at).getFullYear();
      const pushedYear = new Date(project.pushed_at).getFullYear();
      // Check if the years are the same, if so, return just one year
      if (createdYear === pushedYear) {
        return `${createdYear}`;
      }
      // If the years are different, return the range
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
        const repositories = await axios.get(`https://api.github.com/users/${username}/repos`);
        this.projects = repositories.data;
        const projects = repositories.data.filter(
          (p) => p.stargazers_count > 0 && p.name !== "lysianewebstudio"
        );
        this.projects = projects;
        for (let i = 0; i < this.projects.length; i++) {
          this.projects[i].readMeImg = await this.fetchReadmeImages(this.projects[i].name);
          const name = this.projects[i].name.split("-").join(" ").trim();
          this.projects[i].name = name;
          this.projects[i].missions = this.projects[i].description?.split("Réalisations:")[1];
          this.projects[i].description = this.projects[i].description?.split("Réalisations:")[0];
          this.projects[i].missions = this.projects[i].missions?.split(",");
          this.projects[i].stacks = this.projects[i].topics;
        }
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
  /* font-family: 'Playfair Display', serif; */
  text-align: center;
  width: 95vw;
  margin: auto;
  min-height: 80vh;
}
h1 {
  line-height: 100%;
  text-align: start;
}

.project-name {
  text-align: left;
  font-size: 5vw;
  color: #b3aea6;
  line-height: 100%;
  transition: all ease-in 150ms;
  font-family: "Playfair Display", serif;
}
.nav-container-mobile {
  display: none;
}
.project-content {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.project-navigation h1 {
  margin-bottom: 0.5em;
}

.project-list {
  list-style: none;
  text-align: end;
  padding: 0;
  margin: 0 0 6vh 0;
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
  /* border-left: 1px dotted #898989; */
}
.project-container .project-details .description {
  margin: 0 auto;
  line-height: 170%;
  padding: 0.6em;
}
.project-container .project-details p {
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px dotted #898989;
  padding-bottom: 20px;
}

.project-container .project-details .technical-infos {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  align-items: stretch;
}

.project-container .project-details .technical-infos ul li {
  line-height: 210%;
}
.project-container .project-details .technical-infos .divider {
  /* height: 100%; */
  flex: 0 0 1px;
  width: 100px;
  flex-shrink: 0;
  /* height: 300px; */
  padding: 0 4%;
  border-right: 1px dotted #898989;
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
  padding-top: 15px;
}
.nav-button:hover,
.nav-button-mobile:hover {
  color: #b3aea6;
  border-top: 1px solid #b3aea6;
}

.see-more {
  margin-top: 5em;
}

/* .see-more-button {
    text-decoration: none;
    background-color: #b3aea63b;
    padding: 40px;
    color: black;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.3s ease;
    display: inline-block; 
    transform: scale(.9); 
  }

  .see-more-button:hover {
  transform: scale(1.2); 
} */

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
@media (max-width: 900px) {
  h1 {
    text-align: center;
  }
  .project-container {
    flex-direction: column;
    width: 100%;
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
  }
  .nav-container-mobile {
    display: initial;
    display: flex;
    justify-content: end;
  }
  .nav-button-mobile {
    margin: 0 1em;
    border: 1px solid grey;
    border-radius: 25px;
    padding: 0.5em 2em;
  }
  .nav-button-mobile {
    margin: 0 auto;
  }
  .nav-button {
    display: none;
  }
  .see-more {
    margin: 2em auto;
    font-size: 0.9em;
  }
}

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
    border: none;
    margin: 0 auto;
    padding: 0 0 0 0.7em;
    flex: 0 0 45%;
  }
  .project-details {
    border-left: 1px dotted #b3aea6;
    flex: 0 0 55%;
  }
  .see-more-button::after {
    display: none;
  }
}
</style>
  