<template>
  <div>
    <section class="container mx-auto">
      <div
        class="contacto-1 grid grid-cols-12 py-20 overflow-hidden items-center"
      >
        <div class="left text-left col-span-12 md:col-span-6 px-10">
          <h2 class="text-4xl font-semibold text-slate-950">Contáctenos</h2>
          <p class="text-lg mb-5 text-slate-500">
            (*) Rellena el formulario con información real.
          </p>
          <form action="">
            <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    placeholder="Nombres y apellidos"
                    class="block w-full bg-slate-200 rounded-md shadow-lg border-0 py-4 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xl"
                  />
                </div>
              </div>
              <div class="sm:col-span-6">
                <div class="mt-2">
                  <input
                    type="email"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    placeholder="Correo electrónico"
                    class="block w-full bg-slate-200 rounded-md shadow-lg border-0 py-4 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xl"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <div class="">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    placeholder="Mensaje de contácto"
                    class="block w-full bg-slate-200 rounded-md border-0 py-4 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-xl"
                  ></textarea>
                </div>
              </div>
              <div class="col-span-full">
                <div class="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    class="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    for="push-everything"
                    class="block text-lg font-medium text-slate-500"
                  >
                    Acepto los términos y condiciones</label
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                class="rounded-md bg-green-600 px-5 py-2 text-lg font-semibold text-white shadow-lg hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <i class="fa fas far fa-paper-plane"></i> Enviar
              </button>
            </div>
          </form>
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
    <section class="bg-green-500">
      <div
        class="container mx-auto contacto-2 grid grid-cols-12 py-10 overflow-hidden items-center"
      >
        <div class="left text-left col-span-12 md:col-span-6 px-10">
          <h1 class="text-3xl font-bold text-slate-50">
            Adicional <i class="fa fa-plus"></i>
          </h1>
        </div>
        <div
          class="right col-span-12 md:col-span-6 flex justify-center items-center"
        >
          <div>
            <ul class="flex space-x-6 text-2xl">
              <li class="flex items-center justify-start text-slate-50">
                <a
                  href="#"
                  class="flex bg-slate-50 text-green-600 rounded-full items-center transition duration-500 justify-center shadow-md hover:bg-green-500 hover:text-slate-50 footer-icon mr-3"
                  ><i class="fas fa-envelope"></i
                ></a>
                rsu@unsm.edu.pe.com
              </li>
              <li class="flex items-center justify-start text-slate-50">
                <a
                  href="#"
                  class="flex bg-slate-50 text-green-600 rounded-full items-center transition duration-500 justify-center shadow-md hover:bg-green-500 hover:text-slate-50 footer-icon mr-3"
                  ><i class="fas fa-phone"></i
                ></a>
                +51 930227604
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ContactoComponent",
  components: {},

  data() {
    return {};
  },

  computed: {
    ...mapState(["empresa"]),
  },

  created() {},

  mounted() {
    document.title =
      "Contacto | " +
      (this.empresa.abreviatura ? this.empresa.abreviatura : "-");
  },

  methods: {
    ...mapMutations(["setLoading"]),
  },
};
</script>

