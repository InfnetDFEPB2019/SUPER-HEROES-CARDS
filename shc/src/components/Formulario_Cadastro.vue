<template>

    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="form">
     <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Digite seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome de usuário:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.user"
          required
          placeholder="Digite o nome de seu usuário"
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

     
     

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Concordo com os termos</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>



</template>



<script>
export default {
  name: 'FormCadastro',
  data() {
      return {
        form: {
          email: '',
          name: '',
          user:'',
          checked: []
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
        this.form.user = ''
        this.form.checked = []
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
#form{
    border: 10px solid red;
    width:50%;
    font-size:20px;
    margin:0 auto;
    margin-top: 2%

}

</style>