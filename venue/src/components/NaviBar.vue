<template>
    <nav class="navbar navbar-expand-lg navbar-light py-[14px] bg-slate-100">
        <div class="container-fluid">
          <a class="navbar-brand font-bold text-2xl" href="#">Venue Allocation</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=" navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-[17px] mx-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"><router-link to="/home">Home</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Allocated Venue</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/dashboard">Dashboard</router-link></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/">Login</router-link></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/admin">Admin</router-link></a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> -->
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
   name: 'NaviBar'
}
</script>

<style scoped>
/* Add your styles here */
</style>
