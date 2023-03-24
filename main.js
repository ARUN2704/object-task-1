const user=[{
	first_name:"Mike",
	last_name:"Sheridan"
},
{
	first_name:"Tim",
	last_name:"Lee"
},{
	first_name:"Jhon",
	last_name:"Carte"
}];



let name=user.map (function(e){

	return (e.first_name + e.last_name);
	
});

console.log(name);