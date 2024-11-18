<template>
    <div class="grid grid-cols-7 gap-4 mt-2">
      <div v-for="(item, index) in venueStore.cslab" :key="index" class="bg-gray-200 p-4 rounded-lg">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { VenueStore } from '@/store/VenueStore.js';
  
  export default {
    name: "ClassDisplay",
    setup() {
      const venueStore = VenueStore();
      const items = ref([
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'
      ]);

      console.log(venueStore);
  
      return {
        items,venueStore
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  