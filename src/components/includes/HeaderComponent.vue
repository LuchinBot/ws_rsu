<template>
  <div>
    <section class="container mx-auto">
      <nav class="py-10 px-6 top-0 z-10 w-full">
        <div class="flex justify-between items-center">
          <a href="#" class="text-2xl font-light text-green-600"><span class="font-bold">RSU</span> UNSM</a>
          <div>
            <ul class="flex space-x-6 font-medium">
              <li><a href="index.html" class="">Inicio</a></li>
              <li><a href="areas.html" class="">Áreas</a></li>
              <li><a href="contacto.html" class="">Contáctenos</a></li>
              <li>
                <a href="galeria.html"
                  class="px-5 py-2 transition duration-500 bg-green-600 text-slate-50 rounded-full hover:bg-green-500">Nuestra
                  Galeria</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HeaderComponent',
	data() {
		return {
		}
	},
	computed: {
		...mapState(['loading', 'empresa'])
	},
	methods: {
		...mapMutations(['setLoading']),
		...mapActions(['loadObjEmpresa']),
	},
	mounted() {
		this.loadObjEmpresa()
	}
}
