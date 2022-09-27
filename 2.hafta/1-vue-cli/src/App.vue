<template>
  <app-header />
  <div class="container">
    <h3>Bu benim ilk Vue CLI uygulamam</h3>
    <p>Bugün component ve Vue CLI konularını görüyoruz</p>
  </div>
  <!-- <CounterItem></CounterItem>-->
  <CounterItem />
  <counter-item />
  <counterItem />
  <!--<benim-güzel-sayacim></benim-güzel-sayacim>-->
</template>
<script>
import CounterItem from "@/components/CounterItem";
export default {
  components: {//local
    CounterItem,
    //CounterItem: CounterItem,
    //"benim-güzel-sayacim":CounterItem,
  },
};
</script>

