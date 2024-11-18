<template lang="">
    <div>
      <div class="flex flex-row justify-around">
        <div class="flex-1 m-4">
          <div class="fixed top-[12%] w-[417px] h-[228px] glass p-[12px] rounded-lg flex flex-col justify-around">
            <h1 class="text-[25px] font-medium text-center">Hello, <span class="font-[600]">{{venue.loginDetails.name}}</span> 👋</h1>
            <p class="text-gray-500 text-center">Designers today are not bound by rigid rules but are encouraged to experiment and innovate, blending elements from various morphism.</p>
            <div class="flex flex-row items-center justify-around mt-3">
              <div class="flex flex-col items-center justify-center px-3 py-[10px] rounded-lg bg-green-400 text-white">
                <h1>Approved</h1>
                <p>10</p>
              </div>

              <div class="flex flex-col items-center justify-center px-3 py-[10px] rounded-lg bg-yellow-400 text-white">
                <h1>Pending</h1>
                <p>2</p>
              </div>

              <div class="flex flex-col items-center justify-center px-3 py-[10px] rounded-lg bg-red-400 text-white">
                <h1>Rejected</h1>
                <p>4</p>
              </div>
            </div>
          </div>
          <div class="fixed top-[47%] w-[415px] h-[350px] glass bg-white rounded-lg overflow-hidden">
            <HomeTable/>
          </div>
        </div>
      <div class="flex flex-col items-start justify-start pb-4">
      <div class="flex flex-col items-start  justify-start">
        <h1 class="m-3 mt-4 text-lg">Booking Venues:</h1>
      <HomeForm/>
      </div>
      <div class="mt-4" v-if="!venue.bysearch">
        <h1 class="py-2">Display Auditorium:</h1>
        <AuditoriumDisplay/>
      </div>

      <div class="mt-4" v-if="!venue.bysearch">
        <h1 class="py-2">Display Class:</h1>
        <DisplayClass/>
        <Teleport/>
      </div>

      <div class="mt-4" v-if="!venue.bysearch">
        <h1 class="py-2">Display IT-Lab:</h1>
        <DisplayLab/>
      </div>

      <div class="mt-4" v-if="venue.bysearch">
        <h1 class="py-2">Based on search:</h1>
        <SearchDisplay/>
      </div>

      </div>
    </div>
    </div>
</template>
<script>
import HomeForm from "./HomeForm.vue"
import AuditoriumDisplay from "./AuditoriumDisplay.vue"
import HomeTable from "./HomeTable.vue"
import Teleport from "./Teleport.vue"
import DisplayLab from "./DisplayLab.vue"
import DisplayClass from "./DisplayClass.vue"
import { VenueStore } from '@/store/VenueStore.js';
import SearchDisplay from './SearchDisplay'
import axios from 'axios'
export default {
    name:'HomePage',
    components:{
      HomeForm,AuditoriumDisplay,HomeTable,Teleport,DisplayLab,DisplayClass,SearchDisplay
    },
    setup(){
      const venue=VenueStore();
      const fetchApi=async ()=>{
            try{
            const data=await axios.get("http://localhost:3001/getvenue");
            const dataclass=await axios.get("http://localhost:3001/getclass");
            console.log("class",dataclass.data);
            venue.fetchVenue(data.data,dataclass.data)
        }
        catch(error){
                console.error(error)
            }

        }
      fetchApi()
      return{
        venue
      }
    }
}
</script>
<style >
.glass{
  background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 20px 0 rgba(85, 88, 127, 0.37);
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
} 
</style>