import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  const score = ref(0)
  function resetScore() {
    score.value = 0;
  }

  return { score, resetScore }
})
