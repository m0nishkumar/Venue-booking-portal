<template>
    <div class="grid grid-cols-8 gap-4 mt-2">
      <div v-for="(item, index) in items" :key="index" class="bg-gray-200 p-4 rounded-lg">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"ClassDisplay",
    data() {
      return {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  