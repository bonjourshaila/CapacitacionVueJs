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
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      
      <div v-for="imagen in lstImagenes" :key="imagen.id">
        <b-carousel-slide :img-src="url+imagen.id+'/'+anchuraValor+'/'+alturaValor+'?'+efectoValor"></b-carousel-slide>
      </div>
    </b-carousel>
    
    

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Altura: {{datosRecibir.altura}}<br>
      Achura: {{datosRecibir.anchura}}<br>
      Estilo: {{datosRecibir.efecto}}<br>
      
    </p>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ServicioREST",
  components:{

  },props:{
    datosRecibir:{
      altura: 0,
      anchura: 0,
      efecto: null
    }
  },
  data:()=>({
    slide: 0,
    atributo:1,
    alturaValor: 0,
    anchuraValor: 0,
    efectoValor: " ",
    url: "https://picsum.photos/id/",
    
    lstImagenes:[{
      id:"",
      author:"",
      width:"",
      height:"",
      url:"",
      download_url:""
    }]
  }),
  created(){
    
  },
  mounted() {
    
      this.obtenerImagenes();
   

    this.obtenerValores(this.datosRecibir);

    

  },

  methods:{

    obtenerValores(valores){
      this.efectoValor = valores.efecto;
      this.alturaValor = valores.altura;
      this.anchuraValor = valores.anchura;
    },

    // obtenerDatos(){
    //   return new Promise((resolve, reject) => {
    //     axios.get('https://jsonplaceholder.typicode.com/todos/' + this.atributo)
    //         .then((result) => {
    //           console.log('Datos del servicio rest: ', result.data);
    //           this.objeto = result.data;
    //           resolve(result.data);
    //         }).catch(error => {
    //       console.log(error);
    //       reject(error);
    //     });
    //   });
    // },
    
  obtenerImagenes(){
    axios.get("https://picsum.photos/v2/list?page=2&limit=10")
        .then(response => {
          if (response.data){
            let resultado = response.data;


            resultado.forEach((item) => {
               console.log(resultado);
              this.lstImagenes.push(item);
            });

          }
        }).catch(error => {
      console.log(error);
    });
  }
  }
}
</script>

<style scoped>

</style>