<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class='wrapper'>
      <nav class='navbar navbar-expand-md bg-light'>
        <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar nav'>
            <li class='nav-item'>
              <RouterLink class='nav-link' to='/'>Home</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
