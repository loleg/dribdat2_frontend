<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- https://www.dailymotion.com/video/xkq3cr -->
    <!-- https://www.youtube.com/watch?v=zihJTimjdls -->
    <ChallengePitch pitch="https://www.dailymotion.com/video/xkq3cr"></ChallengePitch>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ChallengePitch from '@/components/ChallengePitch.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld, 
    ChallengePitch
  }
}
</script>
