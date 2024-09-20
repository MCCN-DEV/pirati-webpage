//#region TirazRasprodat
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
//#endregion
//#region PrviNastup
import PrviNastup_1 from "@/assets/img/PrviNastup/PrviNastup_1.png";
import PrviNastup_2 from "@/assets/img/PrviNastup/PrviNastup_2.png";
import PrviNastup_3 from "@/assets/img/PrviNastup/PrviNastup_3.png";
import PrviNastup_4 from "@/assets/img/PrviNastup/PrviNastup_4.png";
import PrviNastup_5 from "@/assets/img/PrviNastup/PrviNastup_5.png";
import PrviNastup_6 from "@/assets/img/PrviNastup/PrviNastup_6.png";
import PrviNastup_7 from "@/assets/img/PrviNastup/PrviNastup_7.png";
import PrviNastup_8 from "@/assets/img/PrviNastup/PrviNastup_8.png";
import PrviNastup_9 from "@/assets/img/PrviNastup/PrviNastup_9.png";
import PrviNastup_10 from "@/assets/img/PrviNastup/PrviNastup_10.png";

//#endregion

//#region PrvaPostava
import PrvaPostava_1 from "@/assets/img/PrvaPostava/1.png";
import PrvaPostava_2 from "@/assets/img/PrvaPostava/2.png";
import PrvaPostava_3 from "@/assets/img/PrvaPostava/3.png";
import PrvaPostava_4 from "@/assets/img/PrvaPostava/4.png";
import PrvaPostava_5 from "@/assets/img/PrvaPostava/5.png";
import PrvaPostava_6 from "@/assets/img/PrvaPostava/6.png";
import PrvaPostava_7 from "@/assets/img/PrvaPostava/7.png";
import PrvaPostava_8 from "@/assets/img/PrvaPostava/8.png";
import PrvaPostava_9 from "@/assets/img/PrvaPostava/9.png";
import PrvaPostava_10 from "@/assets/img/PrvaPostava/10.png";
import PrvaPostava_11 from "@/assets/img/PrvaPostava/11.png";
import PrvaPostava_12 from "@/assets/img/PrvaPostava/12.png";
import PrvaPostava_13 from "@/assets/img/PrvaPostava/13.png";
import PrvaPostava_14 from "@/assets/img/PrvaPostava/14.png";
import PrvaPostava_15 from "@/assets/img/PrvaPostava/15.png";
import PrvaPostava_16 from "@/assets/img/PrvaPostava/16.png";
import PrvaPostava_17 from "@/assets/img/PrvaPostava/17.png";
import PrvaPostava_18 from "@/assets/img/PrvaPostava/18.png";
import PrvaPostava_19 from "@/assets/img/PrvaPostava/19.png";

//#endregion
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
		"Prva Postava":[
			PrvaPostava_1,
			PrvaPostava_2,
			PrvaPostava_3,
			PrvaPostava_4,
			PrvaPostava_5,
			PrvaPostava_6,
			PrvaPostava_7,
			PrvaPostava_8,
			PrvaPostava_9,
			PrvaPostava_10,
			PrvaPostava_11,
			PrvaPostava_12,
			PrvaPostava_13,
			PrvaPostava_14,
			PrvaPostava_15,
			PrvaPostava_16,
			PrvaPostava_17,
			PrvaPostava_18,
			PrvaPostava_19,
		],
		"Prvi nastup": [
			PrviNastup_1,
			PrviNastup_2,
			PrviNastup_3,
			PrviNastup_4,
			PrviNastup_5,
			PrviNastup_6,
			PrviNastup_7,
			PrviNastup_8,
			PrviNastup_9,
			PrviNastup_10,
		],
		"Tiraž Rasprodat": [
			TirazRasprodat_2,
			TirazRasprodat_9,
			TirazRasprodat_1,
			TirazRasprodat_3,
			TirazRasprodat_4,
			TirazRasprodat_5,
			TirazRasprodat_6,
			TirazRasprodat_7,
			TirazRasprodat_8,
			TirazRasprodat_10,
			TirazRasprodat_11,
			TirazRasprodat_12,
		],
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
			"https://i.imgur.com/ppCQohw.png",
		],
		// "Tiraz Rasprodat1": await Promise.all(imagePaths),


	},
];
