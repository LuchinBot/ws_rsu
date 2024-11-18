<template>
  <div id="main">
    <index-component></index-component>
  </div>
</template>

<script>
import IndexComponent from './components/pages/IndexComponent.vue'; // Correcta ruta al componente
export default {
  name: "App",
  components: {
    IndexComponent,
  },
};
</script>
