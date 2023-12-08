<template>
    <nav>
      <ul>
        <div class="part-one">
          <li class="">
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li class="lastlink">
            <a href="#projects">Projets</a>
          </li>
        </div>
        <h1><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
        <!-- <img src="../assets/logo-1-small.png" alt="logo" class="logo" /> -->
        <div class="part-two">
          <li>
            <a href="#about">A propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="lastlink">
            <span class="bold">
              FR
            </span>
            |
            <span             
              >EN</span
            >
          </li>
        </div>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    mounted() {
      const title = this.$el.querySelector('h1');
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      tl.fromTo(
        title,
        { fontSize: '24vw',width: '135vw', y: '-600', position: 'absolute', left: '-7vw', transform: 'translate(-15%, 15%)' },
        { fontSize: '1vw', width: '25%', left:'40vw', y: '1', position: 'intial', duration: 1, letterSpacing: '6px', transform: 'translate(-1%, 80%)' }
      //   { fontSize: '7vw', y: '-50vh', position: 'absolute', left: '38%', top: '33%', width: '100%', transform: 'translateX(-50%)' },
      // { fontSize: '1.4rem', y: '0', position: 'initial' }
      );
    },
  };
  </script>
  
  
  <style scoped>

h1 {
  margin: auto;
  display: flex;
  justify-content: space-around;
  letter-spacing: 12px;
  text-wrap: nowrap;
  color: black;
  top: 33%;
  /* border: 1px solid black; */
  flex-grow: 1;
  width: 0;
  /* justify-items: stretch; */
  }

  h1 span{
    display: block;
    margin: 0 1.5vw;
    /* border: 1px solid red;  */
  }
  .bold {
    font-weight: 500;
  }
  nav {
    border: none;
    border-bottom: 1px solid rgb(157, 150, 150);
    padding: 20px 20px 20px 20px;
    position: relative;
    background-color: transparent;
    backdrop-filter: blur(15px);
  }
  .logo {
    /* width: 5.5vw; */
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
  }
  nav ul .part-one {
    padding: 0 0 0 3%;
  }
  nav ul .part-two {
    padding: 0 4% 0 0;
  }
  </style>
  