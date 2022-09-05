<template>
  <header class="header-wrapper">
    <div class="left-section">
      <svg
        t="1662191705759"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3206"
        width="40"
      >
        <path
          d="M799.824212 823.991862h23.959308s72.086267-1.458393 72.086266-96.045575V296.053713H799.61587l0.208342 527.938149z"
          fill="#616161"
          p-id="3207"
        ></path>
        <path
          d="M799.824212 266.469176V200.008138H127.921872v527.938149s0 96.045575 96.045575 96.045575h575.856765V266.469176z"
          fill="#757575"
          p-id="3208"
        ></path>
        <path
          d="M223.967447 775.864903c-47.918616 0-47.918616-47.918616-47.918617-47.918616V248.135097H752.113937v480.019532c0 22.084232 6.87528 37.293184 16.250661 47.918616H223.967447v-0.208342z"
          fill="#EEEEEE"
          p-id="3209"
        ></path>
        <path
          d="M484.811394 343.97233h219.175585v47.918616H484.811394zM487.936521 631.900712h168.131841v48.126958h-168.131841zM487.936521 536.063479h216.050458v47.918617H487.936521zM487.936521 440.017904h216.050458v48.126959H487.936521z"
          fill="#757575"
          p-id="3210"
        ></path>
        <path d="M223.967447 346.680773h216.050457v283.136521H223.967447z" fill="#558B2F" p-id="3211"></path>
      </svg>
    </div>
    <div class="center-section">
      <div class="header-links">
        <router-link class="header-link" :to="{ path: '/top' }">Top</router-link>
        <router-link class="header-link" :to="{ path: '/news/1' }">New</router-link>
        <router-link class="header-link" :to="{ path: '/show/1' }">Show</router-link>
        <router-link class="header-link" :to="{ path: '/ask/1' }">Ask</router-link>
      </div>
    </div>
    <div class="toggle-mode" @click="isDark = !isDark">
      <svg
        t="1662191784134"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4258"
        width="30"
      >
        <path
          d="M620.010667 806.677333V874.666667H393.344v-68.010667h226.666667zM506.666667 149.333333c150.229333 0 272 121.770667 272 272 0 100.672-54.698667 188.565333-135.978667 235.605334l-0.021333 40.384a64 64 0 0 1-64 64h-144a64 64 0 0 1-64-64v-40.384A271.893333 271.893333 0 0 1 234.666667 421.333333C234.666667 271.104 356.437333 149.333333 506.666667 149.333333z m0 64C391.786667 213.333333 298.666667 306.453333 298.666667 421.333333a207.850667 207.850667 0 0 0 104.042666 180.202667l31.957334 18.496v77.290667h144l0.042666-77.312 31.936-18.474667A207.850667 207.850667 0 0 0 714.666667 421.333333c0-114.88-93.12-208-208-208z m33.152 72.085334l44.864 45.653333-67.818667 66.645333h53.205333c28.842667 0 42.965333 35.178667 22.122667 55.125334l-120.213333 114.986666-44.245334-46.250666 62.592-59.861334h-51.669333c-28.629333 0-42.837333-34.752-22.421333-54.826666l123.584-121.472z"
          p-id="4259"
          fill="#cdcdcd"
          v-if="isDark"
        ></path>
        <path
          d="M620.010667 806.677333V874.666667H393.344v-68.010667h226.666667zM506.666667 149.333333c150.229333 0 272 121.770667 272 272 0 100.672-54.698667 188.565333-135.978667 235.605334l-0.021333 40.384a64 64 0 0 1-64 64h-144a64 64 0 0 1-64-64v-40.384A271.893333 271.893333 0 0 1 234.666667 421.333333C234.666667 271.104 356.437333 149.333333 506.666667 149.333333z m0 64C391.786667 213.333333 298.666667 306.453333 298.666667 421.333333a207.850667 207.850667 0 0 0 104.042666 180.202667l31.957334 18.496v77.290667h144l0.042666-77.312 31.936-18.474667A207.850667 207.850667 0 0 0 714.666667 421.333333c0-114.88-93.12-208-208-208z m33.152 72.085334l44.864 45.653333-67.818667 66.645333h53.205333c28.842667 0 42.965333 35.178667 22.122667 55.125334l-120.213333 114.986666-44.245334-46.250666 62.592-59.861334h-51.669333c-28.629333 0-42.837333-34.752-22.421333-54.826666l123.584-121.472z"
          p-id="4259"
          v-else
        ></path>
      </svg>
    </div>
  </header>
</template>
<script setup>
import { useDark } from "@vueuse/core";

const isDark = useDark();
</script>
<style lang="scss">
.header-wrapper {
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2e495e;
  font-family: "Roboto", sans-serif;
  padding: 0 20px;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 2px, rgb(0 0 0 / 34%) 0px 3px 6px;

  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-section {
    .header-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      a {
        text-decoration: none;
        margin-right: 50px;
        color: #fff;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
  .toggle-mode {
    height: 30px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
