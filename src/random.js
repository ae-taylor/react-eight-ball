/** Takes array as arg and returns random 
 * index between 0 and max */
function getRandomAnswer(array) {
   let random = Math.floor(Math.random() * array.length);
   return array[random]
}

export default getRandomAnswer;