<template>
    <div class="grid grid-cols-5 gap-4 mt-2">
      <div v-for="(item, index) in venueStore.auditorium" :key="index" @click="handlePortal(item)" :class="{'bg-slate-600': venueStore.booked==true ,'text-white': venueStore.booked==true}" class="bg-gray-200 p-4 rounded-lg">
        {{ item.venue }}
      </div>
    </div>
  </template>
  
  <script>
    import { VenueStore } from '@/store/VenueStore.js';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    export default {
    name:"AuditoriumDisplay",
    setup(){
      const router = useRouter();
      const venueStore = VenueStore();
      const items = ref([
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'
      ]);
      const handlePortal=(i)=>{
        venueStore.updateClickedVenue(i)
        router.push("/portal")
      }
      return{
        items,venueStore,handlePortal
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  