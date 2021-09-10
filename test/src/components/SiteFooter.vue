<template>
  <ul class="footerLink">
    <li class="footerLink__point">Кредитные карты</li>
    <li class="footerLink__point">Вклады</li>
    <li class="footerLink__point">Дебетовая карта</li>
    <li class="footerLink__point">Страхование</li>
    <li class="footerLink__point">Друзья</li>
    <li class="footerLink__point">Интернет-банк</li>
  </ul>
</template>

<style lang="scss">
.footerLink {
  width: 1004px;
  height: 56px;
  display: flex;
  background-color: #231f20;
  border: 1px solid #e0e0e0;
  list-style-type: none;
  & :first-child {
    padding-left: 56px;
  }
  &__point {
    margin-top: 13px;
    padding-right: 30px;
    font-family: Arial;
    font-size: 12px;
    line-height: 20px;
    text-decoration: underline;
    color: #ffffff;
  }
}
</style>