<script setup>
import { ref } from 'vue'

const menu = ref(false);
function openMenu() {
  menu.value = !menu.value
}
</script>
<template>
  <div class='nav-two'>
    <div>

      <div>
  <a @click="$router.go(-1)"><Icon name="tabler:arrow-big-left-lines-filled"/></a>
      </div>
      <div>
        <NuxtLink @click="openMenu">
          <Icon name="fa6-solid:bars-staggered" />
        </NuxtLink>
      </div>

    </div>

      <div v-if="menu" class="menuMain">

        <div></div>  
        <div> 
          <nuxt-link @click="openMenu" class="button">
          
            <Icon name='material-symbols:cancel-rounded'/>
        
          </nuxt-link>
        </div>
      </div>
    </div>
</template>
<style scoped>
.nav-two {
  height: 35px;
  position: sticky;
  top: -1px;
  background: #860d0d;
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
   box-shadow: 0px .5px 5px #ff190020;
}

.nav-two div {
  display: flex;
  justify-content: space-between;
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

.menuMain {
  bottom: 0px;
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  background-color: #860d0d;
}

.menuMain i {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}
</style>
