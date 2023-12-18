<script setup>
const route = useRoute()
const choose = useCookie('choose')
choose.value = choose.value


const vTerapy = ''
const nTerapy = ''
const f = () => {
  if (choose.value === 1 || choose.value === 2) {
    vTerapy = true    
    nTerapy = false
  } 
}
const fg = () => {
  if (choose.value === 0) {
    vTerapy = false    
    nTerapy = true
  } 
}
const zero = () => {
  choose.value = 0
}

console.log(choose.value);


const scrollToTop =() => {
  window.scrollTo(0, 0);
}

</script>
<template>
  <div>
    <div class="nav-bottom">
      <NuxtLink :class="{ noActive: nTerapy }" to='/' >
        <Icon name="material-symbols:home-rounded" />
        <h5>INÍCIO</h5>
      </NuxtLink >
      <NuxtLink :class="{ active: vTerapy }" to='/terapias' >
        <Icon name="mingcute:yinyang-fill" />
        <h5>TERAPIAS</h5>
      </NuxtLink >
      <NuxtLink :class="{ noActive: nTerapy }" to='/blog' >
        <Icon name="gg:feed" />
        <h5>BLOG</h5>
      </NuxtLink >
      <NuxtLink :class="{ noActive: nTerapy }" to='/local' >
        <Icon name="mdi:map-marker-radius" />
        <h5>LOCAL</h5>
      </NuxtLink >
      <!-- <NuxtLink to='/sobre' @click.native="scrollToTop()">
        <Icon name="healthicons:ambulatory-clinic" />
        <h5>SOBRE</h5>
      </NuxtLink > -->
    </div>
  </div>
</template>

<style scoped>
h5 {
  margin: 9px 0 13px 0;
  font-size: .6em;
}

i {
  font-size: 1.1em;
}

.nav-bottom {
  position: fixed;
  bottom: .1px;
  width: 100%;
  background-color: #860d0d;
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  line-height: 0;
  border-radius: 10% 10% 0% 0%;
  box-shadow: 0px .5px 5px #ff190090;
  z-index: 100;
}

.nav-bottom div {
  cursor: pointer;
}

.nav-bottom div h5 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}

.nav-bottom a {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #ffffff80;
  font-size: .9em;
  margin: 10px 0 0px 0;
}

.nav-bottom a:hover i {
  color: #ffffff;
}

.nav-bottom a.router-link-exact-active {
  color: #efc289;
}

.nav-bottom .active {
  color: #efc289;
}
.nav-bottom .noActive {
  color: #efc289;
}
</style>