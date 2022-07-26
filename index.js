console.log('this is a log');  // logs a basic message to the console
console.warn('this is a WARNING'); // logs a warning to the console that is highlighted in yellow
console.error('this is an ERROR');  // logs an ERROR to the console that is highlighted in red

/*--------------------------------------------------------------------------*/

// small array maker function
function makeArray(start, stop) {
  var results = [];

  for (var i = start; i <= stop; i++) {
      results.push(i);
  }
  return results;
}

var smallArray = makeArray(0, 10); // calls array maker function to create an array from 0 to 10

smallArray.map(function(x) {
    if (x === 5) {
        console.log('found it!');
    } else {
        console.log('searching. . . ');
    }
});


smallArray.map(function(x) {
    if (x === 5) {
        console.warn('found it!');
    } else {
        console.log('searching. . . ');
    }
});


/*--------------------------------------------------------------------------*/


// some other cool stuff you can do with console.log();
// adding color and CSS to your logs

console.log('%c I\'m a fancy message!', 'background-color: blue; font-weight: bold; padding: 15px; border: solid; border-radius: 10px');

console.log('%c I have my own style! %c and my style is different!',
            'background-color: pink; color: black; padding 15px; border: solid; border-width: thin; border-color: red',
            'margin-left: 15px; color: yellow; border: dashed; border-radius: 25%; padding: 30px');


/*--------------------------------------------------------------------------*/


function pretendAsync(timeDelay) {
    console.time('stopwatch');  // this starts a timer in the console with the name of "stopwatch"
    setTimeout(function() {
        console.timeLog('stopwatch'); // this tells me the current time held by the "stopwatch" timer
        console.timeEnd('stopwatch'); // this stops the "stopwatch" timer and returns the time elapsed
    }, timeDelay)
}

pretendAsync(2000);


/*--------------------------------------------------------------------------*/


// created a nest/indented group to visually group messages
// is expanded by default
// to log a collapsed group use console.groupCollapsed();
console.group();
console.log('this is indented for easier grouping');
console.log('so is this on');
console.log('me too!');
console.groupEnd();

console.log('but I am not');


/*--------------------------------------------------------------------------*/


// clears all information in the console
console.clear();