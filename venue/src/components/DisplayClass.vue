<template>
    <div class="grid grid-cols-8 gap-4 mt-2">
      <div v-for="(item, index) in venueStore.classRooms" :key="index" class="bg-gray-200 p-4 rounded-lg">
        {{ item.venue }}
      </div>
    </div>
  </template>
  
  <script>
    import { VenueStore } from '@/store/VenueStore.js';
    import { ref } from 'vue';
    export default {
    name:"DisplayClass",
    setup(){
      const venueStore = VenueStore();
      const items = ref([
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'
      ]);

      return{
        items,venueStore
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  