<template>

    <div>
        <br>
    <h1> Cadastro </h1>
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

       <b-form @submit.stop.prevent id="input-4" >
        <label for="text-password">Senha</label>
        <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.senha" required minlength="8" maxlength="20" placeholder="Digite uma senha"></b-input>
        <b-form-text id="password-help-block">
        Sua senha deve ter de 8-20 caracteres, sem espaços. 
        </b-form-text>
        </b-form>
     

      <b-form-group id="input-group-5">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Concordo com os termos</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

    

      <div id='botões'>
        <b-button pill type="submit" variant="primary" aria-pressed="false" class="m-2" id='b_login'>Cadastrar</b-button>
        <b-button pill type="reset" variant="danger" aria-pressed="false" class="m-2" id='b_recuperar'>Resetar </b-button>
      </div>
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
h1{
    font-size: 30px;
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