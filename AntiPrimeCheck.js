function AntiPrimeCheck(){
	var checkingnumber;
	var checkedby;
	var divby;
	var n1=0;
	var n2=0;
	var n3=0;
	var n4=0;
	var n5=0;
	var n6=0;
	var n7=0;
	var n8=0;
	var n9=0;
	var n10=0;
	do{
	do{
		CheckCheckingNumber();
		function CheckCheckingNumber(){
		if(checkingnumber%checkedby == 0){
			checkedby++;
			divby++;
			CheckCheckingNumber();
		}else{
			checkedby++;
			CheckCheckingNumber();
		}
		}
	}while(checkedby <= checkingnumber/2)
	if(divby >= n1){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6;
		n6=n5;
		n5=n4;
		n4=n3;
		n3=n2;
		n2=n1;
		n1=checkingnumber;
	}else if(divby >= n2){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6
		n6=n5;
		n5=n4;
		n4=n3;
		n3=n2;
		n2=checkingnumber;
	}else if(divby >= n3){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6
		n6=n5;
		n5=n4;
		n4=n3;
		n3=checkingnumber;
	}else if(divby >= n4){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6
		n6=n5;
		n5=n4;
		n4=checkingnumber;
	}else if(divby >= n5){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6
		n6=n5;
		n5=checkingnumber;
	}else if(divby >= n6){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=n6
		n6=checkingnumber;
	}else if(divby >= n7){
		n10=n9;
		n9=n8;
		n8=n7;
		n7=checkingnumber;
	}else if(divby >= n8){
		n10=n9;
		n9=n8;
		n8=checkingnumber;
	}else if(divby >= n9){
		n10=n9;
		n9=checkingnumber
	}else if(divby >= n10){
		n10=n9;
	}else{}
	checkingnumber++;
	}while(checkingnumber == endnumber)
	console.log("Anti prime check has ended.")
}