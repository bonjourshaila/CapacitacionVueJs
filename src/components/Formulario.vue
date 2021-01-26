<template>
  <div class="formulario">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-4">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            
            <!-- Altura -->
            <b-form-group
              id="input-group-2"
              label="Altura:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.altura"
                placeholder="Ingresa altura"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Anchura -->
            <b-form-group
              id="input-group-2"
              label="Anchura:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.anchura"
                placeholder="Ingresa anchura"
                required
              ></b-form-input>
            </b-form-group>

            <!-- Select de efectos -->
            <b-form-group id="input-group-3" label="Efecto:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.efecto"
                :options="efectos"
                required
              ></b-form-select>
            </b-form-group>


            <!-- Botones -->
            <b-button v-on:click="enviarValores()" variant="primary">Aceptar</b-button>
            <b-button type="reset" variant="danger ml-4">Reset</b-button>
            <br>
            <br>
            <b-button v-on:click="mostrarOriginal()" variant="primary">Mostrar original</b-button>
          </b-form>

          <!-- Imprime valores del formulacrio -->
          <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card> -->
        </div>


        <!-- Imagenes  -->
        <div col-8>
          <div v-if="bandera">          
          <ServicioREST :datosRecibir="form"></ServicioREST>
          </div>

          <div v-if="banderaOr">          

          <ServicioRESTOr :datosRecibir="form"></ServicioRESTOr>
          
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ServicioREST from "@/components/ServicioREST";
import ServicioRESTOr from "@/components/ServicioRESTOr";


export default {
  components:{
    
    ServicioREST,
    ServicioRESTOr
    
  },
  data() {
    return {
      form:  {
        altura: 0,
        anchura: 0,
        efecto: null,
        checked: [],
      },
      efectos: [
        { text: "Elige uno", value: null },
        "grayscale",
        "blur",
      ],
      show: true,
      bandera:false,
      banderaOr:false,
    };
  },
  props:{
    imagen:{
      altura: 0,
      anchura: 0,
      efecto: null
        
    }

  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },

    enviarValores(){
      this.bandera=true;
    },
    mostrarOriginal(){
      this.banderaOr=true;
      this.bandera=false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.altura = "";
      this.form.anchura = "";
      this.form.efecto = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
        this.bandera=false;
        this.banderaOr=false;
      });
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
