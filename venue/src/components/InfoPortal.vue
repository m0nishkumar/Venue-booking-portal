<template >
    <div class="w-full h-[90vh] flex flex-col items-center justify-center space-y-5">
      <h1 class="font-medium text-xl">confirm your Booking:</h1>
        <form class="w-fit rounded-xl shadow h-fit flex flex-col  justify-center space-y-6 bg-slate-100 p-4" @submit.prevent="sendDataToExpress">
            <div class="flex flex-row space-x-5">
                <div class="form-group w-[340px]">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="exampleInputEmail1">Venue</label>
              <input type="text" class="form-control" id="exampleInputEmail1" :value="venue.clickedVenue[0].venue" aria-describedby="emailHelp" placeholder="Enter your venue...">
            </div>
            <div class="form-group w-[340px]">
                <label class="block text-gray-700 text-sm font-bold mb-2"  for="exampleInputPassword1">Purpose</label>
              <input type="text" class="form-control" id="exampleInputPassword1" v-model="venue.purpose"  placeholder="Enter required purpose...">
            </div></div>
            <div class="flex flex-row justify-between">
                <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                      Date
                    </label>
                    <input class=" appearance-none border rounded py-2 px-3 w-[200px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" :value="venue.date">
                  </div>
                  <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="from-time" >
                      From Time
                    </label>
                    <input class="appearance-none border rounded py-2 px-3 w-[150px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="from-time" type="time" :value="venue.fromTime">
                  </div>
                  <div class="">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="to-time">
                      To Time
                    </label>
                    <input class="appearance-none border rounded w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="to-time" type="time" :value="venue.toTime">
                  </div>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">I accept the terms and condition of BIT.</label>
            </div>
            <div class="flex flex-row space-x-3">
            <button type="submit" class="btn btn-primary w-[50%]" >Submit</button>
            <button type="submit" class="btn bg-red-500 text-white w-[50%]">Cancel</button>
        </div>
          </form> 
    </div>
</template>
<script>
import { VenueStore } from '@/store/VenueStore';
import axios from 'axios';
export default {
    name:"InfoPortal",
    setup(){
        const venue=VenueStore();
        const sendDataToExpress=async ()=>{
            venue.updatePurpose()

            try{
                console.log(venue.clickedVenue[0])
                await axios.post("http://localhost:3001/admin",venue.clickedVenue[0])
            }
            catch(error){
                console.error(error)
            }

        }


        return{
           venue,sendDataToExpress
        }
    }
}
</script>
<style>
    
</style>