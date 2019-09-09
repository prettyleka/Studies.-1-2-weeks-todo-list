const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]


var words = story.split(" ");
var wordsCount = words.reduce(function (sum, elem) {
  if(sum[elem]) {
    sum[elem] += 1
  } else {
    sum[elem] = 1;
  }
 
  return sum;
}, {});

console.log(wordsCount)


