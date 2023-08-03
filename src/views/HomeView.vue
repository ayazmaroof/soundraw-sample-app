<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import quizData from '../quiz-data.json';

const questions = quizData;

</script>

<template>
  <main>
    <ol>
      <li v-for="question in questions" v-bind:key="question.id">
        <span>{{ question.questionText }}</span>
        <div>
          <span v-for="choice in question.choices" :key="choice.id">
            <span v-if="question.type === 'singleChoice'">
              <input type="radio" :name="'question'.concat(String(question.id))" :id="choice.id">
              <label :for="choice.id">{{ choice.text }}</label>
            </span>
            <span v-if="question.type === 'multipleChoice'">
              <input type="checkbox" :id="choice.id">
              <label :for="choice.id">{{ choice.text }}</label>
            </span>
            <br />

          </span>
        </div>
      </li>
    </ol>
  </main>
</template>
