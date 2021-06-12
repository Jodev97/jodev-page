<template>
  <div>
    <header class="main-header">
      <div class="background-overlay text-white py-5">
        <div class="container">
          <div class="row d-flex h-100">
            <div class="col-sm-6 text-center justify-content-center align-self-center">
              <h1>
                Creando el nuevo mundo con software
              </h1>
              <p>Encontraras informacion acerca de mi y mis trabajos</p>
              <a href="#" class="btn btn-outline-secondary btn-lg text-white">
                Read More
              </a>
            </div>
            <div class="col-sm-6">
             
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name:'home'
}
</script>

<style>
.navbar {
  box-shadow: 2px 2px 5px #000;
  opacity: 0.9;
}

.navbar .nav-item .nav-link {
  color: #fff;
}

.main-header {
  position: relative;
  
  background-size: cover;
  min-height: 700px;
}

.background-overlay {
  background: rgba(48, 51, 107,.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.form-control, .btn{
  border-radius: 0;
}

.team, footer {
  background: #30336b;
}

</style>