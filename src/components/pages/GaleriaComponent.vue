<template>
  <div>
    <section class="container mx-auto">
      <div
        class="galeria-1 grid grid-cols-12 py-10 overflow-hidden items-center"
      >
        <div class="left text-left col-span-12 md:col-span-6 px-10">
          <h2 class="text-4xl font-semibold text-slate-950">Nuestra</h2>
          <h1 class="text-6xl font-bold text-green-600 mb-6">GALERÍA</h1>
          <p class="text-lg mb-12">
            Revive nuestros momentos y explora la colección de recuerdo y
            eventos que reflejan la escencia de nuestra universidad.
          </p>
        </div>
        <div
          class="right col-span-12 md:col-span-6 flex justify-center items-center"
        >
          <div
            class="image relative"
            style="background-image: url('/img/start-1.jpg')"
          >
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto py-20">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(value, key) in ListaEvents" :key="key"
            class="overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:scale-105 group"
          >
            <div
              class="image relative bg-cover bg-center h-64"
              :style="{ 'background-image': 'url(' + value.image + ')' }"
            >
              <span
                class="absolute transition-opacity duration-300 inset-0 bg-gradient-to-r from-green-700 to-slate-900 opacity-80 group-hover:opacity-90"
              ></span>
              <a
               :href="'/evento/' + value.slug"
                class="absolute w-full h-full flex flex-col items-center justify-end text-slate-50 p-3 text-center"
              >
                <h1
                  class="text-lg rounded px-2 text-tuncate overflow-hidden mb-2"
                >
                  {{value.title}}
                </h1>
                <p class="bg-green-500 font-semibold p-2 rounded-md text-sm">
                  {{value.date}}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "GaleriaComponent",
  components: {},

  data() {
    return {
      ListaEvents: [],
    };
  },

  computed: {
    ...mapState(["empresa"]),
  },

  created() {},

  mounted() {
    document.title =
      "Galeria | " +
      (this.empresa.abreviatura ? this.empresa.abreviatura : "-");
    this.getEvent();
  },

  methods: {
    ...mapMutations(["setLoading"]),
    getEvent() {
      this.$http.get("ws_event/list_events").then((res) => {
        this.ListaEvents = res.data.Events;
      });
    },
  },
};
</script>

