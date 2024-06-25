import { defineStore } from 'pinia'
export const usePiniaStore = defineStore('pinia', {
	state: () => ({
		count: 0,
		name: 'Vuejs',
		quizzes: [
			{
				id: 1,
				theme: 'Tengsizliklar',
				questions: [
					{
						id: 1,
						question: '2+2=?',
						optionals: [
							{
								id: 1,
								text: '1',
							},
							{
								id: 2,
								text: '2',
							},
							{
								id: 3,
								text: '3',
							},
							{
								id: 4,
								text: '4',
							},
						],
						answer: 4,
						selectAnswer: 0,
					},
					{
						id: 2,
						question: '2*5=?',
						optionals: [
							{
								id: 1,
								text: '15',
							},
							{
								id: 2,
								text: '18',
							},
							{
								id: 3,
								text: '36',
							},
							{
								id: 10,
								text: '10',
							},
						],
						answer: 10,
						selectAnswer: 0,
					},
					{
						id: 3,
						question: '2*4*5=?',
						optionals: [
							{
								id: 1,
								text: '1',
							},
							{
								id: 2,
								text: '2',
							},
							{
								id: 40,
								text: '40',
							},
							{
								id: 4,
								text: '56',
							},
						],
						answer: 40,
						selectAnswer: 0,
					},
				],
			},
		],
	}),
	actions: {
		increment() {
			this.count++
		},
		saveQuizz(quizz) {
			this.quizzes.push(quizz)
		},
	},
})
