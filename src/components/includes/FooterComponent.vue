<template>
  <div>
    <section class="footer">
      <footer class="container mx-auto py-10 px-6 top-0 z-10 w-full">
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-light text-green-600"><span class="font-bold">RSU</span> UNSM</a>
          <div>
            <ul class="flex space-x-6 text-2xl">
              <li>
                <a href="https://www.facebook.com/@unsmperu/" target="_blank"
                  class="flex bg-slate-50 text-green-600 rounded-full items-center transition duration-500 justify-center shadow-md hover:bg-green-500 hover:text-slate-50 footer-icon"><i
                    class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/unsmperu/" target="_blank"
                  class="flex bg-slate-50 text-green-600 rounded-full items-center transition duration-500 justify-center shadow-md hover:bg-green-500 hover:text-slate-50 footer-icon"><i
                    class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="https://www.youtube.com/@unsmperu" target="_blank"
                  class="flex bg-slate-50 text-green-600 rounded-full items-center transition duration-500 justify-center shadow-md hover:bg-green-500 hover:text-slate-50 footer-icon"><i
                    class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "FooterComponent",

  data() {
    return {
    };
  },

  computed: {
    ...mapState(["loading", "empresa"]),
  },

  mounted() {
    this.loadObjEmpresa(), window.addEventListener("scroll", this.checkScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },

  methods: {
    ...mapMutations(["setLoading"]),
    ...mapActions(["loadObjEmpresa"]),

  }
};
</script>

