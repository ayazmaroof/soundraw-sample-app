<script setup lang='ts'>
// import TheWelcome from '../components/TheWelcome.vue'
import quizData from '../quiz-data.json';
import type { Question } from '@/interfaces/questions';
import { computed, ref } from 'vue';
import type { Ref } from 'vue';

const questions: Ref<Question[]> = ref(quizData);

const disableSubmit = computed(() => {
  return questions.value.some((question) => !question.selectedAnswer || question.selectedAnswer.length === 0);
});

const showScore = ref(false);
const finalScore = ref(0);

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
    finalScore.value = totalScore;
    showScore.value = true;
    questions.value.forEach(question => {
      if (question.type === 'singleChoice') {
        question.selectedAnswer = '';
      } else {
        question.selectedAnswer = [];
      }
    });
  }
}
</script>

<template>
  <main>
    <div>
      <div id='quiz' v-if='!showScore' class='container overflow-hidden'>
        <div class='row g-5 p-3'>
          <div class='col-12' v-for='question in questions' v-bind:key='question.id' :id='question.id'>
            <div>
              <span>{{ question.text }}</span>
              <br />
              <span v-for='answerOption in question.answerOptions' :key='answerOption.id'>
                  <span v-if='question.type === "singleChoice"'>
                    <input type='radio' :name='question.id' :id='answerOption.id' :value='answerOption.id'
                           v-model='question.selectedAnswer'>
                    <label :for='answerOption.id'>{{ answerOption.text }}</label>
                  </span>
                  <span v-if='question.type === "multipleChoice"'>
                    <input type='checkbox' :id='answerOption.id' :value='answerOption.id'
                           v-model='question.selectedAnswer'>
                    <label :for='answerOption.id'>{{ answerOption.text }}</label>
                  </span>
                  <br />
                </span>
            </div>
          </div>
        </div>

        <button type='button' class='btn btn-primary' :disabled='disableSubmit' @click='answersSubmitted'>Submit
        </button>
      </div>
      <div id='score' v-if='showScore'>
        You scored {{ finalScore }} points.
      </div>
    </div>
  </main>
</template>
