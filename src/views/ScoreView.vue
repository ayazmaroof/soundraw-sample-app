<script setup lang='ts'>
import { useScoreStore } from '@/stores/score';

let scoreStore = useScoreStore();

</script>
<template>
  <div id='score' class='d-grid p-5 m-5'>
    <div class='text-success text-center fs-2'>You scored {{ scoreStore.score }} points.</div>
  </div>
</template>
