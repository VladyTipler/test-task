<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="navbar-brand">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30"
                 class="d-inline-block align-top" alt="">
            Bootstrap
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <router-link
                tag="li"
                class="nav-item"
                to="/">
                <a class="nav-link">Список вопросов</a>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style scoped>

</style>
