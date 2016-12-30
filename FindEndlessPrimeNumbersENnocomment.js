function FindEndlessPrimeNumbersNoComment(){
		runningnumber=startnumber;
		do{
		function PrimeNumber(){
		console.log(runningnumber +" is a prime number.");
		NumberOfPrimeNumbers +=1;
		}
		function NoPrimeNumber(){
			
		}
		runningnumber++;
		CheckNumberWith2Endless();
		function CheckNumberWith2Endless(){
			if(runningnumber%2 == 0){
				NoPrimeNumber();
		}else{
			CheckNumberWith3Endless();
			}
		}
		function CheckNumberWith3Endless(){
			if(runningnumber%3 == 0){
				NoPrimeNumber();
		}else{
			CheckNumberWith5Endless();
			}
		}
		function CheckNumberWith5Endless(){
			if(runningnumber%5 == 0){
				NoPrimeNumber();
			}else{
				CheckNumberWith7Endless();	
			}
		}
		function CheckNumberWith7Endless(){
			if(runningnumber%7 == 0){
				NoPrimeNumber();
			}else{
				PrimeNumber();
			}
		}
	}while(runningnumber<=endnumber)
		alert("The set end number "+ endnumber +" was reached.\nThere were "+ NumberOfPrimeNumbers +" prime numbers in a distance of "+ startnumber +" until "+ endnumber);
			NumberOfPrimeNumbers=0;
}
