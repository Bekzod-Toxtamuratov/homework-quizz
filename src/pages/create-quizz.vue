<template>
	<div class="bg-[url('/4.jpg')]">
		<div class="container">
			<h1 class="text-[70px] font-bold my-5 text-center">Create Quiz</h1>
			<div class="rounded-xl">
				<input v-model="newQuizz.theme" class="border py-3 px-5 rounded-xl w-full text-4xl focus:outline-none focus:border-primary" type="text" placeholder="Theme...">
				<div class="bg-[url('/1.jpg')] mt-[40px] border p-5" v-for="(question, qIndex) in newQuizz.questions" :key="question.id">
					<input v-model="question.question" class="pl-4 mb-4 border py-3 rounded-xl w-full focus:outline-none text-2xl focus:border-primary" type="text" placeholder="Question...">
					<div class="p-2" v-for="answer in question.optionals" :key="answer.id">
						<div class="inline-flex text-xl items-center cursor-pointer gap-4 flex-row-reverse">
							<button class="bg-[green] text-white py-3 px-4 rounded-md hover:shadow-md" @click="removeOptional(question.id, answer.id)" v-if="question.optionals.length > 2">Remove</button>
							<input v-model="answer.text" class="pl-4 border py-3 rounded w-full focus:outline-none text-2xl focus:border-primary" type="text" placeholder="Optional...">
							<input class="bg-[blue] w-5 h-5" :id="`${question.id}-${answer.id}`" type="radio"  @change="bek(question.id, answer.id)"   :name="question.id" v-model="question.answer" :value="answer.id">
						</div>
					</div>
					<div class="flex gap-5 justify-between">

						<button v-if="question.optionals.length < 4" @click="addOptional(question.id)" class="mt-3 py-3 px-2 bg-primary text-white rounded">Add Optional</button>
						<button @click="removeQuizz(qIndex)" class="mt-3 py-3 px-2 bg-red-500 text-white rounded">Remove Question</button>
					</div>
				</div>
			</div>
			<div class="flex justify-end mt-5 gap-5">
				<button @click="addQuizz" class="py-3 px-4 bg-primary text-white rounded hover:bg-[blue] hover:text-primary">Add Question</button>
				<button @click="saveQuizz" class="py-3 px-4 bg-primary text-white rounded hover:bg-[blue] hover:text-primary">Save</button>
			</div>
		</div>
	</div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePiniaStore } from '../store/pinia'

const piniaStore = usePiniaStore()
const router = useRouter()

const bek = (questionId, answerId) => {
	const question = newQuizz.value.questions.find(q => q.id === questionId)
	if (question) {
		const answer = question.optionals.find(o => o.id === answerId)
		if (answer) {
			question.userAnswer = answer.text
		}
	}
}

const newQuizz = ref({
	id: new Date().toISOString(),
	theme: '',
	questions: [
		{
			id: 1,
			question: '',
			optionals: [
				{ id: 1, text: '' },
				{ id: 2, text: '' }
			],
			answer: 0
		}
	]
})

const addOptional = (questionId) => {
	const question = newQuizz.value.questions.find(q => q.id === questionId)
	if (question) {
		question.optionals.push({ id: question.optionals.length + 1, text: '' })
	}
}

const removeOptional = (questionId, answerId) => {
	const question = newQuizz.value.questions.find(q => q.id === questionId)
	if (question) {
		const index = question.optionals.findIndex(o => o.id === answerId)
		if (index !== -1) {
			question.optionals.splice(index, 1)
		}
	}
}

const addQuizz = () => {
	const newQuestion = {
		id: newQuizz.value.questions.length + 1,
		question: '',
		optionals: [
			{ id: 1, text: '' },
			{ id: 2, text: '' }
		],
		answer: 0
	}
	newQuizz.value.questions.push(newQuestion)
}

const removeQuizz = (questionIndex) => {
	newQuizz.value.questions.splice(questionIndex, 1)
}

const saveQuizz = () => {
	piniaStore.quizzes.push(newQuizz.value)
	router.push('/pinia')
}
</script>
