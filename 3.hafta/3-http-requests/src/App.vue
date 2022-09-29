<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" />
    </div>
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="mt-2 text-blue d-flex justify-content-end align-items-center"
      >5 adet alınacak ürün vardır</small
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>