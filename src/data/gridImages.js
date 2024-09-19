import TirazRasprodatImage from "@/assets/img/TirazRasprodat_MainPic.jpg";
import TirazRasprodat_1 from "@/assets/img/TirazRasprodatPage/1.jpg";
import TirazRasprodat_2 from "@/assets/img/TirazRasprodatPage/2.jpg";
import TirazRasprodat_3 from "@/assets/img/TirazRasprodatPage/3.jpg";
import TirazRasprodat_4 from "@/assets/img/TirazRasprodatPage/4.jpg";
import TirazRasprodat_5 from "@/assets/img/TirazRasprodatPage/5.jpg";
import TirazRasprodat_6 from "@/assets/img/TirazRasprodatPage/6.jpg";
import TirazRasprodat_7 from "@/assets/img/TirazRasprodatPage/7.jpg";
import TirazRasprodat_8 from "@/assets/img/TirazRasprodatPage/8.jpg";
import TirazRasprodat_9 from "@/assets/img/TirazRasprodatPage/9.jpg";
import TirazRasprodat_10 from "@/assets/img/TirazRasprodatPage/10.jpg";
import TirazRasprodat_11 from "@/assets/img/TirazRasprodatPage/11.jpg";
import TirazRasprodat_12 from "@/assets/img/TirazRasprodatPage/12.jpg";

const images = import.meta.glob("@/assets/img/TirazRasprodatPage/*.jpg");
const imagePaths = Object.values(images).map((img) =>
	img().then((module) => module.default)
);

console.log(images);

export const gridImages = [
	"https://i.imgur.com/7o6gXKY.png",
	"https://i.imgur.com/g7HiNOC.png",
	"https://i.imgur.com/6pzkvIp.png",
	"https://i.imgur.com/7DLTIRr.png",
	"https://i.imgur.com/fqFVfaj.png",
	"https://i.imgur.com/ppCQohw.png",
	"https://i.imgur.com/7o6gXKY.png",
	"https://i.imgur.com/g7HiNOC.png",
	"https://i.imgur.com/6pzkvIp.png",
	"https://i.imgur.com/7DLTIRr.png",
	"https://i.imgur.com/fqFVfaj.png",
	TirazRasprodatImage,
];

export const truegridImages = [
	{
		section1: [
			"https://i.imgur.com/7o6gXKY.png",
			"https://i.imgur.com/g7HiNOC.png",
			"https://i.imgur.com/6pzkvIp.png",
			"https://i.imgur.com/7DLTIRr.png",
			"https://i.imgur.com/fqFVfaj.png",
			"https://i.imgur.com/ppCQohw.png",
		],
		section2: [
			"https://i.imgur.com/7o6gXKY.png",
			"https://i.imgur.com/g7HiNOC.png",
			"https://i.imgur.com/6pzkvIp.png",
			"https://i.imgur.com/7DLTIRr.png",
			"https://i.imgur.com/fqFVfaj.png",
			TirazRasprodatImage,
		],
		// "Tiraz Rasprodat1": await Promise.all(imagePaths),
		"Tiraz Rasprodat": [
			TirazRasprodat_1,
			TirazRasprodat_2,
			TirazRasprodat_3,
			TirazRasprodat_4,
			TirazRasprodat_5,
			TirazRasprodat_6,
			TirazRasprodat_7,
			TirazRasprodat_8,
			TirazRasprodat_9,
			TirazRasprodat_10,
			TirazRasprodat_11,
			TirazRasprodat_12,
		],
	},
];
