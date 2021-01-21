function getBreedList() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(
        responseJson => {
          let temp = generateBreedsArray(responseJson);
          console.log(responseJson);  
        }        
    )
    .catch(error => alert('Something went wrong. Try again later.'));
}

async function generateBreedsArray(responseJson){
  var outputArray = [];  
  for (let element in responseJson["message"]) {  
      outputArray.push({  
          id: element,  
          name: responseJson["message"][element]  
      });  
  }  
  console.log(outputArray); 
  return outputArray;
}


  // (async () => {
  //   let response = await fetch('https://dog.ceo/api/breeds/list/all');
  //   let responseJson = await response.json();
  //   const temp = await generateBreedsArray(responseJson);
  //   const breed = temp;
  //   console.log("temp");
  //   console.log(temp);
  //   console.log(breed);
  //   })();



// const breed = getBreedList();
// console.log("Me here");
// console.log(breed);


// const breed = 
// [ { id: 'affenpinscher', name: [] },
//   { id: 'african', name: [] },
//   { id: 'airedale', name: [] },
//   { id: 'akita', name: [] },
//   { id: 'appenzeller', name: [] },
//   { id: 'australian', name: [ 'shepherd' ] },
//   { id: 'basenji', name: [] },
//   { id: 'beagle', name: [] },
//   { id: 'bluetick', name: [] },
//   { id: 'borzoi', name: [] },
//   { id: 'bouvier', name: [] },
//   { id: 'boxer', name: [] },
//   { id: 'brabancon', name: [] },
//   { id: 'briard', name: [] },
//   { id: 'buhund', name: [ 'norwegian' ] },
//   { id: 'bulldog', name: [ 'boston', 'english', 'french' ] },
//   { id: 'bullterrier', name: [ 'staffordshire' ] },
//   { id: 'cairn', name: [] },
//   { id: 'cattledog', name: [ 'australian' ] },
//   { id: 'chihuahua', name: [] },
//   { id: 'chow', name: [] },
//   { id: 'clumber', name: [] },
//   { id: 'cockapoo', name: [] },
//   { id: 'collie', name: [ 'border' ] },
//   { id: 'coonhound', name: [] },
//   { id: 'corgi', name: [ 'cardigan' ] },
//   { id: 'cotondetulear', name: [] },
//   { id: 'dachshund', name: [] },
//   { id: 'dalmatian', name: [] },
//   { id: 'dane', name: [ 'great' ] },
//   { id: 'deerhound', name: [ 'scottish' ] },
//   { id: 'dhole', name: [] },
//   { id: 'dingo', name: [] },
//   { id: 'doberman', name: [] },
//   { id: 'elkhound', name: [ 'norwegian' ] },
//   { id: 'entlebucher', name: [] },
//   { id: 'eskimo', name: [] },
//   { id: 'finnish', name: [ 'lapphund' ] },
//   { id: 'frise', name: [ 'bichon' ] },
//   { id: 'germanshepherd', name: [] },
//   { id: 'greyhound', name: [ 'italian' ] },
//   { id: 'groenendael', name: [] },
//   { id: 'havanese', name: [] },
//   { id: 'hound',
//     name: 
//      [ 'afghan',
//        'basset',
//        'blood',
//        'english',
//        'ibizan',
//        'plott',
//        'walker' ] },
//   { id: 'husky', name: [] },
//   { id: 'keeshond', name: [] },
//   { id: 'kelpie', name: [] },
//   { id: 'komondor', name: [] },
//   { id: 'kuvasz', name: [] },
//   { id: 'labrador', name: [] },
//   { id: 'leonberg', name: [] },
//   { id: 'lhasa', name: [] },
//   { id: 'malamute', name: [] },
//   { id: 'malinois', name: [] },
//   { id: 'maltese', name: [] },
//   { id: 'mastiff', name: [ 'bull', 'english', 'tibetan' ] },
//   { id: 'mexicanhairless', name: [] },
//   { id: 'mix', name: [] },
//   { id: 'mountain', name: [ 'bernese', 'swiss' ] },
//   { id: 'newfoundland', name: [] },
//   { id: 'otterhound', name: [] },
//   { id: 'ovcharka', name: [ 'caucasian' ] },
//   { id: 'papillon', name: [] },
//   { id: 'pekinese', name: [] },
//   { id: 'pembroke', name: [] },
//   { id: 'pinscher', name: [ 'miniature' ] },
//   { id: 'pitbull', name: [] },
//   { id: 'pointer', name: [ 'german', 'germanlonghair' ] },
//   { id: 'pomeranian', name: [] },
//   { id: 'poodle', name: [ 'miniature', 'standard', 'toy' ] },
//   { id: 'pug', name: [] },
//   { id: 'puggle', name: [] },
//   { id: 'pyrenees', name: [] },
//   { id: 'redbone', name: [] },
//   { id: 'retriever',
//     name: [ 'chesapeake', 'curly', 'flatcoated', 'golden' ] },
//   { id: 'ridgeback', name: [ 'rhodesian' ] },
//   { id: 'rottweiler', name: [] },
//   { id: 'saluki', name: [] },
//   { id: 'samoyed', name: [] },
//   { id: 'schipperke', name: [] },
//   { id: 'schnauzer', name: [ 'giant', 'miniature' ] },
//   { id: 'setter', name: [ 'english', 'gordon', 'irish' ] },
//   { id: 'sheepdog', name: [ 'english', 'shetland' ] },
//   { id: 'shiba', name: [] },
//   { id: 'shihtzu', name: [] },
//   { id: 'spaniel',
//     name: 
//      [ 'blenheim',
//        'brittany',
//        'cocker',
//        'irish',
//        'japanese',
//        'sussex',
//        'welsh' ] },
//   { id: 'springer', name: [ 'english' ] },
//   { id: 'stbernard', name: [] },
//   { id: 'terrier',
//     name: 
//      [ 'american',
//        'australian',
//        'bedlington',
//        'border',
//        'dandie',
//        'fox',
//        'irish',
//        'kerryblue',
//        'lakeland',
//        'norfolk',
//        'norwich',
//        'patterdale',
//        'russell',
//        'scottish',
//        'sealyham',
//        'silky',
//        'tibetan',
//        'toy',
//        'westhighland',
//        'wheaten',
//        'yorkshire' ] },
//   { id: 'vizsla', name: [] },
//   { id: 'waterdog', name: [ 'spanish' ] },
//   { id: 'weimaraner', name: [] },
//   { id: 'whippet', name: [] },
//   { id: 'wolfhound', name: [ 'irish' ] } ];