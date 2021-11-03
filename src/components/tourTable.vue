<template>
<div>
  <modal-box v-if="onetour.data" v-model="isModalActive" title="Sample modal">
    <p>title: <b>{{onetour.data.data.name}}</b></p>
     <p>country: <b>{{onetour.data.data.country}}</b></p>
      <p>city: <b>{{onetour.data.data.city}}</b></p>
    <p>{{onetour.data.data.description}}  </p>
  </modal-box>

  <modal-box v-model="modalDanger" large-title="Please confirm" button="danger" @click="deleteitem(id)" has-cancel>
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </modal-box>

 
  <table>
    <thead>
    <tr>
       
      <th>Name  </th>
      <th>Company</th>
      <th>City</th>
      <th>Progress</th>
      <th>Created</th>
      <th></th>
    </tr>
    </thead>
    <tbody v-if="alltours.data">
    <tr v-for="client in alltours.data.data" :key="client._id">
      
      <td data-label="Name">{{ client.name }}</td>
      <td data-label="Company">{{ client.country }}</td>
      <td data-label="City">{{ client.city }}</td>
       
      <td data-label="Created">
        <small class="text-gray-500 dark:text-gray-400" :title="client.created">{{ client.created }}</small>
      </td>
      <td class="actions-cell">
        <jb-buttons type="justify-start lg:justify-end" no-wrap>
          <jb-button class="mr-3" color="success" :icon="mdiEye" small @click="modalhandl(client._id)" />
          <jb-button color="danger" :icon="mdiTrashCan" small @click="modalDangerHandle(client._id)" />
        </jb-buttons>
      </td>
    </tr>
    </tbody>
  </table>
   
</div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import ModalBox from '@/components/ModalBox'
import CheckboxCell from '@/components/CheckboxCell'
import Level from '@/components/Level'
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'
import UserAvatar from '@/components/UserAvatar'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'ClientsTable',
  components: {
    ModalBox,
    CheckboxCell,
    Level,
    JbButtons,
    JbButton,
    UserAvatar
  },
  props: {
    checkable: Boolean,
    
  },

  computed: mapGetters(['alltours','onetour']),
  methods:{
    ...mapActions(['fetchtours','fetchtour','deletetour']),
    modalhandl(id){
      this.isModalActive= !this.isModalActive
      this.id =  id,
      this.fetchtour(this.id)
    },
    modalDangerHandle(id){
      this.modalDanger = !this.modalDanger;
      this.id = id;
    },
    deleteitem(id){
      console.log('hello', id)
      this.deletedestintions(id)
    }
  },
  created(){
     this.fetchtours()
  },

  data(){
    return {id:null, isModalActive:false, modalDanger:false}
  },
 
  
   
}
</script>
