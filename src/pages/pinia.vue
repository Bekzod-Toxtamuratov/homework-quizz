<template>
	<div class="container">
		<h1 class="text-[50px] text-center font-bold my-5">Pinia</h1>
		<div class="flex  items-center  justify-between gap-4 mb-8">
			<h2 class="text-3xl font-semibold my-5">Quizes</h2>
			<router-link  class=" text-2xl cursor-pointer    bg-primary text-white rounded-md py-3 px-2 hover:shadow-xl"   to="/create-quizz">
				Create quizz
			</router-link>
		</div>
          <router-link  :to="{name:'quizz-detail',params:{id:quizz.id}}"   v-for="quizz in pinaStore.quizzes" :key="quizz.id">
			<button class="py-2 border  font-bold   hover:shadow-md outline-none   px-4 rounded-md bg-orange-500 text-white hover:text-[orange] hover:bg-[white]">{{quizz.theme}}</button>
		</router-link>
	</div>
</template>
<script setup>
import { usePiniaStore } from '../store/pinia'
const pinaStore = usePiniaStore()
console.log('store', pinaStore)
</script>

<style lang="scss" scoped></style>
