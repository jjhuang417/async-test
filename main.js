/*
Console Output when you run this file should be:
waited one second
waited one second
waited one second
I'm done
and randomNumber/numFile.txt should exist with a random number in it.
CONSTRAINTS
- You cannot use Math.random or the node fs module directly.
- You can only use the functions in the helpers folder.
*/


// import all the necessary functions into the this document
const getNumLessThanTen = require('./helpers/getNumLessThanTen.js');
const waitOneSecond = require('./helpers/waitOneSecond.js');
const writeToFile = require('./helpers/writeToHardDrive.js');

// We will need to first generate a random number with getNumLessThanTen
// getNumLessThanTen((err, randomNum) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // save the ran
//     let num = randomNum;
//     // then we will chain the waitOneSecond function 3 times
//     waitOneSecond((err, text) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(text);
//         waitOneSecond ((err, text) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log(text);
//             waitOneSecond ((err, text) => {
//               if (err) {
//                 console.log(err)
//               } else {
//                 console.log(text);
//                 // then we will use the writeToFile function to write that random number to a file
//                 // not sure if I can just finish up with an empty callback.
//                 writeToFile(num, (err) => {
//                   if(err) {
//                     console.log('Cannot write file');
//                   } else {
//                     console.log('I am done');
//                   }
//                 });
//               }
//             });
//           }
//         })
//       }
//     })
//   }
// });

waitOneSecond((err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log(text);
    waitOneSecond(() => {
      if (err) {
        console.log(err);
      } else {
        console.log(text);
        waitOneSecond((err, text) => {
          if (err) {
            console.log(err);
          } else {
            console.log(text);
            getNumLessThanTen ((err, data) => {
              if (err) {
                console.log(err);
              } else {
                writeToFile(JSON.stringify(data), (err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log('I am done');
                  }
                })
              }
            })
          }
        });
      }
    });
  }
});