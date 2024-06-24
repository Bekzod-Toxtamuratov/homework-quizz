<template>
	<div class="container flex  flex-col gap-5">
		<div class="" v-if="currentQuiz">
			<h1 class="text-3xl text-center font-semibold my-5">{{ currentQuiz.theme }}</h1>
			<div v-for="(question, qIndex) in currentQuiz.questions" :key="question.id">
				<h2 class="text-3xl font-bold my-5">{{ qIndex + 1 }}. {{ question.question }}</h2>
				<div class="mt-3" v-for="answer in question.optionals" :key="answer.id">
					<label class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse" :for="`${question.id}-${answer.id}`">
						{{ answer.text }}
						<input class="w-5 h-5" :id="`${question.id}-${answer.id}`" type="radio" :name="question.id">
					</label>
				</div>
			</div>
		</div>
		<div v-else>
			<div v-for="(quiz) in piniaStore.quizzes" :key="quiz.id">
				<h1 class="text-3xl text-center font-semibold my-5">{{ quiz.theme }}</h1>
				<div v-for="(question, qIndex) in quiz.questions" :key="question.id">
					<h2 class="text-3xl text-center font-bold my-5">{{ qIndex + 1 }}. {{ question.question }}</h2>
					<div class="mt-3" v-for="answer in question.optionals" :key="answer.id">
						<label class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse" :for="`${question.id}-${answer.id}`">
							{{ answer.text }}
							<input class="w-5 h-5" :id="`${question.id}-${answer.id}`" type="radio" :name="question.id">
							</label>
				</div>
			</div>
		</div>
		<button @click="YourAnser"    class="mt-8 py-4 px-7 text-2xl bg-primary text-white  rounded ">
			YourAnswe
		</button>
	</div>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePiniaStore } from '../store/pinia'

const route = useRoute()
const piniaStore = usePiniaStore()


const YourAnser = () => {
     console.log(piniaStore.quizzes)
}

const currentQuiz = computed(() => piniaStore.quizzes.find((quiz) => quiz.id === route.params.id))

</script>

<style>
/* Add any styles you need here */
</style>
