
// //console.log("hello world!");

// var comidaNueva = "pizza"
// function which_food(food)
// {
// 	if (food === "pizza") {console.log("Yay!"); }
// 	else if (food === "pasta") {console.log("Not bad.");}
// 	else {console.log("Come on man I'm hungry!")}
// }

// which_food(process.argv[2])


// function comida(ingred1,ingred2){
// console.log("Yum, I love "+ingred1+" and "+ingred2)


// }


//  comida(process.argv[3], process.argv[4])

// // var i = 0
// // while (i <= 42)
// // {
// // 	console.log(i);
// // 	i++
// // }
// //console.log(process.argv)


// // FOR EACH

// var foods = ["pizza" , "comida"]

// var specialsFood = foods.map(function(foods)
// {
// 	return foods.toUpperCase()

// }

// 	)
// console.log(specialsFood+ " yeahhhh ")


// function double(x) {

// 	return x*2
// }
// var nums = [1,2,3,4]
// var nums_double = nums.map(double)
// console.log(nums_double)


// var foods = ["pizza","tomato", "cucumber"]
// var msg = foods.reduce(function(pre,food) {
// return pre + " and " + food
// })
// console.log(msg)

// foods.forEach(function(food){
// console.log(food);

// });



// var a = [1,2,3]


// function multArray(array,times){
// 	function f(x)
// 	{
// 		return x * times

// 	}
// 	var arr2 = array.map(f) 
// 	return arr2
// }

// var a2 = multArray(a,4)


// console.log(a2)


// var a = [1,2,3]
// function myLog(x){
// 	console.log(x)
// }

// myForEach(a,myLog)

// function myForEach(arr,func)
// {
// 	//arr.forEach(func)
// 	for(i=0;i<arr.length;i++)
// 	{
// 		func(arr[i])
// 	}

// }


// var person = {
// 	name: "pepe",
// 	age: 50
// }
// var key = Object.keys(person)   // returns an array with the keys!
// console.log(person.name)
// console.log(key[0])



// var numbers = "80:90:70:100"
// var result = calculateThings(numbers)


// console.log("Avg: " + result.avg);
// console.log("Sum: " + result.sum)
// console.log("Sum: " + result.max)



//   function calculateThings(string) {
// 	var array = string.split(":")
// 	array = array.map(function(number) {
// 		return parseInt(number)
// 	});
// 	console.log(array)

// 	function total(array){
// 		var total = 0;
// 		for ( var i = 0; i < array.length; i++ ) {
// 	    	total += array[i];
// 	    }

// 		return total
// 	}

// 	function avg(array) {
// 		var total_avg = total(array) / array.length;
// 		return total_avg;
// 	}


// 	function maxim( array ){
// 		var max = 0;
// 	    return Math.max.apply( Math, array );
// 	}

// 	// var statistics = {
// 	// 	avg: avg(array),
// 	// 	sum: total(array,
// 	// 	max: maxim(array)
// 	// };

// 	console.log(total(array),avg(array),maxim(array))
// 	var statistics = {
// 		sum: total(array),
// 		avg: avg(array),
// 		max: maxim(array)
// 	}
// 	console.log(statistics)

// 	return statistics

// }


//var words = ["hyuti","aoeog","efla","aeraoth","pithtq","iihht","ioah"] // holati

function decode(array_words) {
	var secret_message = ""
	var letter// = 0
	for (i=0;i<array_words.length;i++){
		letter =  (i % 5)
		secret_message += array_words[i][letter]
	}
	return secret_message
}
//console.log(decode(words))
module.exports = decode;










