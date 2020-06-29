// chapter 21-25
// task1
// let fname = prompt('First Name');
// let lname = prompt('Last Name');
// var full_name = fname+" "+lname;
// alert('greetings ' + full_name);


// task2
// let mobile_name = prompt('your favourite mobile phone?');
// alert('My favourite mobile is '+ mobile_name + " length of string is " + mobile_name.length);

// task3
// var pak = 'pakistan';
// document.write(pak.indexOf('n'));

// task4
// var text = 'Hello World';
// document.write(text.lastIndexOf('l'));

// task5
// var pak = 'pakistan';
// document.write(pak.charAt(3));

// // task6
// let fname = prompt('First Name');
// let lname = prompt(' Last Name');
// let full_name = fname.concat(lname);
// alert('Good Morning: ' + full_name);

// task7
// let city = 'Hyderabad';
// let replacement = city.replace('Hyder' , 'Islam');
// document.write(replacement);

// task8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replacement = message.replaceAll('and' , '&')
// document.write(replacement);

// task9
// var value = 472;
// var name = value.toString();
// console.log(typeof 'name');

// task10
// var name = 'peanuts';
// document.write(name.toUpperCase())

// task11
// var name = 'javascript';
// document.write(name.charAt(0).toUpperCase() + name.slice(1));

// task12
// var num = 35.44;
// let final = num.toString();
// document.write(final.slice(0,2) + 44);

// task13
// let username = prompt('Enter your name');

// if (username.includes('@')) {
// 	alert('Enter valid USERname');
// }else if (username.includes('.')) {
// 	alert('Enter valid USERname');
// }else if (username.includes(',')) {
// 	alert('Enter valid USERname');
// }else if (username.includes('!')) {
// 	alert('Enter valid USERname');
// }

// task14
// var a=["cake","apple pie","cookie","chips","patties"];
// var userinput= prompt("enter the item you want");
// var count = a.length;
// for (var i=0; i<a.length; i++){
//     count--;
//     if(a[i].toUpperCase()===userinput.toUpperCase()){
//         document.write(a[i]+ " is available at index "+ i +" at our bakery \n");
//         break;}
//     if(count===0)
//         document.write("we are sorry. " + userinput + " is not available at our bakery");
// }

//task15
// var name = prompt('Enter password');
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// document.write(name.includes('lowerCaseLetters'))

// task16
// var university = 'University of Karachi.';
// let arr = university.split('')
// console.log(arr);

// task17
// let input = prompt('INPUt');
// document.write(input.charAt(input.length - 1));


// task18
// let name = 'the quick brown fox jumps over the lazy dog';
// document.write(name + ' <br>' + " in this the Occurrence of the is " + name.includes('the').length);

// chap 26-30
// task1
// let num =prompt('Enter a positive Integer number');
// document.write(num + ' <br>');
// document.write(Math.round(num) + ' <br>');
// document.write(Math.floor(num) + ' <br>');
// document.write(Math.ceil(num) + ' <br>');

// task2
// let num = prompt('Enter a Negative Integer number');
// document.write(num + ' <br>');
// document.write(Math.round(num) + ' <br>');
// document.write(Math.floor(num) + ' <br>');
// document.write(Math.ceil(num) + ' <br>');

// task3
// let num = prompt('Enter a number');
// document.write(Math.abs(num) + ' <br>');

// task4
// let dice = ((Math.random() * 5) + 1);
// document.write('Random Dice Value ' + Math.round(dice));


// task5
// let dice = (Math.floor((Math.random() * 2) + 1));
// if (dice === 1) {
// 	document.write('Its Tail');
// }else {
// 	document.write('Its Head');
// }




// task6
// let num = ((Math.randomx() * 100) + 1);
// document.write('Random Num Between 1 and 100: ' + Math.round(num));



// task7
// let weight = prompt('Your Weight');
// let parsed = parseInt(weight);
// document.write(parsed+ 'KGS');




// task8
// let enter = prompt('Enter num between 1 to 10');
// let secret_num = 7;
// if (enter == secret_num) {
// 	document.write('Congrats your guess is right');
// }
// else{
// 	document.write('Try Again')
// }

//chap31-34
// task1
// let date = new Date();
// document.write(date);


// task2
// let date = new Date();
// let month = date.getMonth()
// document.write(month);


// task3
// let date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// document.write(weekday[date.getDay()]);



// task4
// let date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// if (weekday[date.getDay()] === 'Saturday' || weekday[date.getDay()] === 'Sunday') {
// 	document.write('Its fun day')
// }



// task5
// let date = new Date();
// document.write(date + '<br>');
// let milsec = date.getTime();
// document.write(milsec + '<br>');
// let min = date.getTime()/1000*60;
// document.write(min + '<br>');


// task6
// let date = new Date();
// let time = date.getHours();
// if (time == 12) {
// 	document.write('ITS AM')
// }else{
// 	document.write('ITS PM')
// }


// task7
// let lastdate = new Date(2020, 11, 31);
// document.write(lastdate);



// task8
// let lastdate = new Date(2015, 5, 18);
// let dayz = lastdate.getDay()
// document.write(dayz);



//chap35-40
// task1
// function Time() {
// var now = new Date();
// alert(now)
// }
// console.log(Time());



// // task2
// function name() {
// 	let fname = prompt('Enter fname');
// 	let lname = prompt('Enter lname');
// 	alert('greetings ' + fname + " "+ lname)
// }
// console.log(name())



// task3
//  function name() {
// 	let fnum = prompt('Enter Number');
// 	let lnum = prompt('Enter Number');
// 	alert(fnum+lnum)
// }
// console.log(name())


// task4
// function calcultor(num1, num2) {
// 	return num1 + num2
// }
// console.log(calcultor(2,4));



// task5
// function sqr(num) {
// 	return num * num;
// }
// console.log(sqr(7))



// task6
// function fact(numb){
//     let multiplier = numb;
//     let result;
//     while (multiplier!==0){
//         multiplier--;
//         result = numb*multiplier;
//     }
//     document.write(result);
// }
// console.log(fact(prompt("enter a num")));