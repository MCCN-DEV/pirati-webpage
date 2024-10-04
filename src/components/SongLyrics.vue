<template>
	<div class="song-container">
		<div class="song-list">
			<div
				v-for="(song, index) in songs"
				:key="index"
				class="song-title"
				@click="selectSong(index)"
			>
				<h2
					:class="{
						'active-title': selectedSong === index,
						'inactive-title': selectedSong !== index,
					}"
					class="text-lg font-bold pb-5 cursor-pointer"
				>
					{{ song.title }}
				</h2>
			</div>
		</div>

		<div class="song-lyrics">
			<div v-if="selectedSong !== null">
				<h2 class="text-3xl font-bold mb-4">{{ songs[selectedSong].title }}</h2>
				<div
					class="lyrics-content"
					:class="{ scrollable: songs[selectedSong].verses.length > 3 }"
				>
					<div
						v-for="(verse, verseIndex) in songs[selectedSong].verses"
						:key="verseIndex"
						class="verse"
					>
						<p v-html="formatVerse(verse)"></p>
						<br />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import loraHollidayLyrics from "@/assets/Data/loraHollidayLyrics.json";

export default {
	name: "SongLyrics",
	data() {
		return {
			selectedSong: 0,
			songs: loraHollidayLyrics.songs,
		};
	},
	methods: {
		selectSong(index) {
			this.selectedSong = index;
		},
		formatVerse(verse: string) {
			return verse.replace(/\n/g, "<br />");
		},
	},
};
</script>

<style scoped>
.song-container {
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 2rem;
	padding: 20px;
}

.song-list {
	border-right: 1px solid #ccc;
	padding-right: 20px;
}

.song-title {
	cursor: pointer;
}

.active-title {
	color: var(--color-highlight);
}

.inactive-title {
	color: white;
}

.song-title:hover {
	color: var(--color-highlight-hover);
}

.song-lyrics {
	padding-left: 20px;
	color: white;
}

.lyrics-content {
	max-height: 300px;
	overflow-y: auto;
}

.scrollable {
	max-height: 450px;
	overflow-y: auto;
}

.verse p {
	font-size: 1.25rem;
	line-height: 1.6;
}

@media (max-width: 640px) {
	.song-container {
		grid-template-columns: 1fr;
	}

	.song-list {
		border-right: none;
		padding-right: 0;
	}

	.song-lyrics {
		padding-left: 0;
	}
}
</style>
