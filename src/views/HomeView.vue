<script setup lang='ts'>
// import TheWelcome from '../components/TheWelcome.vue'
import quizData from '../quiz-data.json'
import type { Question } from '@/interfaces/questions'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'

const questions: Ref<Question[]> = ref(quizData)

const disableSubmit = computed(() => {
  return questions.value.some((question) => !question.selectedAnswer || question.selectedAnswer.length === 0)
})

</script>

<template>
  <main>
    <ol>
      <li v-for='question in questions' v-bind:key='question.id' :id='question.id'>
        <span>{{ question.text }}</span>
        <div>
          <span v-for='answerOption in question.answerOptions' :key='answerOption.id'>
            <span v-if='question.type === "singleChoice"'>
              <input type='radio' :name='question.id' :id='answerOption.id' :value='answerOption.id' v-model='question.selectedAnswer'
                     @change='updateSelectedAnswers'>
              <label :for='answerOption.id'>{{ answerOption.text }}</label>
            </span>
            <span v-if='question.type === "multipleChoice"'>
              <input type='checkbox' :id='answerOption.id' :value='answerOption.id' v-model='question.selectedAnswer'>
              <label :for='answerOption.id'>{{ answerOption.text }}</label>
            </span>
            <br />
          </span>
        </div>
      </li>
    </ol>
    <button type='button' class='btn btn-primary' :disabled='disableSubmit'>Submit</button>
  </main>
</template>
