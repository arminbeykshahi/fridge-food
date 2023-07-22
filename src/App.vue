<template>
   
  <div class="header shadow-sm d-flex justify-content-between align-items-center">
     <div class="links ms-4">
        
         <router-link to="/">خانه</router-link>
         <router-link class="ms-4" to="/food">افزودن غذا</router-link>
        
        
     </div>
     <div class="logo me-4">
        <i class="bi bi-amd"></i>
     </div>
  </div>

      <i class="bi bi-arrow-up-circle-fill"></i>
   


      <router-view> </router-view>


      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

<i @click="scrolltotop" class="bi bi-arrow-up-circle-fill"></i>



      




      <div class="footer mt-5">
         <div class="row g-4">
            <div class="col-md-4 text-center">
               <h6 class="text-center">غذا ها </h6>
               <hr>
               <ul class="text-center">
                  <li>کباب برگ</li>
                  <li>جوجه کباب</li>
                  <li>زرشک پلو با مرغ</li>
                  <li>استیک</li>
               </ul>
            </div>
            <div class="col-md-4 text-center">
               <h6 class="text-center">درباره ما</h6>
               <hr>
               <br>
               <p>
                  در این وب سایت با توجه به مواد غذایی که در یخچال منزل دارید غذا مورد نظر به شما پیشنهاد داده میشود
               </p>
              
            </div>
            <div class="col-md-4 text-center">
                <h6 class="text-center">تماس  با ما</h6>
               <hr>
                <span> شماره تماس :<span>0912123456</span></span>
               <br>
               <br>
               <span>آدرس : <span>شهرک غرب- بولوار دادمان</span></span>
               <br>
               <br>
               <i class="bi bi-instagram fs-4"></i>
               <i class="bi bi-whatsapp fs-4 ms-3"></i>
               <i class="bi bi-telegram fs-4 ms-3"></i>
            </div>
         </div>
      </div>




</template>

<script>


export default {

 
   setup () {


      function scrolltotop() {
         
          window.scrollTo({
          top: 0,
          behavior: "smooth",
          });

      }

      scrolltotop()


      return {scrolltotop}
   }
}
</script>

<style>

html {

   direction: rtl !important;
}

a {

   text-decoration: none !important;
   color: black !important;
}

.header {

    width: 100%;
    height: 4rem;
    background-color: #f8f9fa;
    
}

.router-link-active {

    border-bottom: 2px solid black;
   
}

.bi-amd {

   font-size: 1.5rem;
}


.footer {

    width: 100%;
    
}


ul li {

    list-style-type: none;
}


.bi-arrow-up-circle-fill {

  position: fixed;
  bottom: 10px;
  right: 20px;
  color: red !important;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;

}

</style>
