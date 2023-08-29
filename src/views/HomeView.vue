<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
	<button type="button" class="btn btn-primary">test_button</button>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'HomeView',
	components: {
		HelloWorld,
	},
};
</script>
