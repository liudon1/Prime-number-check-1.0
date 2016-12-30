		var formnumber;
		var runningnumber;
		var startnumber;
		var endnumber;
		var NumberOfPrimeNumbers=0;
		var numberset;
		var comment;
		function SetNumberE(){
			numberset="e";
			SetNumberForPrime();
		}
		function SetNumberN(){
			numberset="n";
			SetNumberForPrime();
		}
		function SetNumberA(){
			numberset="a";
			SetNumberForPrime();
		}
		function SetNumberForPrime(){
		formnumber=document.getElementById('TextFieldId').value;
		if(isNaN(formnumber)){
			window.alert("This is not a valid number. Please enter a valid one.");
			console.log(formnumber +" isn't a number.");
		return false;
		}else{
			if(numberset == "e"){
				EasyCheck();
			}else if(numberset == "n"){
				NormalCheck();
			}else{
				AdvancedCheck();
			}
		console.log(formnumber +" has been set as number.");
			}
		}
		
		function PrepareFindEndlessPrimeNumbers(){
			comment=false;
			StartEndlessPrimeNumbers();
		}
		function PrepareFindEndlessPrimeNumbersComment(){
			comment=true;
			StartEndlessPrimeNumbers();
		}
		function StartEndlessPrimeNumbers(){
	// value startnumber
		startnumber=document.getElementById('EndlessFieldId').value;
		if(isNaN(startnumber)){
			window.alert("This is not a valid number. Please enter a valid one.");
			console.log(startnumber +" isn't a number.")
		}else{
			console.log(startnumber +" has been set as starting number")
		}
	// value endnumber
		endnumber=document.getElementById('EndlessFieldIdEnd').value;
		if(isNaN(endnumber)){
			window.alert("This is not a valid number. Please enter a valid one.");
			console.log(endnumber +" isn't a number.")
		}else{
			console.log(endnumber +" has been set as ending number.");
			if(comment == false){
				FindEndlessPrimeNumbersNoComment();
			}else{
				FindEndlessPrimeNumbersComment();
			}
		}
		}
function ResetNumber(){formnumber="";}
function ResetStart(){startnumber="";}
function ResetEnd(){endnumber="";}