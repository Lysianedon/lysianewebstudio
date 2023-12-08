<template>
  <footer class="footer">
    <nav class="footer-nav">
      <div class="footer-menu-group">
        <ul class="footer-menu">
          <li><a href="#projects">Projets</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>
      <div class="footer-menu-group">
        <ul class="footer-menu">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#social-media">Réseaux sociaux</a></li>
        </ul>
      </div>
    </nav>
    <div class="divider"></div>
    <div class="footer-copy">
      © Lysiane D.
    </div>
  </footer>
</template>

  <script></script>
  <style scoped>
  .footer {
    background-color: #333;
    font-family: 'Playfair Display', serif;
    color: #fff;
    padding: 2vh 0 1.5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
nav {
    max-width: 2000px;
    display: flex; 
    justify-content: space-around; 
    margin: auto;
    width: 90%;
    padding: 0vh 0 1vh 0;
  }
  .footer-menu-group{
    width: 100%;
  }
  .footer-menu {
    list-style: none;
    max-width: 960px; 
    margin: auto;
    display:flex;
    justify-content: space-around;
  }

.footer-menu li a {
    color: #fff;
    text-decoration: none;
    line-height: 150%;
  }
  .divider{
    width: 100%;
    border-top: 1px solid #ffffff5e;
    padding: 5px 0;
  }
  .footer-copy {
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
  .footer-menu {
    flex-direction: column;
  }
  .footer-menu li a {
    line-height: 260%;
  }

  }
  </style>
  