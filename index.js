//requiring modules
import { rm, mkdir } from "fs";
import * as path2 from 'path' ;
import {fileURLToPath} from 'url';
import pkg from 'chalk';
const {blue} = pkg
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path2.dirname(__filename);


//vars used for loop
var path = ''
var i =0

var dirNum

function getInput(){
	inquirer
	.prompt([
		{
		type: 'input',
		name: 'dirNum',
		message: 'How many folders should be inside of eachother?',
		default: 25,
		},
	])
	.then((answers) => {
		// Use user feedback for... whatever!!
		console.log(answers)
		dirNum = parseInt(answers.dirNum) //number of folders inside of eachother
		if(!isNaN(dirNum)){
			deleteDir()
		}else{
			console.log('response must be a number')
			getInput()
		}
	});
}


function deleteDir(){
	//delete dir is it already exists
	rm('i', { recursive: true }, (err) => {
		if (err) {
			console.log(err)
		}

		console.log(`/test is deleted!`);

			//call the function to begin the loop
			createDir()
	});
}

//function calls itself when it has made the new directory
function createDir(){
	if(i<dirNum){
		path+= "/i"
		console.log(blue(i))
 
	 	mkdir(__dirname+path,(err)=>{
			if (err) {
			return console.error(err);
			}
			console.log('Directory created successfully!');
			i++
			createDir()
		});
		
	}
}

//start program
getInput()