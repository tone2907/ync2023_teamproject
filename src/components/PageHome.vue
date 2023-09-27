<template>
	<div>
		<carousel
			:perPageCustom="[
				[0, 1],
				[576, 2],
				[1200, 3],
			]"
		>
			<!-- 이미지 슬라이드 아이템 -->
			<slide v-for="(image, index) in images" :key="index">
				<img :src="image" alt="Slide Image" />
			</slide>
		</carousel>
	</div>
</template>

<script>
import VueCarousel from 'vue-carousel';

export default {
	components: {
		Carousel: VueCarousel.Carousel,
		Slide: VueCarousel.Slide,
	},
	data() {
		return {
			images: [
				'../assets/images/slider1.jpg',
				'../assets/images/slider2.jpg',
				'../assets/images/slider3.jpg',
				// 이미지 URL을 원하는 수만큼 추가하세요.
			],
		};
	},
};
</script>
