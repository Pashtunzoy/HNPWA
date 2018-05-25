/**
 * This function is the public API for the recurison function. 
 * It takes an array of comments and returns an array of arrays
 * @param {any} { comments = [] } 
 * @returns Array of arrays and inside it those array includes each comments section
 */
const recursiveComments = ({ comments = [] }) => {
  // Gets the array returned by the recursive function
  return comments.map(c => {
    let cm = c.comments.slice(0, 1).shift();
    let laterArray = {};
    laterArray.comments = c.comments.slice(1, c.length);
    let initialArr = [];
    initialArr.push(c.content);
    let finalResult = [];
    delete c.comments;
    finalResult.push(c);
    return recursion(cm, initialArr, laterArray, finalResult);
  });
};

/**
 * The main engine of comments recursion and it returns the array of array
 * used by the commentReucursion to forward it to called function.
 * 
 * @param {any} cm 
 * @param {any} arr 
 * @param {any} laterArr 
 * @param {any} finalResult 
 * @returns 
 */
const recursion = (cm, arr, laterArr, finalResult) => {
  if (!cm || !cm.comments.length) {
    cm && cm.content ? arr.push(cm.content) && finalResult.push(cm) : cm;
    if (laterArr.comments.length) {
      laterArr.comments = laterArr.comments
        .filter(arr => arr.length >= 1 || arr.content)
        .map((c, i) => c[i] || c);
      return recursion(laterArr.comments.shift(), arr, laterArr, finalResult);
    }
    return finalResult;
  }!arr.includes(cm.content) && cm.content ? arr.push(cm.content) && finalResult.push(cm) : arr;
  let currentCM = cm.comments.shift();
  if (currentCM.comments.length) {
    laterArr.comments.unshift(currentCM.comments);
  } else if (!laterArr.comments.length) {
    laterArr.comments.unshift(cm.comments);
  }
  return recursion(currentCM, arr, laterArr, finalResult);
};


export default recursiveComments;