<template>
    <div>
        <section class="container mx-auto">
            <div class="flex flex-col justify-center items-center py-20">
                <i class="fa fa-face-frown text-9xl text-slate-800"></i>
                <p class="text-4xl font-bold py-5 text-green-600">404</p>
                <p class="text-xl font-light">Lo sentimos, la página no existe dentro de estre cruel mundo.</p>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState} from 'vuex';
export default {
    name: 'NotFound',
    computed: {
        ...mapState(['empresa']),
    },
    mounted() {
        document.title = "No encontrada | RSU";
    },
}
</script>