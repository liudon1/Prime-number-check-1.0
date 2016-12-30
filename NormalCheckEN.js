function NormalCheck(){
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
	var first;
	var nfirst;
	StartNormalCheck();
	function StartNormalCheck(){
		CheckFormNumberWith2();
	}
	// START
	function CheckFormNumberWith2(){
	// Check if 2 is a Prime number
	var rest2=formnumber%2;
	if(rest2 == 0){
		div2="2";
		ndiv2="";
		first=1;
		CheckFormNumberWith3();
	}else{
		ndiv2="2";
		div2="";
		nfirst=1;
		CheckFormNumberWith3();
	}
	}
	function CheckFormNumberWith3(){
	// Check if 3 is a Prime number
	var rest3=formnumber%3;
	if(rest3 == 0){
		if(first == undefined){
			div3="3";
			first=1;
		}else{
			div3=", 3";
		}
		ndiv3="";
		CheckFormNumberWith4();
	}else{
		if(nfirst == undefined){
			ndiv3="3";
			nfirst=1;
		}else{
			ndiv3=", 3";
		}
		div3="";
		CheckFormNumberWith4();
	}
	}
	function CheckFormNumberWith4(){
	// Check if 4 is a Prime number
	var rest4=formnumber%4;
	if(rest4 == 0){
		div4=", 4";
		ndiv4="";
		CheckFormNumberWith5();
	}else{
		if(nfirst == undefined){
			ndiv4="4";
			nfirst=1;
		}else{
			ndiv4=", 4";
		}
		div4="";
		CheckFormNumberWith5();
	}
	}
	function CheckFormNumberWith5(){
	// Check if 5 is a Prime number
	var rest5=formnumber%5;
	if(rest5 == 0){
		if(first == undefined){
			div5="5";
			first=1;
		}else{
			div5=", 5";
		}
		ndiv5="";
		CheckFormNumberWith6();
	}else{
		if(nfirst == undefined){
			ndiv5="5";
			nfirst=1;
		}else{
			ndiv5=", 5";
		}
		div5="";
		CheckFormNumberWith6();
	}
	}
	function CheckFormNumberWith6(){
	// Check if 6 is a Prime number
	var rest6=formnumber%6;
	if(rest6 == 0){
		div6=", 6";
		ndiv6="";
		CheckFormNumberWith7();
	}else{
		if(nfirst == undefined){
			ndiv6="6";
			nfirst=1;
		}else{
			ndiv6=", 6";
		}
		div6="";
		CheckFormNumberWith7();
	}
	}
	function CheckFormNumberWith7(){
	// Check if 7 is a Prime number
	var rest7=formnumber%7;
	if(rest7 == 0){
		if(first == undefined){
			div7="7";
			first=1;
		}else{
			div7=", 7";
		}
		ndiv7="";
		CheckFormNumberWith8();
	}else{
		if(nfirst == undefined){
			ndiv7="7";
			nfirst=1;
		}else{
			ndiv7=", 7";
		}
		div7="";
		CheckFormNumberWith8();
	}
	}
	function CheckFormNumberWith8(){
	// Check if 8 is a prime number
	var rest8=formnumber%8;
	if(rest8 == 0){
		div8=", 8";
		ndiv8="";
		CheckFormNumberWith9();
	}else{
		if(nfirst == undefined){
			ndiv8="8";
			nfirst=1;
		}else{
			ndiv8=", 8";
		}
		div8="";
		CheckFormNumberWith9();
	}
	}
	function CheckFormNumberWith9(){
	// Check if 9 is a Prime number
	var rest9=formnumber%9;
	if(rest9 == 0){
		div9=", 9";
		ndiv9="";
		NormalModeFinished();
	}else{
		if(nfirst == undefined){
			ndiv9="9";
		}else{
			ndiv9=", 9";
		}
		div9="";
		NormalModeFinished();
	}
	}
	
	function NormalModeFinished(){
	alert(formnumber +" is \ndevisible by:"+ div2 + div3 + div4 + div5 + div6 + div7 + div8 + div9 +"\nnot devisible by:"+ ndiv2 + ndiv3 + ndiv4 + ndiv5 + ndiv6 + ndiv7 + ndiv8 + ndiv9 +" \nis also is dividible by itself ("+ formnumber +") and 1. ");
	}
}
