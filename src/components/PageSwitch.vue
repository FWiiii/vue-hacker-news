<template>
  <div class="switch-wrapper">
    <div class="left">
      <span>&lt; prev</span>
    </div>
    <div class="page">
        <span>1/10</span>
    </div>
    <div class="right">
      <span>  next > </span>
    </div>
  </div>
</template>
<script></script>

<style lang="scss">
    .switch-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 300;
        .page{
            margin: 0 50px;
        }
    }
</style>
