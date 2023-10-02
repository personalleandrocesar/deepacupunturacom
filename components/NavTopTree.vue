<script setup>
import { ref } from 'vue'

const menu = ref(false);
const missao = ref(false);
const missaoOne = ref(true);
const profissionais = ref(false);
const profissionaisOne = ref(true);
function openMenu() {
  menu.value = !menu.value
}
function openMissao() {
  missao.value = !missao.value
  profissionais.value = false
}
function switchMissao() {
  missaoOne.value = !missaoOne.value
}
function openProfessional() {
  profissionais.value = !profissionais.value
  missao.value = false
}
function switchProfissionais() {
  profissionaisOne.value = !profissionaisOne.value
}
</script>
<template>
  <div class="bar">
    
    <div class='nav-one'>

      <a @click="$router.go(-1)"><Icon name="tabler:arrow-big-left-lines-filled" /></a>
    
      <NuxtLink @click="openMenu">
        <Icon name="fa6-solid:bars-staggered" />
      </NuxtLink>
    

    </div>

    <div v-if="menu" class="menuMain">
      <div class="nav-two">

        <div>
          <nuxt-link @click="openMenu" class="button">

            <Icon name='material-symbols:cancel-rounded' />

          </nuxt-link>

        </div>
      </div>

      <div class="nav-tree">

        <NuxtLink @click="openMissao">
          Missão
          <Icon name='material-symbols:keyboard-arrow-down-rounded' />
        </NuxtLink>
        <div class="conteudos">
          <div v-if="missao">

            <div>
              <Icon @click='switchMissao' name='material-symbols:arrow-back-ios-rounded' />
            </div>

            <div v-if="missaoOne">
              Garantir acesso à todos, à Terapias complementares e alternativas, segundo a Medicina Tradicional Chinesa.
            </div>
            <div v-else="missaoTwo">
              Pomover o equilíbrio energético do corpo, estimular a capacidade de autocura e tratar uma variedade de
              condições de saúde.
            </div>

            <div>
              <Icon @click='switchMissao' name='material-symbols:arrow-forward-ios-rounded' />
            </div>

          </div>
        </div>

        <NuxtLink to="profissionais" class="degrau">
          <div>
            Profissionais

          </div>
          <Icon name='material-symbols:keyboard-arrow-down-rounded' />
        </NuxtLink>
        <NuxtLink to="deep" class="degrau">
          <div>
            Deep Acupuntura

          </div>
          <Icon name='material-symbols:keyboard-arrow-down-rounded' />
        </NuxtLink>


      </div>
      <div class="nav-four">
        <div></div>
        <div></div>
        <div>
          2022-2023 - <NuxtLink to="/">deepacupuntura.com</NuxtLink>- CNPJ: 40.930.118/0001-33

        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.bar {
  height: 35px;
  position: sticky;
  top: 0px;
  background: #860d0d;
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
  box-shadow: 0px .5px 5px #ff190020;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: 0px;
  background: #860d0d;
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
}

.nav-one div {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  cursor: pointer;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
  color: #ff1900;
}

.nav-one i {
  color: #dbd1d1;
  margin-top: 8px;
  justify-content: flex-end;
  display: flex;
}

.nav-one {
  display: flex;
  justify-content:space-between;
}

.menuMain {
  bottom: 0px;
  top: 0px;
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  background-color: #860d0d;
}

.nav-two {
  height: 35px;
  position: sticky;
  top: -1px;
  background: #860d0d;
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
}

.nav-two div {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.nav-two a {
  text-decoration: none;
  cursor: pointer;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
  color: #ff1900;
}

.nav-two i {
  color: #dbd1d1;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.nav-two div {
  display: flex;
  justify-content: flex-end;
}


.nav-tree {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.nav-tree a {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2em;
  color: #efc289;
  text-transform: uppercase;
  margin: 35px 0 0 0;
}


.conteudos {
  margin: 0 5px;
  color: #fff;
  text-align: justify;
  font-size: .9em;
  text-decoration: none;
}

.conteudos div {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin: 0 10px
}

.conteudos .icon {
  cursor: pointer;
  color: #ff1900;
}

a:nth-child(5) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.degrau .icon {
  rotate: -120deg;
}

.nav-four {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  font-size: .8em;
  color: #fff;
  position: fixed;
  bottom: 20px;
  width: 278.92px;
  left: 50%;
  margin-left: -139.46px;
}

.nav-four div {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  font-size: .8em;
  color: #fff;
  text-align: center;
}


.nav-four a {
  font-size: 1.1em;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0 3px;
}
</style>
