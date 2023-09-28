<template>
    <NavTopTwo/>
    <NavBottomTwo/>
    <div>


        <div class='main-one'>
            <div>
                <h5>
                    <Icon name="gg:feed" /> Blog
                </h5>
            </div>
        </div>
        <!-- <div class='main-two'>
            <div class='main-two-card'>
                <RouterLink to="/terapias">Todas</RouterLink>
                <RouterLink to="/terapias/acupuntura">Acupuntura</RouterLink>
                <RouterLink to="/terapias/auriculoterapia">Auriculoterapia</RouterLink>
                <RouterLink to="/terapias/ventosaterapia">Ventosaterapia</RouterLink>
                <RouterLink to="/terapias/craniopuntura">Crâniopuntura</RouterLink>
                <RouterLink to="/terapias/formulas">Fórmulas</RouterLink>
            </div>
        </div> -->




        <div class='divider'></div>
        <div class='main-five'>

          <NuxtLink to="/blog/o-que-e-acupuntura" class='main-five-card'>
            <div>
              <img src='~/assets/img/feedSeven.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h4>O que é Acupuntura?</h4>
                <p>Acupuntura consiste na aplicação de agulhas em pontos específicos do corpo, chamados de ‘pontos de acupuntura’ ou ‘acupontos’, ...</p>
            </div>
          </NuxtLink>

          <br>
          <br>
        </div>

    </div>
</template>
<style scoped>
a {
    text-decoration: none;
    color: #fff;
}

i {
    color: #fff;
    font-size: .9em;
    margin: auto;
}

code {
    font-size: 0.6em;
    padding-left: 10px;
    margin-left: 15px;
    margin-right: 60px;
    border-left: solid 5px #e23a28;
    color: #ddd;
}

.divider {
    height: 15px;
    background-color: #860d0d89;
}

.divider-ultimate {
    height: 30px;
    background-color: #860d0d;
}


.main-one {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0px 0 0 0;
    color: #efc289;
    background: #860d0d;
    overflow-x: auto;


}

.main-one i {
    font-size: 1.2em;
    color: #fff;
}

.main-one h5 {
    margin: 10px 0px 22px 10px;
}

.main-two {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    background: #860d0d;
    overflow-x: auto;


}

.main-two i {
    font-size: 1.2em;
    color: #555;
}

.main-two h5 {
    margin: 0 auto 20px auto;
}

.main-two-card {
    margin: -10px 0 10px 10px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

}

.main-two-card a {
    border: solid .1px #dddddd54;
    padding: 2px 6px;
    margin: 10px 4px;
    border-radius: 0% 10% 10% 10%;

    padding: 4px;
    font-size: 14px;
    color: #efc289;
    border: solid .5px #d8d8d840;
    border-radius: 7px;
    transition: all .3s linear;
    background-color: #d8d8d840;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.main-two-card a:hover {
    color: #efc289;
    border: solid 0.5px #e23a28;
    text-shadow: -1px 1px 10px #efc289;
}

.main-two-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-two-card h4 {
    margin: 0 0 0 15px;
    background: #92929240;
    padding: 0px 10px 0px 10px;
    border-radius: 12% 12% 12% 0%;


}

.main-two-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}


.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  padding: 0 0 15px 0;
  color: #fff;
  background-color: #860d0d;
  box-shadow: 0px 10px 5px #e23a28;
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
  margin: 0 10px;
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
  margin: 0px 10px;
  padding: 0px 0 1px 0;
  font-size: 14px;
  color: #ddd;
  border: solid .5px #d8d8d840;
  border-radius: 7px;
  transition: all .3s linear;
    background-color: #d8d8d820;

  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
}

.main-five-card:hover {
  color: #efc289;
    border: solid 0.5px #e23a28;
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