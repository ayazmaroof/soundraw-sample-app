<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import quizData from '../quiz-data.json';
import type { Question } from "@/interfaces/questions";

const questions: Question[] = quizData;
</script>

<template>
  <main>
    <ol>
      <li v-for="question in questions" v-bind:key="question.id">
        <span>{{ question.text }}</span>
        <div>
          <span v-for="answerOption in question.answerOptions" :key="answerOption.id">
            <span v-if="question.type === 'singleChoice'">
              <input type="radio" :name="'question'.concat(String(question.id))" :id="answerOption.id">
              <label :for="answerOption.id">{{ answerOption.text }}</label>
            </span>
            <span v-if="question.type === 'multipleChoice'">
              <input type="checkbox" :id="answerOption.id">
              <label :for="answerOption.id">{{ answerOption.text }}</label>
            </span>
            <br />
          </span>
        </div>
      </li>
    </ol>
  </main>
</template>
