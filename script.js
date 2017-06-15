// Enough Handson - RxJS
// Part 2

// Data stream from a "Arrays"
console.log('----------Array Stream-------------');

Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]).subscribe(
  // Function to call when there is more data available
  function (x) {
    console.log('Next: ' + x);
  },

// Function to call when there is a error in the stream
  function (err) {
    console.log('Error: ' + err);
  },

// Function to call when there is no more data available
  function () {
    console.log('Completed');
  }
);


// Data stream from a "Arrays Like Objects"
console.log('----------Stream from Array Like Objects (like function arguments-------------');

function argumentFunc(){
  return Rx.Observable.from(arguments);
}

argumentFunc(10,20,30).subscribe(

  function (data) {
    console.log('data:',data);
  },
  function (error) {
    console.log('error:',error);
  },
  function () {
    console.log('Function arguments complete');
  }

);

console.log('----------Stream from Maps-------------');

var m = new Map([[1, 2], [2, 4], [4, 8]]);
Rx.Observable.from(m).subscribe(
  function (x) { console.log('Next: ' + x); },
  function (err) { console.log('Error: ' + err); },
  function () { console.log('Completed'); });

