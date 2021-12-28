<template>
	<div id="app" class="container-fluid">
		<h1>Recado do Garotinho</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Oi</b-button>
			<transition name="fade">
				<b-alert variant="info" show v-if="exibir">{{msg1}}</b-alert>
			</transition>

			<transition name="slide">
				<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
			</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Trovão garotinho, acabou a luz aqui que merda PORRA !',
			msg1: 'Rio alaga ai fudeu',
			exibir: false 
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.fade-enter {
	opacity: 0;

}

.fade-enter-active {
	transition: opacity 2s;
}

.fade-leave-active {
	transition: opacity 2s;
}

.fade-leave-to {
	opacity: 0;
}

@keyframes slide-in {
	from { transform: translateY(40px);}
	to {transform:  translateY(0px);}
}

@keyframes slide-out {
	from { transform: translateY(0px);}
	to {transform:  translateY(40px);}
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}
 
</style>
