import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dateDeposit: null,
    deposit: {
      value: 1000000,
      id: 'depos0001'
    },
    resupplyDeposit: {
      value: 1000000,
      id: 'resupDepos0001'
    },
    selectYear: [
      { year: 1, yearSuff: 'год', id: 'option0001', checked: true },
      { year: 2, yearSuff: 'года', id: 'option0002', checked: false },
      { year: 3, yearSuff: 'года', id: 'option0003', checked: false },
      { year: 4, yearSuff: 'года', id: 'option0004', checked: false },
      { year: 5, yearSuff: 'лет', id: 'option0005', checked: false }
    ],
    radioChecked: [
      { label: 'yes', checked: true, id: 'resupply1' },
      { label: 'no', checked: false, id: 'resupply2' }
    ],
    result: 0
  },
  getters: {
    getDate(state) {
      return state.dateDeposit
    },
    getDeposit(state) {
      return state.deposit
    },
    getResupplyDeposit(state) {
      return state.resupplyDeposit
    },
    getSelectYear(state) {
      return state.selectYear
    },
    getRadioChecked(state) {
      return state.radioChecked
    },
    getResult(state) {
      return state.result
    }
  },
  mutations: {
    changeDepositValue(state, payload) {
      state.deposit.value = payload;
      document.querySelector('#depos0001').style.setProperty("--value", payload)
    },
    changeResupplyDepositValue(state, payload) {
      state.resupplyDeposit.value = payload;
      document.querySelector('#resupDepos0001').style.setProperty("--value", payload)
    },
    changeYear(state, payload) {
      state.selectYear.forEach((el) => { el.checked = false });
      let elindex = state.selectYear.findIndex((el) => el.year === +payload);
      state.selectYear[elindex].checked = true;
    },
    check(state, payload) {
      let elIndex = state.radioChecked.findIndex((el) => el.id === payload);
      state.radioChecked.forEach((el) => { el.checked = false });
      state.radioChecked[elIndex].checked = true;
    },
    changeDate(state, payload) {
      let day = payload.getDate();
      let month = payload.getMonth();
      let year = payload.getFullYear();
      state.dateDeposit = {
        day: day,
        month: month,
        year: year
      };
    },
    changeResult(state, payload) {
      state.result = payload.summary
    }
  },
  actions: {
    calkulate({ getters, commit }) {
      let year = getters.getSelectYear.find((el) => el.checked === true)
      let data = {
        dateDepositDay: getters.getDate.day,
        dateDepositMonth: getters.getDate.month,
        dateDepositYear: getters.getDate.year,
        deposit: getters.getDeposit.value,
        year: year.year,
        radioChecked: getters.getRadioChecked[0].checked,
      }
      if (data.radioChecked === true) {
        data = {
          ...data,
          resupplyDeposit: getters.getResupplyDeposit.value,
        }
      } else {
        data = {
          ...data,
          resupplyDeposit: 0,
        }
      }
      return fetch('data/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      }).then(() => fetch('data/result')
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          commit("changeResult", result)
        }))


    }
  },
  modules: {
  }
})
