<template>
  <div class='nav-two'>
    <div>
      <div>
        <a @click="$router.go(-1)"><i class="fas main-l fa-arrow-left"></i></a>
      </div>
      <div>
        <nuxt-link to=""><i class="fa-solid fa-share-nodes"></i></nuxt-link>
        <nuxt-link to=""><i class="fa-solid fa-bars"></i></nuxt-link>
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
  box-shadow: 0px .5px 5px #ff190050;
  z-index: 10;
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
}

.nav-two i {
  color: #dbd1d1;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
