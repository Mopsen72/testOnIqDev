<template>
  <ul class="tabs tabs_position">
    <li class="tabs__point">Кредитные карты</li>
    <li class="tabs__point tabs__point_active">Вклады</li>
    <li class="tabs__point">Дебетовая карта</li>
    <li class="tabs__point">Страхование</li>
    <li class="tabs__point">Друзья</li>
    <li class="tabs__point">Интернет-банк</li>
  </ul>
</template>
<style lang="scss">
.tabs {
  padding-left: 0;
  display: flex;
  list-style-type: none;
  border: 1px solid #e0e0e0;
  width: 1004px;
  & :first-child {
    padding-left: 30px;
  }
  & :last-child {
    padding-right: 30px;
  }
  &_position {
    margin: 0 auto;
  }
  &__point {
    padding: 14px 0;
    flex-grow: 1;
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    background-color: #231f20;
    &_active {
      background-color: #eb5017;
    }
  }
}
</style>