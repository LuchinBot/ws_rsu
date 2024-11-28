<template>
  <div>
    <section class="container mx-auto">
      <div class="evento-1 grid grid-cols-12 py-10 overflow-hidden items-center">
        <div class="left text-left col-span-12 md:col-span-6 px-10">
          <h2 class="text-2xl font-semibold text-slate-950">
            Realizado el {{ Event[0].date }}
          </h2>

          <h1 class="text-3xl font-semibold text-green-600 mb-6">
            {{ Event[0].title }}
          </h1>

          <p class="text-lg mb-12" v-html="Event[0].description"></p>

          <a
            href="#testimonios"
            class="flex w-max items-center border-2 border-green-500 transition duration-500 justify-between bg-white-400 text-green-500 font-bold py-2 px-10 mb-3 rounded-full hover:bg-green-500 hover:text-slate-50"
          >
            <i class="fa fa-quote-left mr-2"></i> Dejar testimonio
          </a>
        </div>

        <div
          class="right col-span-12 md:col-span-6 flex justify-end items-center"
        >
          <div
            class="image relative"
            :style="{ 'background-image': 'url(' + Event[0].image + ')' }"
          >
            <span class="absolute inset-0 bg-slate-950 opacity-10"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container mx-auto px-10 py-20">
        <h2 class="text-3xl font-semibold text-slate-950">
          Galeria del evento
        </h2>

        <p class="text-lg mb-12">
          <span class="text-green-600 font-semibold">Clickea</span> cualquier
          imagen para verlo más a detalle.
        </p>

        <div class="grid grid-cols-3 gap-4">
          <!-- Galería -->

          <div
            class="overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:scale-105 group"
            v-for="(value, index) in Gallery"
            :key="index"
            @click="openModal(index)">
            <div
              class="image relative bg-cover bg-center h-64"
              :style="{ 'background-image': 'url(' + value.image + ')' }" >
              <span
                class="absolute transition-opacity duration-300 inset-0 bg-gradient-to-r from-green-700 to-slate-900 opacity-50 group-hover:opacity-80"
              ></span>

              <span
                class="transition-opacity duration-300 opacity-0 absolute w-full h-full flex flex-col items-center justify-center text-slate-50 p-3 text-center group-hover:opacity-100"
              >
                <i
                  class="fa-solid fa-up-right-and-down-left-from-center text-3xl"
                ></i>
              </span>
            </div>
          </div>

          <!-- Modal -->

          <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <div
              class="relative bg-white rounded-lg shadow-lg max-w-4xl w-full"
            >
              <!-- Close button -->

              <button
                @click="closeModal()"
                class="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-8 rounded-full z-10"
              >
                <i class="fa fa-times"></i>
              </button>

              <!-- Image and carousel -->

              <div class="relative">
                <img
                  :src="Gallery[currentImageIndex].image"
                  alt="Imagen"
                  class="w-full max-h-[80vh] object-contain"
                />

                <!-- Carousel controls -->

                <button
                  v-if="currentImageIndex > 0"
                  @click="prevImage"
                  class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full"
                >
                  ❮
                </button>

                <button
                  v-if="currentImageIndex < Gallery.length - 1"
                  @click="nextImage"
                  class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full"
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="" id="testimonios">
      <div class="container mx-auto px-10 py-10">
        <h2 class="text-3xl font-semibold text-green-500 mb-4">Testimonios</h2>

        <p class="text-lg mb-8 text-slate-500">
          Deja tu testimonio sobre el evento
        </p>

        <div class="rounded-lg flex flex-col gap-4 mb-6">
          <div class="flex items-start gap-4">
            <div
              class="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center"
              style="width: 100px; height: 100px"
            >
              <img
                :src="randomAvatarUrl"
                alt="Avatar"
                class="w-full h-full rounded-full object-cover"
              />
            </div>

            <div class="flex-grow">
              <h3
                class="text-green-600 font-semibold text-l mb-2"
                id="username"
              >
                {{ username }}
              </h3>

              <!-- Enlazar el valor del textarea a la propiedad testimonial -->

              <textarea
                v-model="testimonial"
                class="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-400 focus:outline-none shadow-md"
                rows="3"
                placeholder="Escribe tu testimonio aquí..."
              ></textarea>

              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <!-- Enlazar el estado del checkbox a la propiedad 'termsAccepted' -->

                  <input
                    type="checkbox"
                    v-model="termsAccepted"
                    id="terminos"
                    class="w-4 h-4 border-gray-300 focus:ring-green-500"
                  />

                  <label for="terminos" class="text-slate-700 text-sm">
                    Acepto los términos y condiciones
                  </label>
                </div>

                <button
                  @click.prevent="submitTestimonial"
                  class="bg-green-500 text-white px-10 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg flex flex-col gap-4 mb-7">
          <div
            class="flex items-start gap-4"
            v-for="(value, key) in Testimonial"
            :key="key"
          >
            <div
              class="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center"
              style="width: 100px; height: 100px"
            >
              <img
                :src="value.avatar"
                alt="Avatar"
                class="w-full h-full rounded-full object-cover"
              />
            </div>

            <div class="flex-grow w-80">
              <h3 class="text-green-600 font-semibold text-l mb-2">
                {{ value.username }} &#8226;

                <span class="text-slate-400 font-light"
                  >hace {{ timeAgo(value.date) }}</span
                >
              </h3>

              <p
                class="text-slate-500 bg-white p-3 font-light rounded-md shadow-md"
              >
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "EventoComponent",
  data() {
    return {
      id: this.$route.params.id,
      randomNumber: Math.floor(Math.random() * 100) + 1,
      Event: [],
      Gallery: [],
      Testimonial: [],
      username: "",
      termsAccepted: false,
      showModal: false,
      currentImageIndex: 0,
    };
  },

  computed: {
    ...mapState(["empresa"]),
    randomAvatarUrl() {
      return `https://robohash.org/${this.randomNumber}.png`;
    },
  },

  watch: {
    "$route.params.id": function (newId) {
      this.id = newId;
      if (!newId) {
        this.$router.push({ name: "/" });
      } else {
        this.getVerificar();
      }
    },
  },

  created() {
    this.getVerificar();
    this.getRandomUsername();
  },

  mounted() {
    document.title =
      "Evento | " + (this.empresa.abreviatura ? this.empresa.abreviatura : "-");
  },

  methods: {
    ...mapMutations(["setLoading"]),
    getVerificar() {
      const endpoint = `ws_event/get_events?id=${this.id}`;
      this.$http
        .get(endpoint)
        .then((res) => {
          if (res.data) {
            this.Event = res.data.Events;
            this.Gallery = res.data.Events[0].gallery;
            this.getTestimonial();
          } else {
            this.$router.push({ name: "/" });
          }
        })
        .catch((error) => {
          console.error("Error fetching event:", error);
        });
    },
    getTestimonial() {
      this.$http
        .get(`ws_testimonial/get_testimonials?id=${this.Event[0].id}`)
        .then((res) => {
          this.Testimonial = res.data.Testimonials;
          console.log(this.Testimonial);
        })
        .catch((error) => {
          console.error("Error fetching event:", error);
        });
    },
    async submitTestimonial() {
      if (!this.termsAccepted) {
        Swal.fire({
          icon: "warning",
          title: "¡Advertencia!",
          text: "Debes aceptar los términos y condiciones.",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#3085d6",
        });
        return;
      }

      const data = {
        codevent: this.Event[0].id,
        username: this.username,
        testimonial: this.testimonial,
      };

      try {
        // Enviar los datos al endpoint utilizando Axios
        await this.$http.post("ws_testimonial/post_testimonials", data);
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Testimonio enviado exitosamente.",
          confirmButtonText: "¡Genial!",
          confirmButtonColor: "#3085d6",
        }).then(() => {
          // Recargar la página después de cerrar la alerta de éxito
          window.location.reload(); // Recarga la página
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "¡Error!",
          text: "Hubo un error al enviar el testimonio.",
          confirmButtonText: "Intentar nuevamente",
          confirmButtonColor: "#d33",
        });
      }
    },
    getRandomUsername() {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          // Acceder al nombre de usuario del primer usuario
          this.username = response.data.results[0].login.username;
        })
        .catch((error) => {
          console.error("Error al obtener el nombre de usuario:", error);
        });
    },
    timeAgo(date) {
      // Obtener la fecha actual
      const currentDate = new Date();

      // Convertir la fecha proporcionada en 'date' a un objeto Date
      const eventDate = new Date(date);

      // Calcular la diferencia en milisegundos
      const difference = currentDate - eventDate;

      // Calcular la diferencia en minutos, horas, días, meses y años
      const minutes = Math.floor(difference / (1000 * 60));
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30)); // Aproximación de mes de 30 días
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)); // Aproximación de año

      // Determinar el formato adecuado
      if (years > 0) {
        return `${years} año${years > 1 ? "s" : ""}`;
      } else if (months > 0) {
        return `${months} mes${months > 1 ? "es" : ""}`;
      } else if (days > 0) {
        return `${days} día${days > 1 ? "s" : ""}`;
      } else if (hours > 0) {
        return `${hours} hora${hours > 1 ? "s" : ""}`;
      } else if (minutes > 0) {
        return `${minutes} minuto${minutes > 1 ? "s" : ""}`;
      } else {
        return "justo ahora";
      }
    },

    //IMAGES
    openModal(index) {
      this.currentImageIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.Gallery.length - 1) {
        this.currentImageIndex++;
      }
    },
  },
};
</script>

