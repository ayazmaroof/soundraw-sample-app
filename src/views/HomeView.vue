<script setup lang='ts'>
// import TheWelcome from '../components/TheWelcome.vue'
import quizData from '../quiz-data.json';
import type { Question } from '@/interfaces/questions';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import { useScoreStore } from '@/stores/score';
import { useRouter } from 'vue-router';

const questions: Ref<Question[]> = ref(quizData);
const router = useRouter();
let scoreStore = useScoreStore()
scoreStore.resetScore();

const disableSubmit = computed(() => {
  return questions.value.some((question) => !question.selectedAnswer || question.selectedAnswer.length === 0);
});

function resetQuiz() {
  questions.value.forEach(question => {
    if (question.type === 'singleChoice') {
      question.selectedAnswer = '';
    } else {
      question.selectedAnswer = [];
    }
  });
}
function answersSubmitted() {
  const scores: (number | undefined)[] = questions.value.map((question) => {
    if (question.type === 'singleChoice') {
      return question.answerOptions.find((option) => option.id === question.selectedAnswer)?.value;
    } else {
      if (typeof question.selectedAnswer !== 'string') {
        return question.selectedAnswer
          .map(selectedAnswer => question.answerOptions.find((option) => option.id === selectedAnswer)?.value)
          .reduce((accumulator = 0, score = 0) => accumulator + score);
      }
    }
  });

  const totalScore = scores.reduce((accumulator = 0, score = 0) => accumulator + score);
  if (totalScore !== undefined) {
    scoreStore.score = totalScore;
    router.push('/score');
    resetQuiz();
  }
}
</script>

<template>
  <main>
    <div>
      <div id='quiz' class='d-grid mt-4 gap-3 justify-content-center'>
        <div v-for='question in questions' v-bind:key='question.id' :id='question.id'>
          <span>{{ question.text }}</span>
          <br />
          <div class='form-check' v-for='answerOption in question.answerOptions' :key='answerOption.id'>
              <span v-if='question.type === "singleChoice"'>
                <input class='form-check-input' type='radio' :name='question.id' :id='answerOption.id'
                       :value='answerOption.id'
                       v-model='question.selectedAnswer'>
                <label class='form-check-label' :for='answerOption.id'>{{ answerOption.text }}</label>
              </span>
            <span v-if='question.type === "multipleChoice"'>
                <input class='form-check-input' type='checkbox' :id='answerOption.id' :value='answerOption.id'
                       v-model='question.selectedAnswer'>
                <label class='form-check-label' :for='answerOption.id'>{{ answerOption.text }}</label>
              </span>
            <br />
          </div>
        </div>
        <button id='submit' type='button' class='btn btn-primary' :disabled='disableSubmit' @click='answersSubmitted'>Submit
        </button>
      </div>
    </div>
  </main>
</template>
