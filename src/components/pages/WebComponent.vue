<template>
  <div>
    <section class="container mx-auto">
      <div class="start-1 grid grid-cols-12 overflow-hidden">
        <div class="left text-left py-20 col-span-12 md:col-span-6 px-10">
          <h1 class="text-4xl font-semibold text-slate-950 mb-6">
            ¡Somos un <span class="text-green-600">órgano</span> adscrito a la
            Vicerrectoría <span class="text-green-600">Académica</span>!
          </h1>
          <p class="text-lg mb-12">
            Encargada de coordinar con los demás estamentos académicos y
            administrativos, la planificación, organización y gestión de los
            programas y actividades de su competencia, enmarcadas dentro del
            plan anual de responsabilidad social universitaria, bajo una
            perspectiva académica, investigativa y de extensión y desarrollo de
            la sociedad, con la finalidad de beneficiar a la comunidad en
            armonía con el medio ambiente.
          </p>
          <a
            href="/contacto"
            class="flex w-min items-center border-2 border-green-500 transition duration-500 justify-between bg-white-400 text-green-500 font-bold py-2 px-10 mb-3 rounded-full hover:bg-green-500 hover:text-slate-50"
          >
            <i class="fa fa-headset mr-2"></i> Contáctenos
          </a>
        </div>
        <div class="right col-span-12 md:col-span-6 flex justify-end items-end">
          <div
            class="image relative"
            style="background-image: url('/img/start-1.jpg')"
          >
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-green-400">
      <div class="container mx-auto start-2 grid grid-cols-12 overflow-hidden" v-for="(value, key) in ListaEvents.slice(0, 1)" :key="key">
        <div
          class="right col-span-12 md:col-span-4 flex justify-center items-end"
        >
          <div
            class="image relative overflow-hidden"
              :style="{ 'background-image': 'url(' + value.image + ')' }"
          >
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
        <div
          class="left flex items-center text-right justify-end py-20 col-span-12 md:col-span-8 px-10"
        >
          <div class="flex-col items-end justify-end">
            <p class="text-slate-200 py-3">REALIZADO EL {{value.date}}</p>
            <h1 class="text-4xl font-semibold text-slate-50 mb-6">
             {{value.title}}
            </h1>
            <a
               :href="'/evento/' + value.slug"
              class="flex float-end font-medium w-max items-center border-2 border-slate-50 transition duration-700 justify-between bg-slate-50 text-slate-950 py-2 px-10 mb-3 rounded-full hover:bg-green-500 hover:text-slate-50"
            >
              <i class="fa fa-share mr-2"></i> Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="container mx-auto start-3 grid grid-cols-12 overflow-hidden"  v-for="(value, key) in ListaEvents.slice(1, 2)" :key="key">
        <div
          class="right col-span-12 md:col-span-4 flex justify-center items-start"
        >
          <div
            class="image relative overflow-hidden"
              :style="{ 'background-image': 'url(' + value.image + ')' }"
          >
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
        <div
          class="left flex items-center justify-end text-right py-20 col-span-12 md:col-span-8 px-10"
        >
          <div class="flex-col items-end justify-end">
            <p class="text-green-500 py-3">REALIZADO EL {{value.date}}</p>
            <h1 class="text-4xl font-semibold text-green-500 mb-6">
                           {{value.title}}

            </h1>
            <a
               :href="'/evento/' + value.slug"
              class="flex float-end font-medium w-max items-center border-2 border-gree-500 transition duration-700 justify-between bg-green-500 text-slate-50 py-2 px-10 mb-3 rounded-full hover:bg-green-100 hover:text-slate-950"
            >
              <i class="fa fa-share mr-2"></i> Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "WebComponent",
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
      "Inicio | " + (this.empresa.abreviatura ? this.empresa.abreviatura : "-");
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

