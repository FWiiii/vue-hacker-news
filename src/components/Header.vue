<template>
  <header class="header-wrapper">
    <div class="left-section">
      <div class="toggle-menu">
        <svg width="20" height="20" viewBox="0 0 640 512" fill="rgba(255,255,255,1)">
          <path
            opacity="1"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            fill="var(--default-text-color)"
          ></path>
        </svg>
      </div>
      <a class="user-icon">
        <svg width="20" height="20" viewBox="0 0 496 512" fill="rgba(255,255,255,1)">
          <path
            opacity="1"
            d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="center-section">
      <div class="header-links">
        <a class="header-link">Top</a>
        <a class="header-link">New</a>
        <a class="header-link">Show</a>
        <a class="header-link">Best</a>
        <a class="header-link">Ask</a>
      </div>
    </div>
    <div class="empyt"></div>
  </header>
</template>
<script></script>
<style lang="scss">
.header-wrapper {
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #e36c46;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: 300;
  padding: 0 20px;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 2px, rgb(0 0 0 / 34%) 0px 3px 6px;

  .left-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    .toggle-menu {
      margin-right: 18px;
    }
  }

  .center-section {
    .header-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      .header-link {
        margin-right: 17px;
      }
    }
  }
}
</style>
