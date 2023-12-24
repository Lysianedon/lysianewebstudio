<template>
  <div class="homeview">
    <Loader v-if="isLoading"/>
    <div v-if="notification" class="notification">{{ notification }}</div>
    <section class="landing-page" id="home">
      <header>
        <div class="portfolio-block">
          <div class="playfair-font">Portfolio</div>
        </div>
        <div class="year"><span>20</span><div class="line"></div><span>23</span></div>
      </header>
      <h2 class="welcome">Hello, welcome to <span class="tagline-mobile"> my web studio</span></h2>
    </section>
    <Navbar class="navbar"/>
  <div id="presentation" class="presentation">
    <Presentation/>
  </div>
    <div id="technologies" class="technologies">
      <Technologies/>
    </div>
    <div id="projects" class="projets">
      <Projects/>
    </div>
    <div id="contact" class="contact">
      <ContactForm @isLoading=" (loadingState) => isLoading = loadingState" @notification="(payload) => displayNotification(payload)"/>
    </div>
    <div class="footer">
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Presentation from '../components/presentation.vue';
import ContactForm from '../components/contactForm.vue';
import Technologies from '../components/technologies.vue';
import Projects from '../components/projects.vue';
import Footer from '../components/footer.vue';
import Loader from '../components/loader.vue';
export default {
  components: {
    Navbar,
    Presentation,
    ContactForm,
    Technologies,
    Projects,
    Footer,
    Loader,
  },
  data() {
    return {
      notification: null,
      isLoading: false,
    }
  },
  methods: {
    displayNotification(message) {
      if(!message || message.trim() === '') return;
      this.notification = message;
      setTimeout(() => {
        this.notification = null;
      }, 2500);
    }
  }
}
</script>

<style scoped>
/*------------- SECTION 1 : LANDING PAGE ----------- */
.playfair-font{
  font-family: 'Playfair Display', serif;
}
.landing-page{
  height: 96.6vh;
}
.notification{
  z-index: 1000;
  background-color: #c9c3ba;
  font-family: 'Playfair Display', serif;
  color: rgb(73, 72, 72);
  padding: .8% 0;
  text-align: center;
  font-size: 1.3em;
  transition: 0.5ms ease-in-out;
  position: fixed;
  top: 0;
  width: 100vw;
}
header{
  display: flex;
  justify-content: space-between;
  width: 93vw;
  margin: 4vh auto 0 auto;
  font-size: 20px;
  /* border: 2px solid grey; */
}
.navbar{
  position: sticky !important;
  top: 0;
}

.tagline-mobile{
  display: none;
}
.portfolio-block{
  padding: 12px 0 0 0;
  margin: 0 5px 0 0;
}
.year{
  text-align: end;
  align-items: center;
  justify-content: space-evenly;
}
.line{
  border-right: 1px solid black;
  width: 86.5vw;
  margin-left: auto;
  height: 1px;
  background-color: black;
  color: black;
}
.welcome{
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 30vh 0 0 0;
  text-align: center;
}
/* -------------------------------------------------- */

.presentation{
  margin: 40vh 0 25vh 0;
}
.technologies{
  margin: 0vh 0 25vh 0;
}
.projets{
  margin: 0vh 0 25vh 0;
}

  /*---------------- RESPONSIVE ---------------- */

@media(max-width: 1250px){
  .navbarMobile{
display: initial;
}

}

@media(max-width: 768px){
  header{
  width: 95%;
  font-size: 18px;
  }
.line{
  border-right: 1px solid black;
  width: 100%;
  margin-left: 0;
}
.presentation {
  font-size: 1em;
  width: 95vw;
  margin: 10vh 0 0 0;
}
.technologies{
  margin: 0;
}
.projets{
  margin: 0vh 0 13vh 0;
}
}

@media(max-width: 480px) {

  .welcome{
    font-size: 1.2em;
  }
  .tagline-mobile{
    display: block;
    margin: 2vh auto;
    line-height: 150%;
    text-decoration:wavy;
  }
}

</style>


