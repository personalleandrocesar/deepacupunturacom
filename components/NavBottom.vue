<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}

</script>
<template>
  <div>
    <div class="nav-bottom">
      <NuxtLink to='/terapias' @click.native="scrollToTop()">
        <Icon name="mingcute:yinyang-fill" />
        <h5>TERAPIAS</h5>
      </NuxtLink >
      <NuxtLink to='/blog' @click.native="scrollToTop()">
        <Icon name="gg:feed" />
        <h5>BLOG</h5>
      </NuxtLink >
      <NuxtLink to='/local' @click.native="scrollToTop()">
        <Icon name="mdi:map-marker-radius" />
        <h5>LOCAL</h5>
      </NuxtLink >
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

/*
  background-color: #6a0707;
  background-color: #860d0d;
*/

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
  color: #fff;
}
</style>