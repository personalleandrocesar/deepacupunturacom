<script setup>
const choose = useCookie('choose')
choose.value = 0


</script>

<template>
    <div>



        <div class='main-tree'>
            <div>
                <h5><Icon name="mdi:map-marker-radius" /> Localização</h5>
            </div>
        </div>


        <div class='main-four'>
            <div class='main-four-card'>
                <p>
                    Rua da Conceição, 125 - sala: 1005 - Center Offices - Centro - Niterói -Rio de Janeiro - CEP: 24020-085
                </p>
            </div>
            <iframe class='body-map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5096784506004!2d-43.12292232898354!3d-22.89456440314661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983b5d0974f89%3A0xd5dcb4494da04cac!2sDeep%20Acupuntura!5e0!3m2!1spt-BR!2sbr!4v1647055905172!5m2!1spt-BR!2sbr"
            style='border: solid 2px #d8d8d840;' margin="auto;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class='main-tree'>
            <div>
                <h5><Icon name="ic:baseline-access-time-filled" /> Horário de funcionamento</h5>
            </div>
        </div>


        <div class='main-four'>
            <div class='main-four-card'>
                <p>
                    Segunda à sexta: 07:00 às 21:00
                    <br>
                    Sábado: 07:00 às 13:00
                </p>
            </div>
           
        </div>
        <!--
     <div class='hr'></div>
     -->
        <br>
        <br>
        <br>
        <br>

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
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 30px;
    margin-top: -10px;
    margin-right: 30px;
    border-left: solid 4px #ff1900;
    border-right: solid 4px #ff1900;
    color: #ddd;
}

.divider {
    height: 15px;
    background-color: #ff190040;
}

.divider-ultimate {
    height: 30px;
    background-color: #fff;
}

.profile {
    background: #860d0d;
    display: flex;
    justify-content: center;
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
    text-shadow: -2px 2px 5px #ffffff70,
        -2px -2px 5px #ffffff70,
        2px 2px 5px #ffffff70,
        2px -2px 5px #ffffff70;
    transition: all .3s linear;
}

.profile h1:hover {
    color: #fff;
    cursor: pointer;
    text-shadow: -2px 2px 5px #ff1900,
        -2px -2px 5px #ff1900,
        2px 2px 5px #ff1900,
        2px -2px 5px #ff1900;
}

.profile h4 {
    margin: 0 0 0 -13px;
    padding: 0 4px;
    font-size: .9em;
    font-weight: bold;
    line-height: 1;
    color: #ff1900;
    border-left: solid 4px #ff1900;
    border-right: solid 4px #ff1900;
}

.main-one {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
    box-shadow: 0px 10px 15px #ffffff10;
    background: #860d0d;
}

.main-one a i {
    display: block;
    font-size: 16px;
}

.main-one a {
    width: 80px;
    padding: 5px 0 3px 0;
    font-size: 14px;
    color: #ddd;
    border: solid .5px;
    border-radius: 5% 4% 15%;
    transition: all .3s linear;
    background-color: #d8d8d840;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

}

.main-one a:hover {
    color: #fff;
    border: solid .5px #ff1900;
    text-shadow: -1px 1px 10px #fff;
}

.main-one h5 {
    margin: 10px 0px 22px 10px;
}

.main-two {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 15px 0 18px 0;
    color: black;
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
    justify-content: flex-start;
    flex-direction: column;
    margin: 0px 0 0 0;
    color: #efc289;
    background: #860d0d;
    overflow-x: auto;
}

.main-tree i {
    font-size: 1.2em;
    color: #fff;
}

.main-tree h5 {
    margin: 10px 0px 22px 10px;
}

.hCincoOne {
    margin: 10px 0px 22px 10px;
}

.hCincoTwo {
    margin: -10px 0px 22px 10px;

}

#main-white {
    position: static;
    color: #fff;
    background-color: #d8d8d840;
    width: 100%;
    margin: 30px auto 0px;
    text-align: left;
}

#main-white div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: #fff;
    overflow-x: auto;
}

#main-white h4 {
    margin: 0 10px;
}

#main-white .clientesGraph {
    margin: 10px;
    background-color: #ff1900;
}

.main-four {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    overflow-x: auto;
}

.main-four i {
    font-size: 1.2em;
    color: #555;
}

.main-four h5 {
    margin: 0 auto 20px auto;
}

.main-four-card {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.main-four-card a {
    padding: 2px 6px;
    margin: 10px 4px;
    font-size: .8em;
}

.main-four-card a:hover {
    background-color: #dddddd54;
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

iframe {
    width: 375px;
    height: 270px;
    margin: 10px auto 30px auto;
    border-radius: 7px;
    
}

.main-five {
    background: #860d0d;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    box-shadow: 0px 10px 10px#bbb;
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
    border: solid .5px #ff190090;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
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

a.nuxt-link-exact-active {
    background-color: #ff190090;
    color: #fff;
    border-radius: 0% 10% 10% 10%;
}

.main-l-trat {
    width: 95%;
    text-align: left;
    margin: -10px auto 20px auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-self: center;
}

.dot-index {
    cursor: pointer;
    transition: all .3s ease-in;
    background-color: #d8d8d840;
    margin: 10px 16px;
    padding: 10px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5% 4% 15%;
    border: solid .5px;
}

.dot-index:Hover {
    color: #fff;
    border: solid .5px #ff1900;
}

.dot-index {
    margin: 5px 2px;
    padding: 4px;
    font-size: .6em;
}

.dotHover {
    background-color: #d8d8d840;
    color: #ddd;
    border: solid .5px #ff1900;
}

.dot:hover {
    background-color: #d8d8d840;
}

.dot:active {
    color: dbd1d1;
    background-color: #d8d8d8;
}

.selectTitle {
    text-shadow: -2px 2px 5px #ff1900,
        -2px -2px 5px #ff1900,
        2px 2px 5px #ff1900,
        2px -2px 5px #ff1900;
    color: #fff;
}

.selectTitleHover {
    color: #fff;
    border: solid .5px #ff1900;
    opacity: 1s;
}

.selectTitleHover span {
    font-size: 1.2em;
}

.white {
    color: #ffffff;
    margin: 0;
}

.homeTwo {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    align-self: center;
    font-size: .9em;
    width: 95%;
    margin: auto;
    font-weight: bold;
    color: #dbd1d1;
}

.homeTwo div {
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;

}

.homeTwo a {
    font-size: 1em;
    margin: auto;
    font-weight: bold;
    color: #dbd1d1;
}

.homeTwoDot:hover {
    text-shadow: -1px 1px 10px #fff;
    cursor: pointer;
}

.hr {
    width: 95%;
    border: solid .3px #ff190040;
    margin: 30px auto 0px auto;
}


@media only screen and (max-width: 369px) {}</style>
