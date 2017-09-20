function sunSign()
{
var month = parseInt(document.getElementById("Month").value);	
var day = parseInt(document.getElementById("Day").value);		
var zodiacSign = "";
var trait = "";
var zods = ["Capricorn" , "Aquarius", "Pisces", "Aries",
"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
"Sagittarius"];
 
switch(month)
 {
	case 0: if(day < 20)
		 		zodiacSign = zods[0];
			else
		 		zodiacSign = zods[1];
		     break;
	case 1: if(day < 19)
		 		zodiacSign = zods[1];
			else
		 		zodiacSign = zods[2];
			break;
	case 2: if(day < 21)
			 	zodiacSign = zods[2];
			else
			 	zodiacSign = zods[3];
			break;
	case 3: if(day < 20)
		 		zodiacSign = zods[3];
			else
		 		zodiacSign = zods[4];
			break;
	case 4: if(day < 21)
		 		zodiacSign = zods[4];
			else
		 		zodiacSign = zods[5];
			break;
	case 5: if(day < 21)
		 		zodiacSign = zods[5];
			else
		 		zodiacSign = zods[6];
			break;
	case 6: if(day < 23)
		 		zodiacSign = zods[6];
			else
		 		zodiacSign = zods[7];
			break;
 	case 7: if(day < 23)
		 		zodiacSign = zods[7];
			else
		 		zodiacSign = zods[8];
			break;
	case 8: if(day < 23)
		 		zodiacSign = zods[8];
			else
		 		zodiacSign = zods[9];
			break;
	case 9: if(day < 23)
		 		zodiacSign = zods[9];
			else
		 		zodiacSign = zods[10];
			break;
	case 10: if(day < 22)
		 		zodiacSign = zods[10];
			 else
		 		zodiacSign = zods[11];
			break;
	case 11: if(day < 22)
		 		zodiacSign = zods[11];
			 else
		 		zodiacSign = zods[0];
			break;
 }
 
 var ind = zods.indexOf(zodiacSign);
 
 switch(ind)
 {
	case 0:
	 		trait = "Capricorns are ambitious and motivated by a desire for success, status, money and position. Practical and patient, they are determined to succeed one way or another but they must learn, however, that the end never justifies the means.";
			break;
			
	case 1:
	 		trait = "Aquarians are unorthodox, original people who refuse to follow the crowd. They are so determined not be like anyone else that they are sometimes contrary just to be different. They are independent thinkers with ambitions of doing something important and meaningful.";
			break;
			
	case 2:
	 		trait = "The last sign of the zodiac, Pisces is the sign of eternity, reincarnation and spiritual rebirth. Compassionate and fair-minded Pisces have the ability to see deep into the human psyche. Intuitive and sensitive, others would be wise to pay attention to their hunches.";
			break;
			
	 case 3: 
	 		trait = "Aries people are high-spirited, courageous, and independent though they can turn sulky if they have to take orders.";
			break;
			
	 case 4:
	 		trait = "People born under the sign of Taurus are most noted for their dependability, patience and perseverance. These qualities often lead them to success in achieving their goals in life.";
			break;
	 case 5:
	 		trait = "Amusing, charming and witty, Gemini's are usually surrounded by many friends.";
			break;
			
	 case 6:
	 		trait = "Cancerians can be kind, sympthetic, patient listeners.";
			break;
			
	 case 7:
	 		trait = "Enthusiastic and generous, Leo's have a true love for life and the pleasures it offers. They rule their kingdoms (big or small) and thrive on drama and attention."
			break;
			
	 case 8:
	 		trait = "Virgo is the sign of service and self-improvement. The symbol is a young woman gathering wheat. Virgo's harvest information and put what they learn to practical use.";
			break;
			
	 case 9:
	 		trait = "Libra is the sign of partnership. They are easy to like with a captivating charm and a gift of making others feel important. Born under the sign of the scales, Librans look for balance and harmony.";
			break;
			
	 case 10:	 
	 		trait = "The sign of extremes, Scorpio people are a bundle of contradictions encompassing the best and worst in human nature. Scorpios need a positive avenue of expression or negative aspects such as brooding, jealousy and vengefulness may present themselves.";
			break;
			
	 case 11:
	 		trait = "Optimistic Sagittarius appears to breeze through life. Ruled by Jupiter (planet of fortune), they always seem to be in the right place at the right time. Restless and independent they prize their freedom above all.";
			break;
			
 }
 
document.getElementById("sun_sign").innerHTML = zodiacSign;
document.getElementById("traits").innerHTML = trait;

}