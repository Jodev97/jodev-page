<template>
  <section class="text-center team">
      <div class="container p-5">
        <h1 class="text-center text-white">PROYECTS</h1>
        <p class="text-white">
          mira una muestra de los proyectos en los que he trabajado
        </p>
        <div class="row">
          <!-- USER TEAM -->
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img src="img/person.png" class="img-fluid rounded-circle w-50">
                <h3 class="text-dark">API WHEATER METER</h3>
                <p class="text-dark">
                  consumimos los datos de una pagina de meteorologia
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <router-link to="/weathermeter">VER</router-link>
                  
                  </div>
                  <div class="p-4">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </div>
                  <div class="p-4">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
</template>

<script>

export default {
  name:'proyects'
}
</script>

<style>
a{
 cursor: pointer; 
}
</style>