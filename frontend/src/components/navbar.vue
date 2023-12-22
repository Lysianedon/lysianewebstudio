<template>
    <nav>
      <ul>
        <div class="part-one">
          <li class="">
            <a href="#home">Accueil</a>
          </li>
          <li class="menu-mobile" @click="showNavMobile = !showNavMobile">
            <a>Menu</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
        </div>
        <h1 class="title-desktop"><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
        <h1 class="title-tablet"><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
        <h1 class="title-mobile"><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
        <div class="part-two">
          <li>
            <a href="#presentation">A propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="lastlink link-mobile">
          </li>
        </div>
      </ul>
      <header id="header" class="navbar-wrapper" :class="{ 'open-nav': showNavMobile }">
        <button class="close-btn" @click="showNavMobile = false">FERMER</button>
            <div class="nav-bar nav-mobile" :style="{ height: showNavMobile ? '100vh' : '1px' }">
                <ul>
                    <li @click="showNavMobile = false">
                        <a href="#home" class="white">Accueil</a>
                        <a href="#projects">Projets</a>
                        <a href="#technologies">Technologies</a>
                        <a href="#projects">Projets</a>
                        <a href="#presentation">A propos</a>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </header> 
    </nav>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        showNavMobile: false,
      }
    },
    mounted() {
    this.setTitleAnimation();
    window.addEventListener('resize', this.setTitleAnimation);
    },
    methods: {
      setTitleAnimation(){
        const titleDesktop = this.$el.querySelector('.title-desktop');
        const spans = this.$el.querySelectorAll('h1 span');
        const spansMobile = this.$el.querySelectorAll('.title-tablet span');

      const titleMobile = this.$el.querySelector('.title-tablet');

      if (this.tl) {
        this.tl.kill();
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleDesktop,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      tl.fromTo(
        titleDesktop,
        { fontSize: '6em',width: '100%', y: '-115%', position: 'absolute', left: '0', transform: 'translate(-15%, 55%)' },
        { fontSize: 'clamp(13px, 1.5vw, 500px)', width: '25%', left:'40vw', y:'-13', position: 'intial', duration: 1, letterSpacing: '6px', transform: 'translate(-1%, 80%)' }
      );

      if (this.tlSpans) {
        this.tlSpans.kill();
      }
      const tlSpans = gsap.timeline({
        scrollTrigger: {
          trigger: spans,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      tlSpans.fromTo(
        spans,
        {margin: '0 3.5vw'},
        {margin: '0 .7vw'},
      )

      if (this.tlMobile) {
        this.tlMobile.kill();
      }
      const tlMobile =  gsap.timeline({
        scrollTrigger: {
          trigger: titleMobile,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      tlMobile.fromTo(
        titleMobile,
        { fontSize: '9vw',width: '100vw', maxWidth: '100vw', y: '-165', position: 'absolute', left: '0', transform: 'translate(-15%, 55%)' },
        { fontSize: 'clamp(13px, 1.5vw, 100px)', width: '50%', left:'28%', y: '-10', position: 'intial', duration: 1, letterSpacing: '3px' } 
      );

      if (this.tlSpansMobile) {
        this.tlSpansMobile.kill();
      }
      const tlSpansMobile = gsap.timeline({
        scrollTrigger: {
          trigger: spansMobile,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      tlSpansMobile.fromTo(
        spansMobile,
        {margin: '0 5vw'},
        {margin: '0 2vw'},
      )

      
    },
    }
  };
  </script>
  
  <style scoped>
  /* ------ NAV MOBILE -------- */

header {
    display: none;
    z-index: -100;
    top: 0;
    width: 100%;
    position: fixed;
    left: -100%;
    /* top: -100vh; */
    top: 0;
    background-color: #000000e7;
    transition: left 0.5s;
    height: 100vh;
}
header.open-nav {
  left: 0; 
  position: absolute;
  z-index: 1000;
  /* test */
  position: fixed;
  top: 0;
}
header .close-btn{
  position: absolute;
  right: 2vw;
  top: 2vh;
  color: #f5efcb;
  z-index: 1000;
  background-color: transparent;
  border: none;
  font-size: 1.3em;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
}
.nav-bar {
    text-align: center;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
}
header .nav-bar ul {
    padding: 0;
    display: table;
    text-align: center;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
    margin: 0;
    padding: 0;
}
/* NAV LINKS TEXT DECORATION  */
	header .nav-bar ul li a {
    display: block;
    color: #f5efcb;
    width: 100vw;
    letter-spacing: 2px;
    font-size: 23px;
    padding: 20px;
    text-transform: uppercase;
	}
  header .nav-bar ul li a:hover{
     background-color: rgba(138, 137, 137, 0.613);
  }

/* TITLE */
h1 {
  margin: auto;
  display: flex;
  justify-content: center;
  text-wrap: wrap;
  color: black;
  flex-grow: 1;
  transition: all 0.1s ease; 
  }
  .title-tablet, .title-mobile{
    display:none;
  }

  h1 span{
    margin: 0 1.5vw;
    text-wrap: wrap;
  }
  .bold {
    font-weight: 500;
  }
  nav {
    border: none;
    border-bottom: 1px solid rgb(157, 150, 150);
    padding: 20px 5px;
    position: relative;
    background-color: transparent;
    backdrop-filter: blur(15px);
  }
  .menu-mobile{
    display:none;
  }
  .logo {
    width: 80px;
    position: absolute;
    top: 50px;
    left: 50vw;
    border: .1em solid rgba(0, 0, 0, 0.612);
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
  
  nav ul div li {
    text-decoration: none;
    list-style-type: none;
    display: block;
  }
  nav a {
    text-decoration: none;
    font-weight: normal;
    font-family: 'Playfair Display', serif;
    color: black;
  }
  nav ul div li:not(.lastlink) {
    margin: 0 8vw 0 0;
  }
  nav ul div {
    display: flex;
    justify-content: center;
  }
  nav ul .part-one {
    padding: 0 0 0 3%;
  }
  nav ul .part-two {
    padding: 0 4% 0 0;
  }
  /*---------------- RESPONSIVE ---------------- */

  @media(max-width: 1250px) {
    nav ul div li  {
    display: none;
  }
  nav ul div .lastlink,  .menu-mobile {
    display: block;
  }
  .menu-mobile {
    position: absolute;
    left: 3%;
    cursor: pointer;
    bottom: 35px;
    transform: translate(10%, 25%);
  }
  header {
    display: initial !important;
  }
 
  }
@media (max-width: 820px) {
  .title-tablet{
    display: flex;
  }
  .title-desktop{
    display: none;
  }
}
@media (max-width: 480px) {
  nav {
    bottom: 0;
    padding: 5px;
    padding-top: 20px;
  }
  nav ul .part-two .lastlink{
    display: none;
  }
  .title-tablet{
    display: none;
  }
  .title-mobile{
    display: flex;
    font-size: .9em;
    letter-spacing: 1.5px;
    position: absolute;
    bottom: 15px;
    right: 5px;
  }
  .title-mobile span{
    margin: 0 2vw !important;
  }
  .menu-mobile{
    transform: translate(10%, 105%);
    font-size: 15px;
    line-height: 120%;
  }

}
  </style>
  