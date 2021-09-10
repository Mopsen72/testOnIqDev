<template>
  <div class="calkulator calkulator_marT">
    <h2 class="calkulator__title calkulator__title_padd">Калькулятор</h2>
    <form class="calkulator__box" onsubmit="return false;">
      <div class="calkulator__point point">
        <p class="point__title">Дата оформления вклада</p>
        <Datepicker />
      </div>
      <div class="calkulator__point point">
        <p class="point__title">Сумма вклада</p>
        <input
          type="number"
          class="point__input"
          min="1000"
          max="3000000"
          step="1000"
          v-bind:value="deposit.value"
          v-on:input="changeDepositeValue"
        />
        <div class="point__rangeBox point__rangeBox_marg">
          <input
            class="point__range"
            type="range"
            v-bind:id="deposit.id"
            v-bind:value="deposit.value"
            v-on:input="changeDepositeValue"
            min="1000"
            max="3000000"
            step="1000"
          />
          <div class="point__labelBox">
            <p class="point__label">1 тыс. руб.</p>
            <p class="point__label">3 000 000</p>
          </div>
        </div>
      </div>
      <div class="calkulator__point point">
        <p class="point__title">Срок вклада</p>
        <select class="point__input" v-on:change="changeYear">
          <option
            v-for="opt of selectYear"
            v-bind:key="opt.id"
            v-bind:value="opt.year"
          >
            {{ opt.year }} {{ opt.yearSuff }}
          </option>
        </select>
      </div>
      <div class="calkulator__point point">
        <p class="point__title">Пополнение вклада</p>
        <div class="point__radiobox">
          <div class="point__radioPoint">
            <input
              type="radio"
              name="resupply"
              :id="radioChecked[0].id"
              class="point__radio"
              v-bind:checked="radioChecked[0].checked"
              v-on:click="check"
            />
            <label :for="radioChecked[0].id" class="point__radioLabel"
              >да</label
            >
          </div>
          <div class="point__radioPoint">
            <input
              type="radio"
              name="resupply"
              :id="radioChecked[1].id"
              class="point__radio"
              v-bind:checked="radioChecked[1].checked"
              v-on:click="check"
            />
            <label :for="radioChecked[1].id" class="point__radioLabel"
              >нет</label
            >
          </div>
        </div>
      </div>
      <div class="calkulator__point point">
        <p class="point__title">Сумма пополнения вклада</p>
        <input
          type="number"
          class="point__input"
          min="1000"
          max="3000000"
          step="1000"
          v-bind:disabled="radioChecked[1].checked"
          v-bind:value="resupplyDeposit.value"
          v-on:input="changeResuplplyDepositeValue"
        />
        <div class="point__rangeBox point__rangeBox_marg">
          <input
            class="point__range"
            type="range"
            v-bind:disabled="radioChecked[1].checked"
            v-bind:id="resupplyDeposit.id"
            v-bind:value="resupplyDeposit.value"
            v-on:input="changeResuplplyDepositeValue"
            min="1000"
            max="3000000"
            step="1000"
          />
          <div class="point__labelBox">
            <p class="point__label">1 тыс. руб.</p>
            <p class="point__label">3 000 000</p>
          </div>
        </div>
      </div>
      <div class="calkulator__resultBox">
        <button
          v-on:click="calkulate"
          class="calkulator__btn calkulator__btn_marg"
        >
          Рассчитать
        </button>
        <p class="calkulator__result">
          <span class="calkulator__resultTitle"> Результат:</span>
          {{ result }} руб.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "./Datepicker.vue";
export default {
  name: "Calkulator",
  components: {
    Datepicker,
  },
  computed: {
    deposit() {
      return this.$store.getters.getDeposit;
    },
    resupplyDeposit() {
      return this.$store.getters.getResupplyDeposit;
    },
    selectYear() {
      return this.$store.getters.getSelectYear;
    },
    radioChecked() {
      return this.$store.getters.getRadioChecked;
    },
    result() {
      return this.$store.getters.getResult;
    },
  },
  methods: {
    changeDepositeValue(e) {
      this.$store.commit("changeDepositValue", e.target.value);
    },
    changeResuplplyDepositeValue(e) {
      this.$store.commit("changeResupplyDepositValue", e.target.value);
    },
    changeYear(e) {
      this.$store.commit("changeYear", e.target.value);
    },
    check(e) {
      this.$store.commit("check", e.currentTarget.id);
    },
    calkulate() {
      this.$store.dispatch("calkulate");
    },
  },
};
</script>


