<template>
    <div>
    <section class="container mx-auto">
      <div class="area-1 grid grid-cols-12 py-20 overflow-hidden items-center">
        <div class="left text-left col-span-12 md:col-span-6 px-20 mb-12">
          <h2 class="text-4xl font-semibold text-slate-950">Unidad de</h2>
          <h1 class="text-4xl font-bold text-green-600 mb-6">
            Extensión Cultural y Proyección
          </h1>
          <p class="text-lg mb-5">
            Encargada de la información sobre eventos culturales y convento académicos.
          </p>
          <ul>
            <li class="mb-3 text-xl font-semibold ml-4 text-green-950"><i class="fa fa-circle mr-2 text-green-400"></i> Área de Música</li>
            <li class="mb-3 text-xl font-semibold ml-4 text-green-950"><i class="fa fa-circle mr-2 text-green-400"></i> Área de Danza</li>
          </ul>
        </div>
        <div class="right col-span-12 md:col-span-6 flex justify-center items-center">
          <div class="image relative" style="background-image: url('/img/start-1.jpg');">
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-green-400">
      <div class="container mx-auto area-1 grid grid-cols-12 py-20 overflow-hidden items-center">
        <div class="left text-left col-span-12 md:col-span-6 px-20">
          <h2 class="text-4xl font-semibold text-slate-950">Unidad de</h2>
          <h1 class="text-4xl font-bold text-slate-50 mb-6">
            Formación Integral Académica
          </h1>
          <p class="text-lg mb-12">
            Encargada de la información sobre evventos culturales y convento académicos.
          </p>
        </div>
        <div class="right col-span-12 md:col-span-6 flex justify-center items-center">
          <div class="image relative" style="background-image: url('/img/start-3.jpg');">
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto">
      <div class="area-1 grid grid-cols-12 py-20 overflow-hidden items-center">
        <div class="left text-left col-span-12 md:col-span-6 px-20">
          <h2 class="text-4xl font-semibold text-slate-950">Unidad de</h2>
          <h1 class="text-4xl font-bold text-green-600 mb-6">
            Gestión Organizacional y Sostenibilidad
          </h1>
          <p class="text-lg mb-12">
            Encargada de la información sobre evventos culturales y convento académicos.
          </p>
        </div>
        <div class="right col-span-12 md:col-span-6 flex justify-center items-center">
          <div class="image relative" style="background-image: url('/img/start-2.jpg');">
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from "vuex";
  
  export default {
    name: "AreaComponent",
    computed: {
      ...mapState(["empresa"]),
    },
    components: {},
    created() {},
    mounted() {
      document.title =
        "Areas | " +
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
  