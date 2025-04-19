<script setup>
import jobData from "@/jobs.json";
import { ref } from "vue";

const jobs = ref(jobData.jobs);
// console.log(jobs);
</script>

<template>
  <div v-for="job in jobs">{{ job.title }}</div>
</template>
