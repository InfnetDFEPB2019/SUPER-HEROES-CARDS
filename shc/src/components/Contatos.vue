<template>

    <div>
        <br>
    <h1> Fale Conosco </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="form">
     <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Digite seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Email:"
        label-for="input-3"
        
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite seu email"
        ></b-form-input>
      </b-form-group>

     
       <b-form-textarea
      id="textarea"
      v-model="form.text"
      placeholder="Digite o seu comentário"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

      <div id='botões'>
        <b-button pill type="submit" variant="primary" aria-pressed="false" class="m-2" id='b_login'>Enviar Comentário</b-button>
        <b-button pill type="reset" variant="danger" aria-pressed="false" class="m-2" id='b_recuperar'>Resetar </b-button>
      </div>
    </b-form>
    
  </div>

</template>



<script>
export default {
  name: 'Contatos',
  data() {
      return {
        form: {
          email: '',
          name: '',
          text:'',
          
        },
        
        show: true
      }
},
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
      
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }




</script>

<style scoped>
h1 {
  font-size:50px;
  margin-top:10px;
  color:black;
  font-family: "theboldfont";
}
#form{
    border: 1px white;
    width:50%;
    font-size:20px;
    margin:0 auto;
    margin-top: 2%;
    max-width: 500px;

}



#b_login{
  font-size: 20px;
  width:200px;
  background-color: green;
}

#b_recuperar{
  font-size: 20px;
  width:200px;
}


#botões{
  max-width:500px;
  margin:0 auto;
}





</style>