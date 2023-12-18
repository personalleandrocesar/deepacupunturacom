<script setup>

const choose = useCookie('choose')
choose.value = choose.value


const terapy = () => {
    choose.value = 1
}
const valory = () => {
    choose.value = 2
}

const vTerapy = ref(false)

const vValory = ref(true)

console.log(choose.value);


const d = () => {
    if (choose.value === 1) {
        vTerapy = true
        vValory = false
    }
    if (choose.value === 2) {
        vTerapy = false
        vValory = true

}}

</script>

<template>
        <div  class="anima">


            <div class='main-tree'>
                <div  >
                    <NuxtLink :class="{ active: vTerapy }" @click="terapy()"  to="/terapias"><Icon name="mingcute:yinyang-fill"/> Terapias</NuxtLink>
                </div>
                <div>
                    <NuxtLink :class="{ active: vValory }"  @click="valory()" to="/valores"><Icon name="mingcute:receive-money-fill"/> Valores</NuxtLink>
                </div>
            </div>
        <div class='main-four'>
            <div class='main-four-card'>
                <NuxtLink to="/valores">Destaques</NuxtLink >
                <NuxtLink to="/valores/acupuntura">Pacotes</NuxtLink >
                    <NuxtLink to="/valores/auriculoterapia">Assinatutas</NuxtLink >
            </div>
        </div>




        <div class='divider'></div>


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
    border-left: solid 5px #ff1900;
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

.profile {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 20px 0 5px 0;
    margin-top: -10px;
}

.profile a {
    text-decoration: none;
    color: #fff;
    font-size: .9em;
}

.profile img {
    height: 70px;
    margin-left: 10px;
    padding: 0 25px 0 0;
}

.profile h1 {
    margin: 13px 0 -5px -10px;
    font-size: 1.5em;
    color: #fff;
}

.profile h4 {
    margin: 0 0 0 -10px;
    font-size: .9em;
    font-weight: 100;
    color: #ff1900;
}

.main-one {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 0 15px 0;
    box-shadow: 0px 10px 5px #fff;
    background: #860d0d;
}

.main-one div {
    margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
    padding-right: 3px;
    margin: 0 0 0 3px;
}

.main-one a:nth-child(2) i {
    padding-right: 4px;
    margin: 0 0 0 4px;
}

.main-one a:nth-child(3) i {
    margin: 0 0 0 3px;
    padding-right: 3px;
}

.main-one a {
    margin: 0 0 0 10px;
    color: #ddd;
}

.main-two {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 15px 0 18px 0;
    color: black;
    box-shadow: 0px 10px 20px #fff;
    background: #860d0d;
    color: #fff;
}

.main-two a {
    margin: 20px 0 0 0px;
    color: #fff;
    font-weight: 600;
}

.main-two i {
    color: #fff;
    font-size: 1.1em;
    font-weight: 600;
}

.main-tree {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin: 0px 0 0 0;
    color: #efc289;
    overflow-x: auto;


}

.main-tree a {
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    color: #efc289;
    margin: 15px 0 25px 0;
    border: #efc28990 .1px solid;
    padding: 3px 30px;
    border-radius: 7px;
}

.main-tree a .icon {
    color: #efc289;
    font-size: 1.2em;
    margin-right: 5px;
}

.main-tree h5 {
    margin: 10px 0px 22px 10px;
}

.main-four {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0px 0 10px 0;
    color: #fff;
    background: #860d0d;


}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}

.main-four i {
    font-size: 1.2em;
    color: #555;
}

.main-four h5 {
    margin: 0 auto 20px auto;
}

.main-four-card {
    margin: -10px 0 0px 0px;
    height: 50px;
    display: flex;
    
}


.main-four-card a {
    border: solid .1px #dddddd54;
    margin: 10px 4px;
    border-radius: 0% 10% 10% 10%;
    font-size: 14px;
    color: #efc289;
    border: solid .5px #d8d8d840;
    border-radius: 7px;
    transition: all .3s linear;
    padding: 3px 25px;
    background-color: #d8d8d840;
    justify-content: space-around;
    justify-content: space-between;
    display: flex;
}

.main-four-card a:hover {
    color: #efc289;
    border: solid 0.5px #ff1900;
    text-shadow: -1px 1px 10px #efc289;
}

.main-four-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-four-card h4 {
    margin: 0 0 0 15px;
    background: #92929240;
    padding: 0px 10px 0px 10px;
    border-radius: 12% 12% 12% 0%;


}

.main-four-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}

.main-five {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    box-shadow: 0px 10px 10px#fff;
    overflow-x: auto;
}

.main-five i {
    font-size: 1.2em;
    color: #555;
}

.main-five h5 {
    margin-left: 10px;
}

.main-five-card {
    height: 370px;
    margin: 0 10px;
    border: solid .5px #ff1900;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.main-five-card a {
    border: solid .1px #dddddd54;
    margin: 0px 5px 20px 10px;
    width: 500px;
    border-radius: 3% 3% 3% 3%;
}

.main-five-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-five-card h4 {
    margin: 0 5px 0 10px;
}

.main-five-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}

.mini-profile {
    height: 25px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
    padding: 0 15px 0 0;
}



a.router-link-exact-active {
    background-color: #ff190060;
    color: #efc289;
    border-radius: 7px;
    text-shadow: -1px 1px 10px #efc289;
}

.active {
    background-color: #ff190060;
    color: #efc289;
    border-radius: 7px;
    text-shadow: -1px 1px 10px #efc289;
    z-index: 100;
}


@media only screen and (max-width: 369px) {}
</style>