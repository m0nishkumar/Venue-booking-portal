<template>
    <div class="container w-full px-0" >
      <table class="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Venue</th>
            <th>purpose</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, index) in storestatus" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ i.venue }}</td>
            <td>{{ i.purpose}}</td>
            <td><div class="flex flex-row items-center justify-start space-x-1"><div :class="{'w-2 h-2 bg-red-500 rounded-full':i.status=='Rejected','w-2 h-2 bg-green-500 rounded-full':i.status=='Accepted','w-2 h-2 bg-yellow-500 rounded-full':i.status=='Pending'}"></div><h1>{{i.status}}</h1></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import {ref} from 'vue'
  export default {
    name:"HomeTable",
    data() {
      return {
        people: [
          { firstName: 'CS lab 1', lastName: 'VISVA Event', email: 'Pending' },
          { firstName: 'Auditorium', lastName: 'VISVA Event', email: 'Approved' },
          { firstName: 'CS lab 5', lastName: 'VISVA Event', email: 'Rejected' },
          { firstName: 'IT lab 1', lastName: 'VISVA Event', email: 'Pending' },
          { firstName: 'IT lab 8', lastName: 'VISVA Event', email: 'Approved' },
          { firstName: 'WW 255', lastName: 'VISVA Event', email: 'Pending' },
          { firstName: 'CS lab 4', lastName: 'VISVA Event', email: 'Rejected' },
          
        ]
      };
    },setup(){
      const storestatus=ref([]);
      const getstatus=async()=>{
        const response = await axios.get("http://localhost:3001/getstatus");
          storestatus.value = response.data; 
          console.log("innn",storestatus.value);
      }
      getstatus();
      return {
      storestatus,getstatus
    }
    }

  };
  </script>
  
  <style scoped>
  .scrollable{
    overflow-y: auto;
  }
  </style>
  