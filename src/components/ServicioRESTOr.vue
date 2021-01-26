<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <div v-for="imagen in lstImagenes" :key="imagen.id">
        <b-carousel-slide :img-src="imagen.download_url"></b-carousel-slide>
      </div>
    </b-carousel>

    <p class="mt-4">Slide #: {{ slide }}<br /></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ServicioRESTOr",
  data: () => ({
    slide: 0,
    atributo: 1,
    efectoValor: " ",

    lstImagenes: [
      {
        id: "",
        author: "",
        width: "",
        height: "",
        url: "",
        download_url: "",
      },
    ],
  }),
  created() {},
  mounted() {
    this.obtenerImagenes();
  },

  methods: {
    obtenerImagenes() {
      axios
        .get("https://picsum.photos/v2/list?page=2&limit=10")
        .then((response) => {
          if (response.data) {
            let resultado = response.data;

            resultado.forEach((item) => {
              console.log(resultado);
              this.lstImagenes.push(item);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style scoped>
</style>