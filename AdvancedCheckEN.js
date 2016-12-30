function AdvancedCheck(){
// Variable area
	var div2;
	var div3;
	var div4;
	var div5;
	var div6;
	var div7;
	var div8;
	var div9;
	var ndiv2;
	var ndiv3;
	var ndiv4;
	var ndiv5;
	var ndiv6;
	var ndiv7;
	var ndiv8;
	var ndiv9;
	var result;
	var first;
	var nfirst;
	var lowerprime;
	var higherprime;
	var foundprimes=0;
	var testednumbers=0;
	var checkingnumber=formnumber;
	var checkingnumberlow=formnumber;
	var deactivate;
	StartAdvancedCheck()
	function StartAdvancedCheck(){
		console.log("The test has been started. The number is "+ formnumber);
		CheckFormNumberWith2Advanced();
	}

	// START
	// Start check 2
	function CheckFormNumberWith2Advanced(){
	var sol2=formnumber/2;
	console.log(formnumber + " divided by 2 gives "+ sol2);
// Check if 2 is a Prime number
	var rest2=formnumber%2;
	if(rest2 == 0){
// 2 yes
		console.log(formnumber +" is dividible by 2 with the result "+ sol2);
		div2="2";
		ndiv2="";
		first=1;
		result=1;
		CheckFormNumberWith3Advanced();
	}else{
// 2 no
		console.log(formnumber +" is NOT dividible by 2 with the result "+ sol2 +" and a rest of "+ rest2);
		ndiv2="2";
		div2="";
		nfirst=1;
		CheckFormNumberWith3Advanced();
	}
	}
// Start check 3
	function CheckFormNumberWith3Advanced(){
	var sol3=formnumber/3;
	console.log(formnumber + " divided by 3 gives "+ sol3);
// Check if 3 is a Prime number
	var rest3=formnumber%3;
	if(rest3 == 0){
// 3 yes
		console.log(formnumber +" is dividible by 3 with the result "+ sol3 +" and a rest of "+ rest3);
		if(first == undefined){
			div3="3";
			first=1;
			result=1;
		}else{
			div3=", 3";
		}
		ndiv3="";
		CheckFormNumberWith4Advanced();
	}else{
// 3 no
		console.log(formnumber +" is NOT dividible by 3 with the result "+ sol3 +" and a rest of "+ rest3);
		if(nfirst == undefined){
			ndiv3="3";
			nfirst=1;
		}else{
			ndiv3=", 3";
		}
		div3="";
		CheckFormNumberWith4Advanced();
	}
	}
// Start check 4
	function CheckFormNumberWith4Advanced(){
	var sol4=formnumber/4;
	console.log(formnumber + " divided by 4 gives "+ sol4);
// Check if 4 is a Prime number */
	var rest4=formnumber%4;
	if(rest4 == 0){
// 4 yes
		console.log(formnumber +" is dividible by 4 with the result "+ sol4 +" and a rest of "+ rest4);
		if(first == undefined){
			div4="4";
			first=1;
		}else{
			div4=", 4";
		}
		ndiv4="";
		CheckFormNumberWith5Advanced();
	}else{
// 4 no
		console.log(formnumber +" is NOT dividible by 4 with the result "+ sol4 +" and a rest of "+ rest4);
		if(nfirst == undefined){
			ndiv4="4";
			nfirst=1;
		}else{
			ndiv4=", 4";
		}
		div4="";
		CheckFormNumberWith5Advanced();
	}
	}
// Start check 5
	function CheckFormNumberWith5Advanced(){
	var sol5=formnumber/5;
	console.log(formnumber + " divided by 5 gives "+ sol5);
// Check if 5 is a Prime number
	var rest5=formnumber%5;
	if(rest5 == 0){
// 5 yes
		console.log(formnumber +" is dividible by 5 with the result "+ sol5 +" and a rest of "+ rest5);
		if(first == undefined){
			div5="5";
			first=1;
			result=1;
		}else{
			div5=", 5";
		}
		ndiv5="";
		CheckFormNumberWith6Advanced();
	}else{
// 5 no
		console.log(formnumber +" is NOT dividible by 5 with the result "+ sol5 +" and a rest of "+ rest5);
		if(nfirst == undefined){
			ndiv5="5";
			nfirst=1;
		}else{
			ndiv5=", 5";
		}
		div5="";
		CheckFormNumberWith6Advanced();
	}
	}
// Start check 6
	function CheckFormNumberWith6Advanced(){
	var sol6=formnumber/6;
	console.log(formnumber + " divided by 6 gives "+ sol6);
// Check if 6 is a Prime number
	var rest6=formnumber%6;
	if(rest6 == 0){
// 6 yes
		console.log(formnumber +" is dividible by 6 with the result "+ sol6 +" and a rest of "+ rest6);
		div6=", 6";
		ndiv6="";
		CheckFormNumberWith7Advanced();
	}else{
// 6 no
		console.log(formnumber +" is NOT dividible by 6 with the result "+ sol6 +" and a rest of "+ rest6);
		ndiv6=", 6";
		div6="";
		CheckFormNumberWith7Advanced();
	}
	}
// Start check 7
	function CheckFormNumberWith7Advanced(){
	var sol7=formnumber/7;
	console.log(formnumber + " divided by 7 gives "+ sol7);
// Check if 7 is a Prime number
	var rest7=formnumber%7;
	if(rest7 == 0){
// 7 yes
		console.log(formnumber +" is dividible by 7 with the result "+ sol7 +" and a rest of "+ rest7);
		if(first == undefined){
			div7="7";
			first=1;
			result=1;
		}else{
			div7=", 7";
		}
		ndiv7="";
		CheckFormNumberWith8Advanced();
	}else{
// 7 no
		console.log(formnumber +" is NOT dividible by 7 with the result "+ sol7 +" and a rest of "+ rest7);
		if(nfirst == undefined){
			ndiv7="7";
			nfirst=1;
		}else{
			ndiv7=", 7";
		}
		div7="";
		CheckFormNumberWith8Advanced();
	}
	}
	// Start check 8
	function CheckFormNumberWith8Advanced(){
	var sol8=formnumber/8;
	console.log(formnumber + " divided by 8 gives "+ sol8);
// Check if 8 is a Prime number
	var rest8=formnumber%8;
	if(rest8 == 0){
// 8 yes
		console.log(formnumber +" is dividible by 8 with the result "+ sol8 +" and a rest of "+ rest8);
		div8=", 8";
		ndiv8="";
		CheckFormNumberWith9Advanced();
	}else{
// 8 no
		console.log(formnumber +" is NOT dividible by 8 with the result "+ sol8 +" and a rest of "+ rest8);
		ndiv8=", 8";
		div8="";
		CheckFormNumberWith9Advanced();
	}
	}
// Start check 9
	function CheckFormNumberWith9Advanced(){
	var sol9=formnumber/9;
	console.log(formnumber + " divided by 9 gives "+ sol9);
// Check if 9 is a Prime number
	var rest9=formnumber%9;
	if(rest9 == 0){
// 9 yes
		console.log(formnumber +" is dividible by 9 with the result "+ sol9 +" and a rest of "+ rest9);
		div9=", 9";
		ndiv9="";
		AdvancedModeContinue();
	}else{
// 9 no
		console.log(formnumber +" is NOT dividible by 9 with the result "+ sol9 +" and a rest of "+ rest9);
		ndiv9=", 9";
		div9="";
		AdvancedModeContinue();
	}
	}
// Continue mode, test if there was a prime number
function AdvancedModeContinue(){
		if(result == 1){
// No prime number
			console.log("Result: No prime")
			do{
				HigherPrimeStart();
				function HigherPrimeStart(){
					checkingnumber++;
					HigherPrimeCheck2();
				}
		// check checkingnumber with 2
				function HigherPrimeCheck2(){
					var sol2=checkingnumber%2;
					if(sol2 == 0){
						HigherPrimeEnd();
					}else{
						HigherPrimeCheck3();
					}
				}
		// check checkingnumber with 3
				function HigherPrimeCheck3(){
					var sol3=checkingnumber%3;
					if(sol3 == 0){
						HigherPrimeEnd();
					}else{
						HigherPrimeCheck5();
					}
				}
		// Check checkingnumber with 5
				function HigherPrimeCheck5(){
					var sol5=checkingnumber%5;
					if(sol5 == 0){
						HigherPrimeEnd();
					}else{
						HigherPrimeCheck7();
					}
				}
				function HigherPrimeCheck7(){
					var sol7=checkingnumber%7;
					if(sol7 == 0){
						HigherPrimeEnd();
					}else{
						HigherPrimeFound();
					}
				}
		// checkingnumber is a prime number
				function HigherPrimeFound(){
					testednumbers++;
					higherprime=checkingnumber;
					console.log(higherprime +" is the next higher prime of "+ formnumber);
					deactivate=3;
				}
		// checkingnumber is not a prime number
				function HigherPrimeEnd(){
					testednumbers++;
					HigherPrimeStart();
				}
			}while(deactivate <= 2)
			do{
				LowerPrimeStart();
				function LowerPrimeStart(){
					checkingnumberlow--;
					LowerPrimeCheck2();
				}
		// check checkingnumber with 2
				function LowerPrimeCheck2(){
					var sol2=checkingnumberlow%2;
					if(sol2 == 0){
						LowerPrimeEnd();
					}else{
						LowerPrimeCheck3();
					}
				}
		// check checkingnumber with 3
				function LowerPrimeCheck3(){
					var sol3=checkingnumberlow%3;
					if(sol3 == 0){
						LowerPrimeEnd();
					}else{
						LowerPrimeCheck5();
					}
				}
		// Check checkingnumber with 5
				function LowerPrimeCheck5(){
					var sol5=checkingnumberlow%5;
					if(sol5 == 0){
						LowerPrimeEnd();
					}else{
						LowerPrimeCheck7();
					}
				}
				function LowerPrimeCheck7(){
					var sol7=checkingnumberlow%7;
					if(sol7 == 0){
						LowerPrimeEnd();
					}else{
						LowerPrimeFound();
					}
				}
		// checkingnumber is a prime number
				function LowerPrimeFound(){
					testednumbers++;
					lowerprime=checkingnumberlow;
					console.log(lowerprime +" is the next lower prime of "+ formnumber);
					deactivate=6;
				}
		// checkingnumber is not a prime number
				function LowerPrimeEnd(){
					testednumbers++;
					LowerPrimeStart();
				}
			}while(deactivate <= 5)
			AdvancedModeFinishedNo();
			}else{
// prime number
			console.log("Result: Prime")
			AdvancedModeFinishedYes();
		}
	}
// alert with the results
	function AdvancedModeFinishedYes(){
	alert("The number "+ formnumber +" IS A prime number.\nIt is \ndevisible by:\t\t"+ div2 + div3 + div4 + div5 + div6 + div7 + div8 + div9 +"\nnot devisible by:"+ ndiv2 + ndiv3 + ndiv4 + ndiv5 + ndiv6 + ndiv7 + ndiv8 + ndiv9 +" \nis also is dividible by itself ("+ formnumber +") and 1. \n\nMore details and results have been protocolled in the console.");
	}
	function AdvancedModeFinishedNo(){
	alert("The number "+ formnumber +" IS NOT A prime number.\nIt is\ndevisible by:\t"+ div2 + div3 + div4 + div5 + div6 + div7 + div8 + div9 +"\nnot devisible by:"+ ndiv2 + ndiv3 + ndiv4 + ndiv5 + ndiv6 + ndiv7 + ndiv8 + ndiv9 +" \nis also is dividible by itself ("+ formnumber +") and 1. \n\nThe next higher prime number is "+ higherprime +".\nThe next lower prime number is "+ lowerprime +".\nFor that "+ testednumbers +" numbers have been tested.\n\nMore details and results have been protocolled in the console.");
	}
}
