import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa los iconos que vas a usar
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Agrega los iconos a la biblioteca
library.add(fas, far, fab);

// Registra el componente globalmente
Vue.component('font-awesome-icon', FontAwesomeIcon);
