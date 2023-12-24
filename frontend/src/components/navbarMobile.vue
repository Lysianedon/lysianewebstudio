<template>
    <nav>
      <ul>
          <li class="menu-button" @click="showNavMobile = !showNavMobile">
            <a>Menu</a>
          </li>
        <h1><span>LYSIANE'S</span><span> WEB</span><span> STUDIO</span></h1>
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
    data(){
        return {
            showNavMobile: false,
        }
    }
}
</script>
<style scoped>
  h1{
    display: flex;
    font-size: .9em;
    letter-spacing: 1.5px;
    /* position: absolute; */
    bottom: 15px;
    right: 5px;
  }
  h1 span{
    margin: 0 2vw !important;
  }

header {
    z-index: -100;
    top: 0;
    width: 100%;
    position: fixed;
    left: -100%;
    display: hidden;
    /* top: -100vh; */
    top: 0;
    background-color: #000000e7;
    transition: left 0.5s;
    height: 100vh;
    display: none;
}
header.open-nav {
  left: 0; 
  position: absolute;
  z-index: 1000;
  /* test */
  position: fixed;
  display: initial;
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

  .menu-button {
    cursor: pointer;
  }

  nav {
    bottom: 0;
    padding: 5px;
    padding-top: 20px;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
    border: 2px solid green;
  }

</style>