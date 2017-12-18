// for ( var i = 0; i < 10; i++ ) {
// 	console.log(i);
// }

// console.log(document);

// console.log(process.argv);

// var song = process.argv[2];
// // console.log(typeof song);
// if ( song == 'yesterday' || typeof parseInt(song) == 'number' ) {
// 	console.log('Yep, that is a match');
// }


// console.log(parseInt('15'));

// var info = ['get_song', 'yesterday'];

// if ( info[0] == 'get_song' ) {
// 	console.log(info[1]);
// }

// var command = process.argv[2];

// function getSong(song) {
// 	// API Request
// 	console.log('Search for ' + song);
// }


// if ( command == 'get_song' ) {
// 	getSong(process.argv[3]);
// }


// var test = require('./another.js');

// var data = require('./modules/data.js');

// var app = 'app';

// module.exports = app;

// console.log(data);



var inquirer = require('inquirer');

// inquirer.prompt([
// 	{
// 		name: 'first_name',
// 		message: 'What is your first name?'
// 	},
// 	{
// 		name: 'last_name',
// 		message: 'What is your last name?'
// 	}
// ]).then(function(answers) {
// 	console.log(answers);

// 	// var name = answers.first_name;

// 	// console.log('Your name is ' + name + '!');
// });

function promptUser(type) {
	if ( type == 'song' ) {
		inquirer.prompt({
			name: 'song_name',
			message: 'What is the song title?'
		}).then(function(answer) {
			// API call to spotify to get the song information
			// console the info to the user
			var song = answer.song_name;
			// false, undefined, null, 0, NaN, ''
			if ( !song ) {
				console.log('show basic default');
			} else {
				console.log(answer);
			}
			
		});
	}
}

inquirer.prompt([
	{
		type: 'list',
		choices: ['Song', 'Movie Title', 'Twitter Feed'],
		name: 'command',
		message: 'What would you like to do?'
	}
]).then(function(answer) {
	var command = answer.command;

	if ( command == 'Song' ) {
		promptUser('song');
	}

	// var name = answers.first_name;

	// console.log('Your name is ' + name);
});















