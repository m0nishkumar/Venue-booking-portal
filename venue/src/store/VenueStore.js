
import { defineStore } from 'pinia';

export const VenueStore = defineStore({
  id: 'VenueStore',
  state: () => ({
    auditorium: [{venue:"Main auditorium",bookedDetails:[{date:'2024-04-09',fromTime:'9:00',toTime:'10:00'}],booked:false,type:"auditorium"},{venue:"Vedhanayagam",bookedDetails:[{date:'2024-04-09',fromTime:'9:00',toTime:'10:00'}],booked:false,type:"auditorium"},{venue:"Seminar Hall 1",bookedDetails:[{date:'2024-04-09',fromTime:'9:00',toTime:'10:00'}],booked:false,type:"auditorium"},{venue:"Seminar Hall 2",bookedDetails:[{date:'2024-04-09',fromTime:'9:00',toTime:'10:00'}],booked:false,type:"auditorium"},{venue:"Seminar Hall 3",bookedDetails:[{date:'2024-04-09',fromTime:'9:00',toTime:'10:00'}],booked:false,type:"auditorium"}],
    cslab:["CS Lab1","CS Lab 2","CS Lab1","CS Lab 2","CS Lab1","CS Lab 2","CS Lab1","CS Lab 2","CS Lab1","CS Lab 2"],
    classRooms:["WW100","WW101","SF100","SF122","SF147","IT154","IT123","WW100","WW101","SF100","SF122","SF147","IT154","IT123","WW100","WW101","SF100","SF122","SF147","IT154","IT123"]
    ,fromTime:'',
    toTime:'',
    venue:'',
    date:'',
    bysearch:false,
    loginDetails:{name:"",password:"",email:""},
    count:0,
    purpose:"",
    searchResult:[],
    clickedVenue:[{_id:0,venue:"",bookedDetails:[],booked:false,type:''}],

  }),
  getters: {
    filteredCslab1: (state) => () => {
      return state[state.venue].filter(item => {
        let result=true;
        for(let i=0;i<item.bookedDetails.length;i++){
            const itemDate = new Date(item.bookedDetails[i].date)
            const filterDate = new Date(state.date);
            const itemFromTime = new Date(`1/1/23 ${item.bookedDetails[i].time[0]}`);
            const itemToTime = new Date(`1/1/23 ${item.bookedDetails[i].time[1]}`);
            const filterFromTime = new Date(`1/1/23 ${state.fromTime}`);
            const filterToTime = new Date(`1/1/23 ${state.toTime}`);
            console.log(itemFromTime,itemToTime,filterFromTime,filterToTime);
            if((itemDate.toDateString() === filterDate.toDateString()) && ((itemFromTime >= filterFromTime && itemFromTime <= filterToTime) ||  
              (itemToTime >= filterFromTime && itemToTime <= filterToTime)) ){
                result=false
            }
        }
        if(result==true){
            item.booked=true
        }
        return result


        // const itemDate = new Date(item.date);
        // const itemFromTime = new Date(`1/1/23 ${item.fromTime}`);
        // const itemToTime = new Date(`1/1/23 ${item.toTime}`);
        // const filterDate = new Date(fdate);
        // const filterFromTime = new Date(`1/1/23 ${fromTime}`);
        // const filterToTime = new Date(`1/1/23 ${toTime}`);

        // const dateResult=itemDate.filter((i)=>{
        //     return(i==filterDate)
        // })
        // console.log(dateResult);
        // if(dateResult.length()>0){
        //     return true;
        // }else{
        //     return false;
        // }
        

        // const isSameDate = itemDate.toDateString() === filterDate.toDateString();

        // const isTimeOverlap = 
        //   (itemFromTime >= filterFromTime && itemFromTime <= filterToTime) ||  
        //   (itemToTime >= filterFromTime && itemToTime <= filterToTime);       
  
      });
    }
  },  
  actions: {
    increment(){
        this.count++;
    },
    updateValues(payload) {
        this.fromTime=payload.fromTime
        this.toTime=payload.toTime
        this.date=payload.date
        this.venue=payload.venue
    },
    search(){
        console.log("hii")
        this.bysearch=true
  },
  updateSearch(payload){
    this.searchResult=payload
  },
  updateClickedVenue(items){
    this.clickedVenue[0].venue=items.venue
    // this.clickedVenue[0].date=this.date
    // this.clickedVenue[0].time=[this.fromTime,this.toTime]
    this.clickedVenue[0].bookedDetails=[{date:this.date,time:[this.fromTime,this.toTime],purpose:this.purpose}]
    this.clickedVenue[0].booked=items.booked
    this.clickedVenue[0].type=items.type
    this.clickedVenue[0]._id=items._id
  },
  updateLogin(i){
    this.loginDetails=i;
  }
  ,
  updatePurpose(){
    this.clickedVenue[0].bookedDetails=[{date:this.date,time:[this.fromTime,this.toTime],purpose:this.purpose}]
  },
  fetchVenue(items,items1){
    this.auditorium=items
    this.classRooms=items1
  }
  }
});
