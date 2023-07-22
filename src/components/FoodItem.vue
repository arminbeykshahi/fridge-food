<template>
  <div class="food mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <div v-if="namayeshalert" class="alert alert-danger w-100">
               لطفا تمامی فیلد ها را پر کنید               
              </div>
               <form @submit.prevent="validation">
                 <div class="mb-3">
                 <label for="foodname" class="form-label">نام غذا :</label>
                 <input type="text" v-model="foodname" class="form-control mt-3 w-100" id="foodname" placeholder="نام غذا...">
                 </div>
                 
                 <p class="mt-5">مواد تشکیل دهنده :</p>

                
                <ul>
                  <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food1">
                   مرغ                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="مرغ" id="food1">
                 </div>

                  </li>
               
                
                <li>
                  <div class="form-check">
                 <label class="form-check-label" for="food2">
                 گوشت                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="گوشت" id="food2">
                 </div>
                </li>

                <li>

                 <div class="form-check">
                 <label class="form-check-label" for="food3">
                 برنج                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="برنج" id="food3">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food4">
                 پیاز                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="پیاز" id="food4">
                 </div>

                 </li>

                 <li>

                 <div class="form-check">
                 <label class="form-check-label" for="food5">
                 گوجه                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="گوجه" id="food5">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food6">
                 سیب زمینی                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="سیب زمینی" id="food6">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food7">
                قارچ                 
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="قارچ" id="food7">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food8">
                  ماکارونی                 
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="ماکارونی" id="food8">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food9">
                  رب گوجه                 
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="رب گوجه" id="food9">
                 </div>

                 </li>

                 <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food10">
                 شیر                  
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="شیر" id="food10">
                 </div>

                 </li>


                  <li>

                  <div class="form-check">
                 <label class="form-check-label" for="food11">
                  پنیر پیتزا                
                 </label>
                 <input v-model="fooddetail" class="form-check-input" type="checkbox" value="پنیر پیتزا" id="food11">
                 </div>

                 </li>
                       
                   
                 </ul>


                 <button type="submit" class="btn btn-success w-100 mt-4">ارسال</button>



               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 


</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
export default {

  setup() {


    const foodname = ref('')
    const fooddetail = ref([])
    const namayeshalert = ref(false)


    function validation() {


      if (foodname.value == '' || fooddetail.value == '') {

          namayeshalert.value = true
        
      }

      else {

         axios.post('http://localhost:3000/posts', {
         foodName: foodname.value ,
         foodDetail: fooddetail.value,
          })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });

        namayeshalert.value = false

         Swal.fire(
        'موفق!',
        'غذا به لیست اضافه شد',
        'success'
        )

       
      }

      
    }

    validation()


   


    return {foodname,fooddetail,namayeshalert,validation}
  }

}
</script>

<style>

</style>