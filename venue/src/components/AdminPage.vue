<template>
    <div class="flex flex-row items-center justify-center">
      <div class="container px-0 w-[70%] shadow rounded-lg mt-10">
        <table class="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Timing</th>
              <th>Accept/Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(venue, index) in venues" :key="venue._id">
              <td>{{ index + 1 }}</td>
              <td>{{ venue.name }}</td>
              <td>{{ venue.venue }}</td>
              <td>{{ venue.date }}</td>
              <td>{{ venue.time[0]}}-{{venue.time[1]}}</td>
              <td><div class="flex flex-row items-center justify-start space-x-2"><div class="text-green-700" @click="handleAccept(venue)">accept</div><div class="text-red-500" @click="handleReject(venue)">reject</div></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
 
  import { ref,watch} from 'vue';
  
  export default {
    name: "AdminPage",
    setup() {

      const venues = ref([]);
      const refresh=ref(0)
      const handleAccept=async(i)=>{
        try{
            if(i.type=="auditorium"){
            await axios.post("http://localhost:3001/bookvenue",i);}
            else if(i.type=="classroom"){
            await axios.post("http://localhost:3001/bookvenueclass",i);}
            fetchApi();
        }catch (error) {
          console.error(error);
        }
        console.log("inmn");
      }

      const handleReject=async(i)=>{
        try{
            
            await axios.post("http://localhost:3001/reject",i);
            fetchApi();
        }catch (error) {
          console.error(error);
        }
      }

      const fetchApi = async () => {
        try {
          const response = await axios.get("http://localhost:3001/getadmin");
          venues.value = response.data; 
          console.log("fetchapi")
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchApi();
      watch(refresh, () => {
        console.log("hi")
      fetchApi();
    });

      return { venues,handleAccept,refresh, handleReject };
    }
  };
  </script>
  
  <style scoped>
  .scrollable {
    overflow-y: auto;
  }
  </style>
  