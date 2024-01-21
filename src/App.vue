<template>
  <nav>
    <router-link to="/">Chat chat</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss" scoped>
  // Lightest #DDE6ED
  // Middle #9DB2BF #526D82
  // Darkest #27374D
  nav {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    background: #27374D;
    a {
      padding: 20px;
      color: #9DB2BF;
      text-decoration: none;
      font-size: 7rem;
      font-weight: bold;
    }

  }
  @media (max-width: 900px) {
    nav {
      a {
        font-size: 5rem;
        font-weight: bolder;
      }
    }
  }
</style>
