<template>
    <section>
      <div class="contact-container">
        <h1>Restons en <span>contact.</span> </h1>
        <p>Un projet ou une question en tête ?</p>
        <p>Discutons-en ensemble.</p>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nom et prénom*</label>
            <input type="text" id="name" v-model="form.name" @click="callServer">
          </div>
          <div class="form-group">
            <label for="company">Entreprise</label>
            <input type="text" id="company" v-model="form.company">
          </div>
          <div class="form-group">
            <label for="email">Email*</label>
            <input type="email" id="email" v-model="form.email">
          </div>
          <div class="form-group">
            <label for="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" v-model="form.phoneNumber">
          </div>
          <div class="form-group">
            <label for="subject">Objet</label>
            <input type="text" id="subject" v-model="form.subject">
          </div>
          <div class="form-group">
            <label for="message">Message*</label>
            <textarea id="message" v-model="form.message"></textarea>
          </div>
          <button type="submit" :class="valid ? 'submit-btn' : 'disabled-btn'" :disabled="!valid" @click="valid ? submitForm : null">Envoyer</button>
        </form>
      </div>
      <div class="social-links">
    <h2>RESTONS <span class="line"></span> CONNECTÉS</h2>
    <div class="icons">
      <a href="https://github.com" class="icon-container">
        <img width="41" height="41" src="https://img.icons8.com/material/48/github.png" alt="github"/><span>GitHub </span>
      </a>
      <a href="https://linkedin.com" class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/material/48/linkedin--v1.png" alt="linkedin--v1"/><span>Linkedin</span>
      </a>
      <a href="https://instagram.com" class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/material/48/instagram-new--v1.png" alt="instagram-new--v1"/><span>Instagram</span>
      </a>
    </div>
    <div class="icons-mobile">
      <a href="https://github.com" class="icon-container">
        <img width="31" height="31" src="https://img.icons8.com/material/48/github.png" alt="github"/><span>GitHub </span>
      </a>
      <a href="https://linkedin.com" class="icon-container">
        <img width="31" height="31" src="https://img.icons8.com/material/48/linkedin--v1.png" alt="linkedin--v1"/><span>Linkedin</span>
      </a>
      <a href="https://instagram.com" class="icon-container">
        <img width="31" height="31" src="https://img.icons8.com/material/48/instagram-new--v1.png" alt="instagram-new--v1"/><span>Instagram</span>
      </a>
    </div>
  </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        form: {
          name: null,
          company: null,
          email: null,
          phoneNumber: null,
          subject: "Demande de rdv",
          message: null,
        }
      };
    },
    computed: {
      valid() {
        const { name, email, phoneNumber, subject, message } = this.form;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phoneRegex = /^\+?\d{10,15}$/;

        const isNameValid = name?.trim() !== '';
        const isEmailValid = email && emailRegex.test(email);
        const isPhoneValid = phoneNumber ? phoneRegex.test(phoneNumber) : true; 
        const isMessageValid = message && message.trim() !== '';
        const isSubjectValid = subject ? subject.trim() !== '' : true;

        return isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid;
      }
  },
  async mounted() {
    this.callServer();
  }, 
  methods: {
    async callServer() {
      await axios.get('/health');
    },
    async submitForm() {
      if (!this.valid) return;
      try {
        await axios.post('/send-email', this.form);
        this.form.message = null;
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    }
},


  };
  </script>
  
  <style scoped>
  h1 {
  
  color: #b3aea6;
  line-height: 100%;
}
h1 span {
    display:block;
}
p{
  text-align: center;
  font-size: 1.1rem;
  font-family: 'Playfair Display', serif;
}

p:nth-of-type(2) {
  margin: 0 0 6vh 0;
}
form{
    width: 80%;
    max-width: 800px;
    margin: auto;
    /* padding: 2vh 2vw; */
    /* border: 1px solid grey; */
}
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-size: 1.25em;
    margin-bottom: .5em;
  }
  
  input, textarea {
    width: 100%;
    padding: .75rem 0;
    border: none;
    border-bottom: 1px solid #6f6c6c;
    background-color: transparent;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  textarea{
    min-height: 130px;
    max-width: 100%;
    padding: 10px 25px 20px 10px;
    box-sizing: border-box;
  }
  input:focus, textarea:focus {
    outline: none;
    border-bottom-color: #908f8f;
  }
  
  .submit-btn, .disabled-btn {
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: none;
    /* border-radius: 3px; */
    background-color: #333;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 2px;
    transition: background-color 0.3s ease;
  }
  .submit-btn:hover {
    background-color: #555;
  }
  .disabled-btn{
    background-color: #737171;
  }

  /* SOCIAL LINKS */
  .social-links {
  text-align: center;
  margin-top: 20vh;
}

.social-links h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  width: 40%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-links .line {
  flex-grow: 1;
  height: 1px;
  background: #000;
  margin: 0 40px;
  min-width: 130px;
  width: 15vw;
  max-width: 470px;
}


.social-links .icons-mobile{
    display: none;
  }

.icons {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  text-decoration: none;
  color: inherit;
}
.icon-container span {
  display: block;
  margin: 0 0 3px 15px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  form{
    width: 90%;
  }
  p:nth-of-type(2) {
  margin: 0 0 10vh 0;
  }
  .form-group {
    margin-bottom: .6rem;
  }
  
  label {
    font-size: 1.1em;
  }
  textarea{
    min-height: 100px;
  }
  .social-links {
  margin-top: 15vh;
}
.social-links h2 {
  font-size: 1em;
  width: 100%;
  margin: 0 auto 5vh auto;
}
.social-links .line {
  margin: 0 10px;
  width: 50px;
  min-width: 90px;
  max-width: 470px;
}
.icons {
  margin-top: 20px auto;
}
.icon-container {
  margin: 5px 0;
}
.icon-container span {
  margin: 0 0 3px 15px;
  font-size: 1.1rem;
}
}
@media(max-width: 425px) {
  .social-links .icons{
    display: none;
  }
  .social-links .icons-mobile{
    display: initial;
  }
  .social-links h2 {
  width: 88%;
}
}

  </style>
  