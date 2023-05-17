/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise       *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Return Promise object that is resolved with string value === 'Hooray!!! She said "Yes"!',
 * if boolean value === true is passed, resolved with string value === 'Oh no, she said "No".',
 * if boolean value === false is passed, and rejected
 * with error message === 'Wrong parameter is passed! Ask her again.',
 * if is not boolean value passed
 *
 * @param {boolean} isPositiveAnswer
 * @return {Promise}
 *
 * @example
 *    const p1 = willYouMarryMe(true);
 *    p1.then(answer => console.log(answer)) // 'Hooray!!! She said "Yes"!'
 *
 *    const p2 = willYouMarryMe(false);
 *    p2.then(answer => console.log(answer)) // 'Oh no, she said "No".';
 *
 *    const p3 = willYouMarryMe();
 *    p3.then(answer => console.log(answer))
 *      .catch((error) => console.log(error.message)) // 'Error: Wrong parameter is passed!
 *                                                    //  Ask her again.';
 */
function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer !== 'boolean') {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    }

    if (isPositiveAnswer) {
      resolve('Hooray!!! She said "Yes"!');
    }

    resolve('Oh no, she said "No".');
  });
}

// const p1 = willYouMarryMe(true);
// p1.then((answer) => console.log(answer)); // 'Hooray!!! She said "Yes"!'

// const p2 = willYouMarryMe(false);
// p2.then((answer) => console.log(answer)); // 'Oh no, she said "No".';

// const p3 = willYouMarryMe();
// p3.then((answer) => console.log(answer))
//   .catch((error) => console.log(error.message)); // 'Error: Wrong parameter is passed!
// //  Ask her again.';


/**
 * Return Promise object that should be resolved with array containing plain values.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(3), Promise.resolve(12)]
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [1, 2, 3]
 *    })
 *
 */
function processAllPromises(array) {
  // return new Promise((resolve, reject) => {
  //   const values = [];
  //   const count = array.length;

  //   array.forEach((promise) => {
  //     promise
  //       .then((value) => {
  //         values.push(value);

  //         if (values.length === count) {
  //           resolve(values);
  //         }
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // });

  return Promise.all(array.map((promise) => promise.catch((error) => {
    throw error;
  })));
}

// const arrayForPromise = new Array(10).fill(0).map((_, idx) => idx);
// const result1 = arrayForPromise.map((item) => Promise.resolve(item));
// const result2 = arrayForPromise.map((item) => (item % 2));


// const promises = [Promise.resolve(1), Promise.resolve(3), Promise.resolve(12)];
// const p = processAllPromises(promises);
// p.then((res) => {
//   console.log(res); // => [1, 2, 3]
// });

/**
 * Return Promise object that should be resolved with value received from
 * Promise object that will be resolved first.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [
 *      Promise.resolve('first'),
 *      new Promise(resolve => setTimeout(() => resolve('second'), 500)),
 *    ];
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [first]
 *    })
 *
 */
function getFastestPromise(array) {
  return Promise.race(array);
}

// const promises = [
//   Promise.resolve('first'),
//   new Promise((resolve) => setTimeout(() => resolve('second'), 500)),
// ];
// const p = getFastestPromise(promises);
// p.then((res) => {
//   console.log(res); // => [first]
// });

/**
 * Return Promise object that should be resolved with value that is
 * a result of action with values of all the promises that exists in array.
 * If some of promise is rejected you should catch it and process the next one.
 *
 * @param {Promise[]} array
 * @param {Function} action
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */
function chainPromises(/* array, action */) {
  throw new Error('Not implemented');
//   return array.reduce((previousPromise, currentPromise) => (
//     previousPromise.then((previousValue) => (
//       currentPromise.then((currentValue) => (
//         action(previousValue, currentValue)))
//     ))
//   )).catch((error) => {
//     throw error;
//   });
}

// const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// const p = chainPromises(promises, (a, b) => a + b);
// p.then((res) => {
//   console.log(res); // => 6
// });

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
