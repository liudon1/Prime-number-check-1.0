
	function CheckTheNumbers(){
	CheckNumberWith2Endless();
	function CheckNumberWith2Endless(){
		 if(checkingnumber%2 == 0){
			 NoPrimeNumber();
		 }else{
			 CheckNumberWith3Endless();
		 }
	}
	function CheckNumberWith3Endless(){
		 if(checkingnumber%3 == 0){
			 NoPrimeNumber();
		 }else{
		 CheckNumberWith5Endless();
		 }
	}
	function CheckNumberWith5Endless(){
		 if(checkingnumber%5 == 0){
			NoPrimeNumber();
		 }else{
			 CheckNumberWith7Endless();	
		 }
	}
	function CheckNumberWith7Endless(){
		if(checkingnumber%7 == 0){
			NoPrimeNumber();
		}else{
			PrimeNumber();
		}
	}
	function NoPrimeNumber(){
	 	checkednumbers++;
	}
	function PrimeNumber(){
		numofprimes++;
		checkednumbers++;
		var checkingnumbertext=document.createTextNode(checkingnumber+", ");
		document.getElementById('PrimeArray').appendChild(checkingnumbertext);
	}
	 if(checkingnumber >= 9007199254740991){
	 clearInterval(InfiniteTest);
	 var max=document.createTextNode(" maximum reached");
	 document.getElementById('PrimeArray').appendChild(max);
	 }else{
	 
	 }
	 checkingnumber++;
	}
