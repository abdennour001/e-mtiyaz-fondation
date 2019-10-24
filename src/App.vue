<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">

  @import './variables.scss';

  #app {
    font-family: $font-family-sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color-dark;
  }
  body {
    overflow-x: hidden;
  }
  hr.light {
    background-color: $font-color-light;
    opacity: 0.3;
  }
  hr.dark {
    background-color: $font-color-dark;
    height: 0.5px;
    opacity: 0.2;
    width: 50%;
  }
  hr.blue {
    background-color: $medium-blue-color;
    height: 1px;
    opacity: 1;
    width: 40%;
  }
  .display-5 {
    font-weight: 400;
    color: $dark-blue-color;
  }
  .welcome {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
  }
  .img-border {
    border: 20px solid whitesmoke;
    -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
  .squeeze-70 {
    width: 70%;
  }
</style>
