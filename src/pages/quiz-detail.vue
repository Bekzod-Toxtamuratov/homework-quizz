<template>
	<div class="container flex flex-col gap-5">
		<h2 class="text-[50px] text-center">Bekzod</h2>
		<div v-if="currentQuiz">
			<h1 class="text-3xl text-center font-semibold my-5">{{ currentQuiz.theme }}</h1>
			<div v-for="(question, qIndex) in currentQuiz.questions" :key="question.id">
				<h2 class="text-3xl font-bold my-5">{{ qIndex + 1 }}. {{ question.question }}</h2>
				<div class="mt-3" v-for="answer in question.optionals" :key="answer.id">
					<label class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse" :for="`${question.id}-${answer.id}`">
						{{ answer.text }}
						<input class="w-5 h-5" :id="`${question.id}-${answer.id}`" @change="bek2(question.id, answer.id)" type="radio" :name="question.id">
					</label>
				</div>
			</div>
		</div>

		
		<div v-else>
			<div v-for="quiz in piniaStore.quizzes" :key="quiz.id">
				<h1 class="text-3xl text-center font-semibold my-5">{{ quiz.theme }}</h1>
				<div v-for="(question, qIndex) in quiz.questions" :key="question.id">
					<h2 class="text-3xl text-center font-bold my-5">{{ qIndex + 1 }}. {{ question.question }}</h2>
					<div class="mt-3" v-for="answer in question.optionals" :key="answer.id">
						<label class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse" :for="`${question.id}-${answer.id}`">
							{{ answer.text }}
							<input class="w-5 h-5" :id="`${question.id}-${answer.id}`" @change="bek2(question.id, answer.id)" type="radio" :name="question.id">
						</label>
					</div>
				</div>
			</div>
			
		</div>
		<button @click="YourAnswer" class="mt-8     py-4 px-7 text-2xl bg-primary text-white rounded">
				Your Answer
		</button>


		<div >
                   <h1 class="text-[50px] text-center ">Sizning togri javobiz : {{count}}</h1>
		</div>

		

	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePiniaStore } from '../store/pinia'


const route = useRoute()
const piniaStore = usePiniaStore()
let currentQuiz = ref(piniaStore.quizzes.find(quiz => quiz.id == route.params.id))
onMounted(() => {
	console.log(route.params.id);
	console.log(piniaStore.quizzes[0]);
	 currentQuiz.value = piniaStore.quizzes.find(quiz => {
		console.log(quiz.id, quiz.id == route.params.id);
		return quiz.id == route.params.id
	 })
})

const bek2 = (questionId, answerId) => {
	if (!currentQuiz.value) {
		console.log("currentQuiz is not defined")
		return
	}

	const question = currentQuiz.value.questions.find(q => q.id === questionId)
	if (question) {
		const answer = question.optionals.find(o => o.id === answerId)
		if (answer) {
			question.userAnswer = answer.text
			console.log("User's answer:", question.userAnswer)
		}
	}
}

const check = ref(false)

const count=ref(0)

const YourAnswer = () => {
	// console.log(piniaSt)
	// const bekzodaka = currentQuiz.value.questions
	console.log(currentQuiz);

	const counts = currentQuiz.value.questions.filter((item)=>{
	  	return item.userAnswer == item.answer
	})

	// for (const iterator of currentQuiz.value.questions) {
	// 	// console.log(iterator.answer);
	// 	// console.log(iterator);
	// 	let answerIdd = iterator.optionals.find(answer => answer.id == iterator.answer)
	// 	if (answerIdd.text == iterator.userAnswer) {
	// 		count.value ++
	// 	}
	// }
	
	//   check.value=!check.value

	//   if(check.value==false){
	// 	count.value =0;
	//   }
	count.value = counts.length

	console.log('c', count.value);
	//   return count.value
}
</script>

<style>
/* Add any styles you need here */
</style>
