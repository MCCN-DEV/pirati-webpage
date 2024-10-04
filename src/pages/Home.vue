<template>
	<div>
		<header>
			<Navbar />
		</header>
		<Background />
		<main>
			<HeroSection />
			<Showcase class="showcase" />
			<FeaturedAlbum class="featured-album" />
			<Carousel />
		</main>
		<Footer />
	</div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "../components/Navbar.vue";
import Background from "../components/Background.vue";
import HeroSection from "../components/HeroSection.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import FeaturedAlbum from "@/components/FeaturedAlbum.vue";
import Showcase from "@/components/Showcase.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
	name: "Home",
	components: {
		Navbar,
		Background,
		HeroSection,
		Showcase,
		Carousel,
		Footer,
		FeaturedAlbum,
	},
	metaInfo() {
		return {
			title: "Home - Your Website Name",
			meta: [
				{
					name: "description",
					content: "Website for Grupa Pirati, a Serbian rock band.",
				},
				{ property: "og:title", content: "Grupa Pirati" },
				{
					property: "og:description",
					content: "Website for Grupa Pirati, a Serbian rock band.",
				},
				{ property: "og:type", content: "website" },
				{ property: "og:url", content: "https://www.grupapirati.com" },
				{
					property: "og:image",
					content: "https://yourwebsite.com/og-image.jpg",
				},
			],
			link: [{ rel: "canonical", href: "https://www.grupapirati.com" }],
		};
	},
	mounted() {
		this.initializeAnimations();
	},
	methods: {
		initializeAnimations() {
			gsap.fromTo(
				".showcase",
				{ opacity: 0, filter: "blur(10px)" },
				{
					opacity: 1,
					filter: "blur(0px)",
					duration: 1.5,
					ease: "power1.out",
					scrollTrigger: {
						trigger: ".showcase",
						start: "top 80%",
						end: "top 50%",
						scrub: 0.5,
					},
				}
			);

			gsap.fromTo(
				".featured-album",
				{ opacity: 0, filter: "blur(10px)" },
				{
					opacity: 1,
					filter: "blur(0px)",
					duration: 1.5,
					ease: "power1.out",
					scrollTrigger: {
						trigger: ".featured-album",
						start: "top 80%",
						end: "top 50%",
						scrub: 0.5,
					},
				}
			);
		},
	},
});
</script>

<style>
/* Your styles here */
</style>
