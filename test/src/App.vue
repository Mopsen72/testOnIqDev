<template>
  <div class="container screenBox">
    <div class="topSpace">
      <SiteHeader></SiteHeader>
      <Tabs></Tabs>
      <div class="container_small">
        <BreadCrumb></BreadCrumb>
        <Calkulator></Calkulator>
      </div>
    </div>
    <div class="footer">
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Tabs from "./components/Tabs.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
import Calkulator from "./components/Calkulator.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
    Tabs,
    BreadCrumb,
    Calkulator,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh !important;
}
@font-face {
  font-family: Europe;
  src: url("assets/font/europe-normal.ttf");
  font-weight: 400;
}
@font-face {
  font-family: Arial;
  src: url("assets/font/arial.ttf");
  font-weight: 400;
}
@font-face {
  font-family: Arial Bold;
  src: url("assets/font/arial-bold.ttf");
  font-weight: 700;
}
@font-face {
  font-family: Verdana Italic;
  src: url("assets/font/verdana-italic.ttf");
  font-weight: 400;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  &_small {
    max-width: 964px;
    margin: 0 auto;
  }
}
.screenBox {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.topSpace {
  flex-grow: 1;
}
</style>