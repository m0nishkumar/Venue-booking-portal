<template>
    <div class="grid grid-cols-5 gap-4 mt-2">
      <div v-for="(item, index) in venueStore.searchResult" :key="index" class="bg-gray-200 p-4 rounded-lg" @click="handlePortal(item)">
        {{ item.venue }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { VenueStore } from '@/store/VenueStore.js';
  import { useRouter } from 'vue-router';
  export default {
    name: "SearchDisplay",
    setup() {
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
      return {
        items,venueStore,handlePortal
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  