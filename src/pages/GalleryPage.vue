<template>
	<div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
		<Navbar class="mb-8" />
		<div class="text-center mb-8">
			<h1
				id="gallery"
				class="mb-4 text-5xl tracking-tight font-extrabold text-white landscape__margin-gallery"
			>
				Galerija
			</h1>
		</div>
		<div class="container mx-auto px-4 py-8 md:px-6 lg:px-8">
			
      <div v-for="(sectionGroup, groupIndex) in truepaginatedImages" :key="groupIndex" class="mb-12">
        <div v-for="(images, sectionName) in sectionGroup" :key="sectionName" class="mb-12">
			<!-- HERE -->
          <h2 class="text-2xl gallery_title_name font-bold mb-4 text-center">{{ sectionName }}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <GalleryImage
              v-for="(image, index) in images" :key="index"
              :imageSrc="image"
              @open-popup="openPopup"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
		</div>


		<div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
			<div class="popup-content" @click.stop>
				<img :src="selectedImage" alt="" class="popup-image" />
				<button class="popup-close" @click="closePopup">
					<svg
						class="popup-close-icon"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 18L18 6M6 6l12 12"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import { gridImages, truegridImages } from "../data/gridImages";
import GalleryImage from "../components/GalleryImage.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Gallery",
	components: {
		GalleryImage,
		Navbar,
		Footer,
	},
	data() {
		return {
			gridImages,
			isMobile: window.innerWidth < 640,
			isPopupOpen: false,
			selectedImage: "",
		};
	},
	computed: {
		displayedGridImages() {
			return this.isMobile ? this.gridImages.slice(0, 6) : this.gridImages;
		},
		paginatedImages() {
			const chunkSize = 6;
			let result = [];
			for (let i = 0; i < this.gridImages.length; i += chunkSize) {
				result.push(this.gridImages.slice(i, i + chunkSize));
			}

			return result;
		},
    truepaginatedImages(){
      truegridImages.forEach((imageSet) => {
				Object.keys(imageSet).forEach((sectionName) => {
					console.log(`Images in ${sectionName}:`);
					imageSet[sectionName].forEach((image) => {
						console.log(image);
					});
				});
			});
      return truegridImages;
    }
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth < 640;
		},
		openPopup(image) {
			this.selectedImage = image;
			this.isPopupOpen = true;
		},
		closePopup() {
			this.isPopupOpen = false;
			this.selectedImage = "";
		},
	},
	created() {
		window.addEventListener("resize", this.handleResize);
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleResize);
	},
};
</script>

<style scoped>
.h-screen {
	height: 10vh;
}

.grid {
	grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery-image {
	width: 100%;
	height: auto;
}

.popup-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.popup-content {
	position: relative;
	max-width: 90%;
	max-height: 80%;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	overflow: hidden;
}

.popup-image {
	width: 100%;
	height: auto;
}

.popup-close {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	cursor: pointer;
}

.popup-close:hover {
	transform: scale(1.1);
}

.gallery_title_name{
	color: var(--color-highlight);
}
.popup-close-icon {
	width: 24px;
	height: 24px;
	stroke: var(--color-highlight);
	stroke-width: 2;
}
</style>
