<template>
    <nav>
      <ul>
        <div class="part-one">
          <li class="">
            <a href="#home">Accueil</a>
          </li>
          <li class="menu-mobile">
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
        <h1 class="title-mobile"><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
        <!-- <img src="../assets/logo-1-small.png" alt="logo" class="logo" /> -->
        <div class="part-two">
          <li>
            <a href="#presentation">A propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li class="lastlink link-mobile">
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
    this.setTitleAnimation();
    window.addEventListener('resize', this.setTitleAnimation);
    },
    methods: {
      setTitleAnimation(){
        const titleDesktop = this.$el.querySelector('.title-desktop');
        const spans = this.$el.querySelectorAll('h1 span');
        const spansMobile = this.$el.querySelectorAll('.title-mobile span');
        console.log("spansMobile", spansMobile);

      const titleMobile = this.$el.querySelector('.title-mobile');

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
        { fontSize: 'clamp(13px, 1.5vw, 500px)', width: '25%', left:'40vw', y:'-3', position: 'intial', duration: 1, letterSpacing: '6px', transform: 'translate(-1%, 80%)' }
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
        { fontSize: 'clamp(13px, 1.5vw, 100px)', width: '50%', left:'28%', y: '1', position: 'intial', duration: 1, letterSpacing: '3px' } 
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
h1 {
  margin: auto;
  display: flex;
  justify-content: center;
  text-wrap: wrap;
  color: black;
  flex-grow: 1;
  transition: all 0.1s ease; 
  /* border: 1px solid black; */
  }
  .title-mobile{
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

  @media(max-width: 1250px) {
    nav ul div li  {
    display: none;
  }
  nav ul div .lastlink,  .menu-mobile {
    display: block;
  }
  nav{
    position: relative;
  }
  .menu-mobile {
    position: absolute;
    left: 3%;
    bottom: 40px;
    transform: translate(10%, 25%);
  }
  }
@media (max-width: 820px) {
  .title-mobile{
    display: flex;
    /* border: 1px solid green; */
  }
  .title-desktop{
    display: none;
  }
}
@media (max-width: 480px) {
  nav ul .part-two .lastlink{
    display: none;
  }
  .menu-mobile{
    transform: translate(10%, 105%);
    font-size: 15px;
  }
}
  </style>
  