<template>
  <div id="app">
    <router-view/>
  </div>


</template>

<script>
export default {
  name: "dribdat"
};
</script>

<style lang="scss">
body {
  margin: 20px 20px;
  background-color: #616163;
  background-image:url("./assets/9814.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;


}

.container {
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
}

.add-feedback {
  &.open {

    background-color: #ffffff;
    opacity: 0.8;
    padding: 18px 32px;
    border-radius: 5px;
    width: 700px;
    height: auto;
    cursor: default;
    form {
      opacity: 1;
      transition: opacity 0.1s ease;
      transition-delay: 0.3s;
      height: auto;
    }
  }
  transition: all 0.3s ease;
  background-color: #ffffff;
  opacity: 0.8;
  height: 100px;
  width: 100px;
  border-radius: 72px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
  .button-copy {
    text-align: center;
    line-height: 100px;

    font-weight: normal;
    color: #000000;
  }
  form {

    transition: none;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .cancel {
    font-size: 12px;
    text-align: right;
    margin-top: 1em;
    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

/*
    Part for computer
 */

@media screen and (min-width: 1200px) {
  #app {
    font-family: Verdana;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    
    padding: 0 auto;
    margin-left: 250px;
    margin-right: 250px;
  }


}

/*
    Tablets part
    */
@media screen and (min-width: 767px) and (max-width: 1200px) {
  #app {
    font-family: Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    margin: 0 auto;
    padding: 0 auto;
    margin-left: 20px;
    margin-right: 20px;
  }

}

/*
    Phone part
     */

@media screen and (min-width: 300px) and (max-width: 767px) {
  #app {
    font-family: Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    margin: 0 auto;
    padding: 0 auto;
  }


}
</style>
