v<template>
  <full-screen-section bg="login" v-slot="{ cardClass, cardRounded }">
    <card-component  :class="cardClass" :rounded="cardRounded" @submit.prevent="submit" form>

      <field label="Login" help="Please enter your login">
        <control v-model="form1.email" :icon="mdiAccount" name="login" autocomplete="username"/>
      </field>

      <field label="Password" help="Please enter your password">
        <control v-model="form1.password" :icon="mdiAsterisk" type="password" name="password" autocomplete="current-password"/>
      </field>

      <check-radio-picker name="remember" v-model="form.remember" :options="{ remember: 'Remember' }" />

      <divider />

      <jb-buttons>
        <jb-button @click="handleLogin" color="info" label="Login"   />
        <jb-button to="/" color="info" outline label="Back" />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '@/components/FullScreenSection'
import CardComponent from '@/components/CardComponent'
import CheckRadioPicker from '@/components/CheckRadioPicker'
import Field from '@/components/Field'
import Control from '@/components/Control'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton'
import JbButtons from '@/components/JbButtons'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
    FullScreenSection,
    CardComponent,
    CheckRadioPicker,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons
  },
  data(){
    return {
      form1:{
        email:'nahom@gmail.com',
        password:1234567
      }
    }
  },
   methods:{
     ...mapActions(['LogIn']),
    async handleLogin  () {
      
  
      try{
        
      
      await this.LogIn({email:this.form1.email, password:this.form1.password})
      // router.push('/')
      this.$router.push({name:"home"})

      }catch(err){
        console.error(err)
      }
    }
   },
  setup () {
    const form = reactive({
      login: 'john@gmail.com',
      pass: 'very-secret-password-fYjUw-',
      remember: ['remember']
    })

    

    return {
      form,
 
      mdiAccount,
      mdiAsterisk
    }
  }
}
</script>
