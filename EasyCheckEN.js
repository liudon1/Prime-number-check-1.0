function EasyCheck(){
CheckFormNumberWith2Easy();
function CheckFormNumberWith2Easy(){
	if(formnumber%2 == 0){
	alert("NO\nDivisible by 2");
}else{
	CheckFormNumberWith3Easy();
}
}
function CheckFormNumberWith3Easy(){
	if(formnumber%3 == 0){
	alert("NO\nDivisible by 3");
}else{
	CheckFormNumberWith5Easy();
}
}
function CheckFormNumberWith5Easy(){
	if(formnumber%5 == 0){
	alert("NO\nDivisible by 5");
}else{
	CheckFormNumberWith7Easy();
}
}
function CheckFormNumberWith7Easy(){
	if(formnumber%7 == 0){
	alert("NO\nDivisible by 7");
}else{
	alert("PRIME NUMBER")
}
}
}
