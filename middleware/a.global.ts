export default defineNuxtRouteMiddleware((to, from) => {
    const choose = useCookie('choose')
    choose.value = choose.value
   
})