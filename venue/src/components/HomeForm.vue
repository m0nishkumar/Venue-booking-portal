<template>
    <div class="mt-0">
        <div class="container mx-auto  flex flex-row items-center justify-center ">
            <form class="w-fit glass p-[30px] py-3" @submit.prevent="submitForm">
                <div class="flex flex-row items-center justify-center space-x-12">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <select class=" w-[300px] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" v-model="venue.venue">
                    <option disabled value="">Select from the venues</option>
                    <option :key="1" value="auditorium">Auditorium</option>
                    <option :key="2" value="cslab">CS/IT labs</option>
                    <option :key="3" value="classRooms">Classrooms</option>
                </select>                
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                  Date
                </label>
                <input class=" appearance-none border rounded py-2 px-3 w-[200px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" v-model="venue.date">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="from-time">
                  From Time
                </label>
                <input class=" appearance-none border rounded py-2 px-3 w-[150px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from-time" type="time" v-model="venue.fromTime">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="to-time">
                  To Time
                </label>
                <input class=" appearance-none border rounded w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="to-time" type="time" v-model="venue.toTime">
              </div>
              </div>
              <div class="flex items-center justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
    </div>
  </template>
  
  <script>
  import {ref } from 'vue';
  import {VenueStore} from '@/store/VenueStore.js'
  export default {
    name:"HomeForm",
    setup(){
        const venue=VenueStore();
        const formData=ref({
            fromTime:'',
            toTime:'',
            venue:'',
            date:'',
        })
        async function submitForm(){
            venue.search();
            venue.updateSearch(venue.filteredCslab1());
        }
        return{
            formData,venue,
            submitForm,
        }
    }
  };
  </script>
  
  <style scoped>
  /* You can add custom styles for your form here */
  .glass{
    background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 20px 0 rgba(85, 88, 127, 0.37);
backdrop-filter: blur( 6px );
-webkit-backdrop-filter: blur( 6px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
width:fit-content;
  }
  </style>
  