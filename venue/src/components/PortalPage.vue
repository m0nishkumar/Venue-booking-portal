<template >
    <div class="w-full h-[90vh] flex flex-col items-center justify-center space-y-5">
      <h1 class="font-medium text-xl" @click="handlelogin">Login/Register:</h1>
        <form class="w-[400px] rounded-xl shadow h-fit flex flex-col  justify-center space-y-6 bg-slate-100 p-4" v-if="l"  @submit.prevent="submitForm">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" v-model="venue.loginDetails.email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">User name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="venue.loginDetails.name">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="venue.loginDetails.password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> 
          <form class="w-[400px] rounded-xl shadow h-fit flex flex-col  justify-center space-y-6 bg-slate-100 p-4" v-if="l==0" @submit.prevent="submitLogin">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" v-model="venue.loginDetails.email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="venue.loginDetails.password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> 
          <h1>{{status}}</h1>
    </div>
</template>
<script>
import { VenueStore } from '@/store/VenueStore';
import {ref} from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';
export default {
    name:"PortalPage",
    setup(){
      const venue=VenueStore();
      const l=ref(0);
      const status=ref("");
      const router = useRouter();
      const handlelogin=()=>{
        console.log(l.value);
        if(l.value==0){
          l.value=1
          console.log(l.value)
        }else{
          l.value=0
        }
      }
      const submitForm=async()=>{
        await axios.post("http://localhost:3001/register",venue.loginDetails);
      }
      const submitLogin=async()=>{
        const res=await axios.post("http://localhost:3001/login",venue.loginDetails);
        console.log(res.data);
        if(res.data=="failed"){
          status.value="Login in failed try again!"
        }else{
          venue.updateLogin(res.data)
          console.log(res.data);
          router.push("/home")
        }
      }
      return{
      l,venue,handlelogin,submitForm,submitLogin,status
    }
    }

}
</script>
<style>
    
</style>