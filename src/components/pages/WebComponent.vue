<template>
    <div>

    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from "vuex";
  
  export default {
    name: "WebComponent",
    computed: {
      ...mapState(["empresa"]),
    },
    components: {},
    created() {},
    mounted() {
      document.title =
        "Inicio | " +
        (this.empresa.abreviatura ? this.empresa.abreviatura : "-");
    },
    data() {
      return {
      };
    },
    methods: {
      ...mapMutations(["setLoading"]),
    },
  };
  </script>
  