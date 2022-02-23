//requiring modules
const fs = require("fs");
const chalk = require('chalk')

//vars used for loop
var path = ''
var i =0

//input data here
dirNum = 15 //number of folders inside of eachother
dirname = '/test' //name of each folder


//function calls itself when it has made the new directory
function createDir(){
	if(i<15){
		path+= "/test"
		console.log(chalk.blue(i))
 
	 	fs.mkdir(__dirname+path,(err)=>{
			if (err) {
			return console.error(err);
			}
			console.log('Directory created successfully!');
			i++
			createDir()
		});
		
	}
}

//call the function to begin the loop
createDir()