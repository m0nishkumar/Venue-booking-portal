<template>
    <div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"BackendApi",
    setup(){
        const fetchApi=async ()=>{
            try{
            const data=await axios.get("http://localhost:3001/getvenue");
            console.log(data)
        }
            catch(catch){
                console.error(error)
            }

        }
    }
}
</script>
<style>
    
</style>