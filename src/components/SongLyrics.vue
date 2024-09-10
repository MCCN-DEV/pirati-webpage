<template>
	<div>
		<div v-for="(song, index) in songs" :key="index">
			<h2
				class="text-lg font-bold pb-5 select-none song_title_lyrics"
				@click="toggleVisibility(index)"
			>
				{{ song.title }}
			</h2>
			<div
				v-if="song.isVisible"
				v-for="(verse, verseIndex) in song.verses"
				:key="verseIndex"
			>
				<p v-html="formatVerse(verse)"></p>
				<br />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "SongLyrics",
	data() {
		return {
			songs: [
				{
					title: "1. BEBE",
					verses: [
						`Kad smo bili bebe, šezdeset i neke
						Imali smo kose plave i obraze meke.
						`,
						`I samo jedan tren, biću njen, biću njen.`,
						`Od jutra do sutra biću tvoj, biću tvoj.
						Baby samo tvoj.`,
					],
				},
				{
					title: "2. POLJUBI ME",
					verses: [
						`Tvoj je svet, zakon i red
						Tata, mama, fakultet.
						Da li si ikada
						Radila što ne treba.
						`,
						`Škola je uvek bila prva
Za drugo nikad vremena.
Kao da istina
Piše sva u knjigama.
`,
						`Ne reci ništa, ostavi
Sve što znaš zaboravi.
Zagrli me, poljubi me
Neka ti ostane magla na staklima.
`,
						`Tvoje reči su kao formule
Iz fizike i hemije.
Arhimed i Platon su
Sada ispred mene.
`,
						`Učini nešto van pravila
Dotakni me usnama.
Zagrli me, poljubi me
Neka ti ostane magla na staklima.
`,
					],
				},
				{
					title: "3. LORA HOLLIDAY",
					verses: [
						`To leto imao sam šesnaest godina.
Bilo je tako vruće.
Možda baš zbog nje.
`,
						`Kupio sam novine, video sam je
Imala je samo cipele i smešila mi se.
Nikad nisam video takve bokove
Bacio sam novine, želeo sam je.
`,
						`Lora Miss Avgust - Lora Holliday
Ona je moja - Lora Holliday
Jedino moja - Lora Holliday
Tako te želim - Lora Holliday.
`,
						`Ne diraj mama, sliku na vratima
Ne ulazi više u sobu bez kucanja.
Ne boj se mama, neću kasniti
Prvoga dana u novoj godini.
`,
					],
				},
				{
					title: "4. PRIJATELJICA",
					verses: [
						`Znamo se toliko dugo
I sve više ja se sebi čudim.
Dok ti nazivaš me drugom
Želim samo usne da ti ljubim.
`,
						`Voleo bi da si moja
Ali ti si ipak s njim
Čini mi se neću moći
Da s tim se pomirim.
`,
						`Sada, gledam te u oči
I znam da moram sve da ti priznam.
Mislio sam da će me to proći
Al nemam snage više da se lažem.
`,
						`Polako nestaješ, gledam
I neću da poverujem.
Mene izdaješ, on te ljubi
Meni se osmehuješ.
`,
						`Ne, samo ne reci ne,
Ne, samo ne reci ne,
Molim te.
Sve mi se čini da volim te.
`,
						`Mogu ti biti drug
Ali ja sam i muškarac
I sad kud puklo da puklo
A znam da pući će.
Sve mi se čini da volim te.
`,
					],
				},
				{
					title: "5. AFTER SHAVE",
					verses: [
						`Opet sam prošao njenom ulicom
Dovoljan razlog da se setim.
I opet isti osećaj
Koža na licu zategla se.
`,
						`After shave - otkud mi to pitam se
After shave - o kako samo ljubila me je.
`,
						`Bio sam tako umoran
Slike sna u očima su
Vratile polako njene pokrete
Baš kao da je pored mene.
`,
						`Još jedan dan uzeće februar
Nek ovaj tren sad bude njen
Jer tako volela me je.
`,
					],
				},
				{
					title: "6. 180 / 120",
					verses: [
						`Veruj meni gospodine
Da lova nije svemoćna.
Već si zašao u godine
Tvoja je ruka nemoćna.
`,
						`Bolje pređi na starije
Ne diraj ono što ne treba.
To bi ti bilo mudrije
Samo se brukaš pred ljudima.
`,
						`180/120, da li će srce izdržati?
Da li ćeš ikad primetiti
Bore u ogledalu?
`,
						`Ti stalno pričaš o stvarima
A mene to ne zanima.
Kako si nevešt, smejem se
Uz ovaj ritam igraš, pazi se.
`,
						`Moja je kosa plava kao nebo
Moje su oči žeravice.
Ja volim drugu muziku
Tebi previše žestoku.
`,
					],
				},
				{
					title: "7. DOKTORE",
					verses: [
						`Come back, baby come back.
Moja je priča sasvim obična
Ona je jednog dana otišla.
I kao čekić teški, najteži
Tad se na mene srušilo sve.
`,
						`Doktore, pomozi mi sada ti.
Doktore, ubiću se zbog nje.
Ubiću se, ona je, moj doktore
Kriva za sve, ubiću se.
Od moga srca ona ima ključeve.
`,
						`Zaboravio sam sve puteve
A ona je išla kao da zna gde.
Doktore pomozi mi sada ti.
Doktore, ubiću se zbog nje.
Come back, baby come back.
`,
					],
				},
				{
					title: "8. SUBOTOM UVEČE",
					verses: [
						`Tvoj dečko je poznato ime u gradu
A ti si njegov najlepši cvet.
Subotom uveče on s društvom igra karte
Nek ide k vragu i neka ostane s njim
Ova noć se ubila da te od njega ukradem.
`,
						`Kesteni su na nas prosuli senke
I tvoj je parfem delikatan i fin
Al ipak meni u glavi ponovo on
Nek ide k vragu i neka ostane s njim
Ova noć se ubila da te od njega ukradem.
`,
						`Zauvek ja te moram njemu ukrasti
I nikada te neću više vratiti.
U ovoj vedroj noći samo sklopi oči
Kao cvet ubraću te, od njega
Sakriću te, od njega, ukrašću te.
`,
						`Kesteni su na nas prosuli senke
Zvono na crkvi je triput izbilo.
Al ipak meni u glavi ponovo on
Nek ide k vragu i neka ostane s njim
Ova noć se ubila da te od njega ukradem.
`,
					],
				},
				{
					title: "9. O ČEMU MISLIŠ",
					verses: [
						`O čemu misliš dok sklapaš oči
Zapitam sebe ponekad.
Na kraju još jednog napornog dana
Govoriš li stihove.
`,
						`Mesec me je noćas pozvao na ulicu
Sklopio sam knjigu i sišao.
Blagi vetar nosi miris Dunava
Iza ugla čujem tihi razgovor.
Oči bi htele ,al ne mogu zaspati.
`,
						`O čemu misliš dok sklapaš oči
Skrivaš li tajne pod jastukom?
O čemu misliš kad već nestaju slike
Zar posle svega molitva?
`,
						`Mesec me je noćas pozvao na ulicu
Da se setim i zaboravim.
Blagi vetar nosi miris Dunava
Iza ugla čujem tihi razgovor.
Oči bi htele ,al ne mogu zaspati.
`,
						`U njenoj sobi gasi se svetlo, odlazi
A ludi Mesec uživa u predstavi.
O šta to radim?
Da li već spava ili misli o meni?
Posle svega želeo bih saznati.
`,
					],
				},
				{
					title: "10. SANJAO SAM DA SAM CAR",
					verses: [
						`Sanjao sam da sam car
Tamo negde u Kordiljerima
U planinama bolivijskim
Nisam hteo da se probudim.
`,
						`Sanjao san da sam car
Čudnoj zemlji gospodar.
Tamo negde u visinama
Nevidljiv među planinama.
`,
						`Imao sam zlatna krila
Imao sam dugi plašt
Imao sam sve što sija
Zvezde, Sunce, noć i dan.
`,
						`Sanjao san da sam car
njenoj duši gospodar
Tamo negde u visinama
Nevidljiv među planinama.

`,
						`Imao sam zlatna krila
Imao sam dugi plašt
Imao sam sve što sija
O kako je slatka vlast.
`,
						`Tad najednom neko reče
Samo noćas ti si car
Ovo traje jedno veče 
A već sutra bićeš star.
`,
					],
				},
			],
		};
	},
	methods: {
		toggleVisibility(index) {
			this.songs[index].isVisible = !this.songs[index].isVisible;
		},
		formatVerse(verse: string) {
			return verse.replace(/\n/g, "<br />");
		},
	},
};
</script>

<style scoped>
.song_title_lyrics {
	/*color: var(--color-highlight);*/
	cursor: pointer;
}
</style>
