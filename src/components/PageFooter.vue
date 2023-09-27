<template>
	<div className="wrap-container">
		<div className="home-container"></div>
	</div>
	<footer class="container">
		<font color="gray"><small>Copyright &copy;2023 YNC</small></font>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap-container {
	height: auto;
	min-height: 100%;
	padding-bottom: 60px;
}

.home-container {
	min-height: 600px;
}

footer {
	height: 60px;
	position: relative;
	transform: translateY(0%);
	border-top: 1px solid #000;

	display: flex;
	align-items: center;
	justify-content: left;
	background-color: #fff;
}
</style>