<style lang="scss">
.calkulator {
  background-color: #dfdfdf62;
  width: 652px;
  box-sizing: border-box;
  padding: 18px;
  &_marT {
    margin-top: 24px;
  }
  &__title {
    font-family: Arial;
    font-size: 30px;
    line-height: 32px;
    color: #eb5017;
    &_padd {
      padding: 19px 0 18px 96px;
    }
  }
  &__point {
    height: 50px;
  }
  &__resultBox {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  &__btn {
    box-sizing: border-box;
    padding: 13px 16px;
    background-color: #ffffff;
    background-image: linear-gradient(0deg, #7cc400 0%, #aff300 100%);
    border: 1px solid #c3c4c4;
    box-shadow: 1px 2px 5px -1px rgba(0, 0, 0, 0.18);
    border-radius: 12px;
    font-family: Arial Bold;
    font-size: 12px;
    line-height: 16px;
    color: #395306;
    &_marg {
      margin: 0 24px 0 3px;
    }
  }
  &__result {
    font-family: Arial;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }
  &__resultTitle {
    font-family: Arial Bold;
    font-size: 12px;
    line-height: 16px;
    color: #395306;
  }
}
.point {
  display: flex;
  align-items: center;
  &__title {
    margin-right: 27px;
    flex-basis: 185px;
    text-align: end;
    font-family: Arial;
    font-size: 14px;
    line-height: 20px;
    color: #000;
  }
  &__input {
    width: 88px;
    box-sizing: border-box;
    padding: 5px 7px;
    font-family: Arial;
    font-size: 14px;
    line-height: 20px;
    color: #000;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.21) 34%,
      rgba(255, 255, 255, 0.21) 69%
    );
    border: 1px solid rgba(168, 172, 173, 0.46);
  }
  &__rangeBox {
    display: flex;
    flex-direction: column;
    &_marg {
      margin: 20px 0 0 19px;
    }
  }
  &__labelBox {
    display: flex;
    justify-content: space-between;
  }
  &__label {
    font-family: Verdana Italic;
    font-size: 10px;
    line-height: 20px;
    color: #676767;
  }
  &__range {
    --min: 1000;
    --max: 3000000;
    --value: 1000000;
    width: 239px;
    height: 8px;
    -webkit-appearance: none;
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 2px + var(--ratio) * (100% - 2px));
    &_margL {
      margin-left: 19px;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      width: 7px;
      height: 7px;
      border-radius: 4px;
      background: #a5a5a5;
      border: none;
      box-shadow: 0 0 2px black;
      -webkit-appearance: none;
    }
    &::-webkit-slider-runnable-track {
      height: 7px;
      border-radius: 4px;
      background: linear-gradient(#a3ca4c, #a3ca4c) 0 / var(--sx) 100% no-repeat,
        #393636;
      border: 1px solid #b2b2b2;
      box-shadow: none;
    }
    &::-webkit-slider-thumb:hover {
      background: #898989;
    }
    &:hover::-webkit-slider-runnable-track {
      background: linear-gradient(#b5e154, #b5e154) 0 / var(--sx) 100% no-repeat,
        #494545;
      border-color: #9a9a9a;
    }
    &::-webkit-slider-thumb:active {
      background: #dddddd;
    }
    &:active::-webkit-slider-runnable-track {
      background: linear-gradient(#bdeb56, #bdeb56) 0 / var(--sx) 100% no-repeat,
        #766e6e;
      border-color: #c1c1c1;
    }
    &::-moz-range-thumb {
      width: 7px;
      height: 7px;
      border-radius: 4px;
      background: #a5a5a5;
      border: none;
      box-shadow: 0 0 2px black;
    }
    &::-moz-range-track {
      height: 7px;
      border-radius: 4px;
      background: linear-gradient(#a3ca4c, #a3ca4c) 0 / var(--sx) 100% no-repeat,
        #393636;
      border: 1px solid #b2b2b2;
      box-shadow: none;
    }
    &::-moz-range-thumb:hover {
      background: #898989;
    }
    &:hover::-moz-range-track {
      background: linear-gradient(#b5e154, #b5e154) 0 / var(--sx) 100% no-repeat,
        #494545;
      border-color: #9a9a9a;
    }
    &::-moz-range-thumb:active {
      background: #dddddd;
    }
    &:active::-moz-range-track {
      background: linear-gradient(#bdeb56, #bdeb56) 0 / var(--sx) 100% no-repeat,
        #766e6e;
      border-color: #c1c1c1;
    }
    &::-ms-fill-upper {
      background: transparent;
      border-color: transparent;
    }
    &::-ms-fill-lower {
      height: 7px;
      border-radius: 4px 0 0 4px;
      margin: -1px 0 -1px -1px;
      background: #a3ca4c;
      border: 1px solid #b2b2b2;
      border-right-width: 0;
      border-color: transparent;
    }
    &:hover::-ms-fill-lower {
      background: #b5e154;
      border-color: #9a9a9a;
    }
    &:active::-ms-fill-lower {
      background: #bdeb56;
      border-color: #c1c1c1;
    }
    &::-ms-thumb {
      width: 7px;
      height: 7px;
      border-radius: 4px;
      background: #a5a5a5;
      border: none;
      box-shadow: 0 0 2px black;
      margin-top: 0;
      box-sizing: border-box;
    }
    &::-ms-track {
      height: 7px;
      border-radius: 4px;
      background: #393636;
      border: 1px solid #b2b2b2;
      box-shadow: none;
      box-sizing: border-box;
    }
    &::-ms-thumb:hover {
      background: #898989;
    }
    &:hover::-ms-track {
      background: #494545;
      border-color: #9a9a9a;
    }
    &::-ms-thumb:active {
      background: #dddddd;
    }
    &:active::-ms-track {
      background: #766e6e;
      border-color: #c1c1c1;
    }
  }
  &__radiobox {
    display: flex;
  }
  &__radioPoint {
    margin-right: 20px;
  }
  &__radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked + .point__radioLabel::before {
      content: "\25CF";
      font-size: 12px;
      line-height: 10px;
      text-align: center;
      color: #1499db;
      border: 0.5px solid rgb(92, 92, 92);
      background-color: #d9e8ff;
    }
    &:checked + .conditions__label {
      color: rgba(0, 0, 0, 0.87);
    }
  }
  &__radioLabel {
    font-family: Arial;
    font-size: 14px;
    line-height: 20px;
    color: #000;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      margin-right: 2px;
      width: 12px;
      height: 12px;
      display: block;
      background-color: #e5e9ea;
      border-radius: 10px;
      border: 0.5px solid #ccc;
    }
  }
}
</style>