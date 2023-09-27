<template>
	<div className="wrap-container">
		<div className="home-container"></div>
	</div>
	<footer class="container">
		<div style="width: 50%; float: left; text-align: left">
			<font color="gray"><small>Copyright &copy;2023 YNC</small></font>
		</div>
		<div style="width: 50%; float: right; text-align: right">
			<font color="gray"
				><small
					><b>All Rights Reserved |</b> <u>Terms and Conditions</u> <b> | </b>
					<u>Privacy Policy</u></small
				></font
			>
		</div>
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

	background-color: #fff;
}
</style>
