<template>
    <section>
       <h1>Technologies</h1>
        <div class="frontend-block main-blocks">
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
                        <!-- <li></li> -->
                    </ul>
            
                </div>
                <div class="sub-category">
                    <h3>Standards et outils</h3>
                    <ul>
                        <li> Webpack</li>
                        <li> Vite</li>
                        <li>HTML5</li>
                        <li> CSS3</li>
                        <!-- <li> i18n</li> -->
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
    width: 100% ;
    overflow-x: hidden;
}
h1{
    text-align: center;
    margin: 0 0 5vh 0;
}
.main-blocks{
    display: flex;
    /* flex-direction: column; */
    align-items: flex-start;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid rgb(182, 151, 151); */
}
.main-blocks h3 {
    font-size: 1.5rem;
    margin: 3rem 0;
    font-family: 'Playfair Display', serif;
}
.frontend-block h2{
    font-family: 'Playfair Display', serif;
    /* border: 1px solid black; */
    width: 53%;
    font-size: 4em;
    padding-left: 2vw;
}
.backend-block{
    padding-right: 2vw;
    /* align-items: end; */
    flex-direction: row-reverse; 
    /* background-color: rgb(73, 71, 71); */
    /* color: white; */
}
.backend-block h2 {
    font-size: 4.5rem;
}
.main-blocks h2 {

    margin: 0;
    letter-spacing: 1px;
}
p {
    margin: 0;
    font-size: 1rem;
}
.sub-categories-container{
    display: flex;
    margin: 3vh 0;
    justify-content: space-evenly;
    width: 60%;
}
.sub-category {
    margin-left: 1rem;
}
ul{
    list-style-type:square;
}
ul li{
    font-size: 1.1rem ;
    line-height: 250%;
}
.divider {
    height: 1px;
    width: 95%;
    background-color: #898989;
    margin: 2rem auto;
}
@media (max-width: 768px) {
    h1{
        font-size: 3.5em;
        text-align: center;
        width: 100%;
        margin: 0 0 15vh 0;
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
    .main-blocks h2 .line{
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
        /* order: 2;  */
        width: 0;
        margin:0; 
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
    .main-blocks h2 .line{
        display: none;
    }

    .sub-category h3{
        text-decoration: underline;
        margin: 0;
    }
}

</style>
