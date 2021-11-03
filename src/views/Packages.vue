<template>
<div>
  <div  class="fixed top-10 z-50 px-10 py-5 bg-white shadow-sm right-0 h-screen"  v-if="isModalActive" title="Sample modal"  >
    <div class="font-bold text-2xl"> create Destination</div>
    <hr class="my-2 mb-4"/>
    
     
      <div class="flex space-x-3">
    <div class="w-1/2"> <label>title</label>
     <input type="text" v-model="form.name" class="block rounded-xl bg-gray-50 outline-none px-8" placeholder="title of destination"/>
   </div>
 <div class="w-1/2">  <label for="">description</label>
   <textarea rows="3" v-model="form.description" class="rounded-xl"></textarea></div> </div>
   <div class="flex space-x-3"> <div class="w-1/2"> <label>country</label>
     <input type="text" v-model="form.country" class="block rounded-xl bg-gray-50 outline-none px-8" placeholder="country"/>
  </div>  <div class="w-1/2"><label>city</label>
     <input type="text" v-model="form.city" class="block rounded-xl bg-gray-50 outline-none px-8" placeholder="city"/>
</div> </div>
      <label>map link</label>
     <input type="text" v-model="form.mapLink" class="block rounded-xl bg-gray-50 outline-none px-8" placeholder="map link"/>
    <div class="flex"><div class="w-1/2">
    <label>Cover Image</label>
     <input  type="file" @change="onFileChange" class="block bg-gray-50 outline-none " placeholder="cover image"/>
    </div><div class="w-1/2">
    <button v-on:click="handleSubmit">submit</button>
    <!-- <label>Images</label>
     <input type="file" @change="form.images" class="block  bg-gray-50 outline-none " placeholder="images"/> -->
    </div></div> 

  </div>

  <title-bar :title-stack="titleStack" />
  <hero-bar>Tables</hero-bar>
  <button @click="openModal" >create Destination</button>
  <main-section>
    <div></div>

    <card-component class="mb-6" title="Clients" :icon="mdiAccountMultiple" has-table>
      <clients-table checkable   />
    </card-component>
    </main-section>
 </div>
</template>

<script>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '@/components/MainSection'
import Notification from '@/components/Notification'
import ClientsTable from '@/components/ClientsTable'
import CardComponent from '@/components/CardComponent'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import BottomOtherPagesSection from '@/components/BottomOtherPagesSection'
import ModalBox from '@/components/ModalBox'
import TitleSubBar from '@/components/TitleSubBar'
import  {mapGetters, mapActions} from 'vuex'


export default {
  name: 'Tables',
  components: {
    TitleSubBar,
     ModalBox,
    MainSection,
    HeroBar,
    TitleBar,
    CardComponent,
    ClientsTable,
    Notification,
    BottomOtherPagesSection
  },
  computed: mapGetters(['']),
  methods:{
    ...mapActions(['createdestinations']),
    openModal(){
      this.isModalActive = !this.isModalActive
    },
    onFileChange(e) {
     
  this.form.imageCover =e.target.files[0]
},
 
 
    handleSubmit(){
      
       
  let data = {
    name: this.form.name,
    description: this.form.description,
    country: this.form.country,
    city: this.form.city,
    mapLink: this.form.mapLink,
    imageCover: this.form.imageCover,
    images:null
  }
  this.createdestinations(data)
    }
  },
    
    data(){
      return{
isModalActive:false,
 form:{
   name:null,
   description:null,
   country:null,
   city:null,
   mapLink:null,
   imageCover:null,
   images:null
 }
      }
    },
  setup () {
    const titleStack = ref(['Admin', 'Packages'])

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTableOff
    }
  }
}
</script>
 