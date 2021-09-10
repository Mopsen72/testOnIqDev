<template>
  <ul class="breadCrumbs">
    <li class="breadCrumbs__link">
      <span class="breadCrumbs__text">Главная</span>
    </li>
    <li class="breadCrumbs__link">
      <span class="breadCrumbs__text">Вклады</span>
    </li>
    <li class="breadCrumbs__link">
      <span class="breadCrumbs__text">Калькулятор</span>
    </li>
  </ul>
</template>

<style lang="scss">
.breadCrumbs {
  padding-left: 0;
  display: flex;
  list-style-type: none;
  & :first-child {
    &::before {
      content: none;
    }
  }
  & :last-child {
    .breadCrumbs__text {
      text-decoration: none;
    }
  }
  &__link {
    padding-right: 5px;
    &::before {
      content: "-";
      padding-right: 5px;
    }
  }

  &__text {
    font-family: Arial;
    font-size: 12px;
    line-height: 24px;
    text-decoration: underline;
    color: #231f20;
  }
}
</style>
