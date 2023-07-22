<template>
       
       <div class="intro mt-3 scale-up-center">
         <div class="container">
           <div class="row">
             <div class="col-md-6">
             <div class="mt-5 text-center">
               <br>
               <br>
               <br>
               
               
                        <h2 class="me-5"> 
                لذت آشپزی 
              </h2>
              <br>
              <br>
              <h2 class="ms-5">
حرفه ای با من!
              </h2>
             </div>
             </div>
              <div class="col-md-6 text-center">
                
                <img src="../assets/Chef_Isometric.png" alt="" width="90%" height="90%">
                 
              </div>
           </div>
         </div>
       </div>
       <br>
       <br>

       <div class="example mt-5">
         <div class="container">
           <div class="row ms-3"><h5>نمونه غذا ها :</h5></div>
           <br>
           <div class="row g-3">
             <div class="col-md-4">
               <div class="card h-100 mx-auto" style="width: 18rem;">
                <img src="../assets/barg.jpg" class="card-img-top" alt="...">
                 <div class="card-body text-center">
                    <h5 class="card-title text-muted">کباب برگ</h5>
                 </div>
              </div>
             </div>
             <div class="col-md-4">
                <div class="card h-100 mx-auto" style="width: 18rem;">
                <img src="../assets/napolitan.jpg" class="card-img-top" alt="...">
                 <div class="card-body text-center">
                    <h5 class="card-title text-muted">پیتزا ناپولیتن</h5>
                 </div>
              </div>
             </div>
             <div class="col-md-4">
                <div class="card h-100 mx-auto" style="width: 18rem;">
                <img src="../assets/joojekabab.jpg" class="card-img-top" alt="...">
                 <div class="card-body text-center">
                    <h5 class="card-title text-muted">جوجه کباب</h5>
                 </div>
              </div>
             </div>
           </div>
         </div>
       </div>

       <br>
       <br>
       <br>

      
       
       <div class="namayesh">
         <div class="container">
           <div class="row g-3">
             <div class="col-md-4" v-for="food in foods" :key="food.id">
               <div class="card h-100">
                 <div class="card-body">
                    <h6>{{food.foodName}} : </h6> 
                    <br>
                    <ul>
                      <li v-for=" details in food.foodDetail" :key="details.id">
                         {{details}}
                      </li>
                    </ul>
                 </div>
               </div>

             </div>
           </div>
           <br>
            <h5 class="ms-3 mb-3">تعداد : <span>{{foods.length}}</span></h5>
         </div>
        
       </div>

        
      
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {

  setup() {


    const detail = ref('')

    const foods = ref([])


    function getfood() {

      axios.get('http://localhost:3000/posts')
     .then(function (response) {
   
     foods.value = response.data

     console.log(foods.value);

     })
     .catch(function (error) {
   
      console.log(error);
  })
      
    }

    getfood()

   


    return {detail,getfood,foods}
  }

}
</script>

<style>


.scale-up-center {
	-webkit-animation: scale-up-center 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
 animation: scale-up-center 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


</style>