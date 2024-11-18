<template>
  <div>
    <tool-bar></tool-bar>
    <main><router-view :key="$route.fullPath"></router-view></main>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import FootBar from '@/components/includes/FooterComponent.vue';
import ToolBar from '@/components/includes/HeaderComponent.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'IndexComponent',
  components: {
    ToolBar,
    FootBar,
  },
  data() {
    return {};
  },
  mounted() {
    this.loadObjEmpresa(), window.addEventListener("scroll", this.checkScroll);
  },
  computed: {
    ...mapState(["loading", "empresa"]),
  },
  methods: {
    ...mapMutations(["setLoading"]),
    ...mapActions(["loadObjEmpresa"]),
  },
};
</script>
