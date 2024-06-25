<template>
	<div class="container flex flex-col gap-5">
		<div v-if="currentQuiz">
			<h1 class="text-3xl text-center font-semibold my-5">
				{{ currentQuiz.theme }}
			</h1>
			<div
				v-for="(question, qIndex) in currentQuiz.questions"
				:key="question.id"
			>
				<h2 class="text-3xl font-bold my-5">
					{{ qIndex + 1 }}.1{{ question.question }}
				</h2>
				<div class="mt-3 flex flex-col" v-for="answer in question.optionals" :key="answer.id">
					<label
						class="hover:bg-primary  py-3 px-2  text-xl items-center cursor-pointer gap-4 flex-row-reverse"
						:for="`${question.id}-${answer.id}`"
					>
						{{ answer.text }}
						<input
							class="w-5 h-5"
							:id="`${question.id}-${answer.id}`"
							@change="selectAnswer(question.id, answer.id)"
							type="radio"
							:name="question.id"
						/>
					</label>
				</div>
			</div>
		</div>
		<!-- <div v-else>
			<div v-for="quiz in piniaStore.quizzes" :key="quiz.id">
				<h1 class="text-3xl text-center font-semibold my-5">
					{{ quiz.theme }}
				</h1>
				<div v-for="(question, qIndex) in quiz.questions" :key="question.id">
					<h2 class="text-3xl text-center font-bold my-5">
						{{ qIndex + 1 }}. {{ question.question }}
					</h2>
					<div
						class="mt-3"
						v-for="answer in question.optionals"
						:key="answer.id"
					>
						<label
							class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse"
							:for="`${question.id}-${answer.id}`"
						>
							{{ answer.text }}
							<input
								class="w-5 h-5"
								:id="`${question.id}-${answer.id}`"
								@change="selectAnswer(question.id, answer.id)"
								type="radio"
								:name="question.id"
							/>
						</label>
					</div>
				</div>
			</div>
		</div> -->
		<button
			@click="calculateScore"
			class="mt-8 py-3  w-40  text-2xl bg-primary text-white rounded-lg"
		>
			Your Answer
		</button>
		<div>
			<h1 class="text-[50px] text-center">Your correct answers: {{ count }}</h1>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePiniaStore } from '../store/pinia'

const route = useRoute()
const piniaStore = usePiniaStore()

const currentQuiz = ref(null)
const count = ref(0)

onMounted(() => {
	currentQuiz.value = piniaStore.quizzes.find(
		quiz => quiz.id == route.params.id
	)
})

const selectAnswer = (questionId, answerId) => {
	if (!currentQuiz.value) {
		console.log('currentQuiz is not defined')
		return
	}

	const question = currentQuiz.value.questions.find(q => q.id === questionId)
	console.log(' questionId, answerId', questionId, answerId)
	if (question) {
		question.userAnswer = answerId
	}
}

const calculateScore = () => {
	// console.log('calculating score', currentQuiz.value.questions)
	if (!currentQuiz.value) return
	count.value = 0
	currentQuiz.value.questions.forEach(question => {
		console.log('question.userAnswer,question.answer', question.userAnswer,question.answer)
		if (question.answer === question.userAnswer) {
			count.value++
		}
	})
}
</script>

<style scoped></style>
