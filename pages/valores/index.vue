<template>
  <div>
  
    <div class='main-four anima'>
      
        <h5>
          Clique em uma das terapias abaixo!<icon name="material-symbols:fitbit-arrow-downward-sharp" />
        </h5>
      
    </div>
    <div class='main-five anima'>

      <router-link to="/terapias/acupuntura" class='main-five-card'>
        <div>
          <img src='~/assets/img/acuSistemica.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Acupuntura</h4>
            <p>Técnica chinesa milenar, em que os pontos se localizam ao longo de todo o corpo.</p>
        </div>
      </router-link>
    <router-link to="/terapias/auriculoterapia" class='main-five-card'>
        <div>
          <img src='~/assets/img/auriculo.jpg' alt='' class='mini-profile'>
          
        </div>
        <div>
          <h4>Auriculoterapia</h4>
           <p>Técnica de acupuntura que utiliza a orelha para avaliação e tratamento das disfunções.</p>
        </div>
      </router-link>
      <router-link to="/terapias/ventosaterapia" class='main-five-card'>
        <div>
          <img src='~/assets/img/ventosa.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Ventosaterapia</h4>
          <p>Visa eliminar toxinas e retirar estagnações do sangue em determinadas zonas do corpo.</p>
        </div>
      </router-link>
      <router-link to="/terapias/craniopuntura" class='main-five-card'>
        <div>
          <img src='~/assets/img/cranio.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Crâniopuntura</h4>
          <p>Técnica chinesa que trata doenças de origem neural ou visceral, relacionadas com o córtex cerebral.</p>
        </div>
      </router-link>
      <router-link to="/terapias/formulas" class='main-five-card'>
        <div>
          <img src='~/assets/img/formula.jpg' alt='' class='mini-profile'>
        </div>
        <div>
          <h4>Fórmulas Magistrais Chinesas</h4>
         <p>São preparações obtidas a partir de matérias-primas; podem ser usadas de forma isolada ou como complemento da acupuntura ou outra técnica/tratamento;</p>
        </div>
      </router-link>

      <br>
      <br>
    </div>
  </div>
</template>
<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: #aaa;
}

i {
  color: #aaa;
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color: #888;
}

.divider {
  height: 15px;
  background-color: #dddddd54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
  color: black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(3) i {
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow: 4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -30px 0 0 0;
  padding: 0 0 15px 0;
  color: #fff;
  background-color: #860d0d;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-four img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-four i {
  font-size: 1em;
  color: #fff;
}

.main-four h4 {
  margin: 10px 0 0 10px;
  color: #fff;
}

.main-four h5:nth-child(1) {
  margin: 15px auto 5px auto;
  color: #fff;
}

.main-four h5 {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-four div {
  border-radius: 3% 3% 3% 3%;
}

.main-four-card {
  margin: 0px 10px 20px 10px;
  border: solid .1px #dddddd54;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .9em;
}

.main-four .mini-profile {
  height: 6em;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
  background-color: #860d0d;
  overflow-x: auto;
  height: 900px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.main-five a p {
  color: #fff;
}

.main-five img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-five i {
  font-size: 1em;
  color: #fff;
}

.main-five h4 {
  margin: 10px 0 0 10px;
  color: #efc289;
  text-shadow: -1px 1px 10px #efc289;
}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #fff;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: #4fe708;
}

.main-five div {
  border-radius: 3% 3% 3% 3%;
}

.main-five-card {
  margin: 0px 10px 5px 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

  padding: 2px 0 1px 0;
  font-size: 14px;
  color: #ddd;
  border: solid .5px #d8d8d840;
  border-radius: 7px;
  transition: all .3s linear;
    background-color: #d8d8d820;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
}

.main-five-card:hover {
  color: #efc289;
    border: solid 0.5px #ff1900;
    text-shadow: -1px 1px 10px #efc289;
}

.main-five p {
  padding: 0px;
  margin:0px 0 5px 0px;
  font-size: .9em;
}

.main-five .mini-profile {
  height: 6em;
  margin: 10px 5px 0 10px;
  padding: 0 5px 0 0;
}

.mini-profile {
  height: 80px;
  width: 80px;
  margin: 10px 0 0 0px;
  padding: 0 15px 0 0;
}

.dateYear {
  color: #ccc;
  padding: 0 10px 0 10px;
}

.dateYearHover {
  color: #000;
  border-bottom: solid .2px #000;
  padding: 0 10px 0 10px;
}

@media only screen and (max-width: 369px) {}
</style>