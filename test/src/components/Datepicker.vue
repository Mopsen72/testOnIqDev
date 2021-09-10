<template>
  <div>
    <date-picker
      class="datepicker"
      v-model="time1"
      valueType="date"
      format="DD-MM-YYYY"
      lang="ru"
      v-on:input="changeDate"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/ru";
export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
    };
  },
  methods: {
    changeDate(e) {
      this.$store.commit("changeDate", e);
    },
  },
};
</script>

<style lang="scss">
.datepicker {
  width: 88px;
  & .mx-input {
    cursor: pointer;
    padding: 6px;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.21) 34%,
      rgba(255, 255, 255, 0.21) 69%
    );
    border: 1px solid rgba(168, 172, 173, 0.46);
    &:hover + .mx-icon-clear {
      display: none;
    }
  }
  & .mx-icon-calendar {
    display: none;
  }
}
</style>