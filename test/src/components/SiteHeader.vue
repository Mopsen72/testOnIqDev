<template>
  <div class="header header_margin">
    <img src="../assets/img/logo.png" alt="" class="header__img" />
    <p class="header__number">8-800-100-5005 +7 (3452) 522-000</p>
  </div>
</template>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_margin {
    margin: 12px auto 19px;
  }
  &__img {
    width: 230px;
  }
  &__number {
    width: 190px;
    font-family: Europe;
    font-size: 18px;
    line-height: 20px;
    color: #eb5017;
  }
}
</style>