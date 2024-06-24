<template>
	<div class="container">
		<h1 class="text-3xl text-center font-semibold my-5">{{ currentQuizz.theme }}</h1>
		<div v-for="question,index in currentQuizz.questions" :key="index">
			<h2 class="text-3xl font-bold my-5">{{index+1}}.  {{ question.question }}</h2>
			<div  class="mt-3"   v-for="answer in question.optionals" :key="answer.id">
				<label  class="inline-flex  text-xl  items-center  cursor-pointer  gap-4   flex-row-reverse"   :for="`${question.id}`+answer.id">
                           {{ answer.text }} Lorem ipsum dolor sit amet.
					  <input  class="w-5 h-5"   :id="`${question.id}`+answer.id"  type="radio" :name="question.id">
				</label> 
			</div>
		</div>
	</div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { usePiniaStore } from '../store/pinia'
const route=useRoute()
const piniaStore = usePiniaStore();
const currentQuizz=piniaStore.quizzes.find((item)=>item.id=route.params.id);
</script>
<style lang="scss" scoped>
</style>