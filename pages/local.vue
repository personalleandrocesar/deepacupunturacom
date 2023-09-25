
<template>
  <div>
              <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#fadb41 100%)'/> <!-- here -->

    <NavTopTwo/>
    <NavBottom/>
    <div class='anima'>
    <Local/>
    </div>
    <RouterView/>
  </div>
</template>