function myEach(collection, callback) {
    const collectionArr =  Object.values(collection);
    
     for(let element of collectionArr){
       callback(element);
       
      }
     return collection;
  }
 
  
  function alert(element){
   return(`${element} is a number`);
  }

  
  function myMap(collection, callback){
    
    const collectionArr2 = Object.values(collection);
    const newCollectionArr = [];
    for(let element of collectionArr2){
      newCollectionArr.push(callback(element))
    }
  return newCollectionArr;
  };

  
  function myReduce(collection, callback, acc){
    const collectionArr3 = Object.values(collection);
   if(acc === undefined){
      acc = 0
   }
   let accum = acc
  
    for (let element of collectionArr3){
        accum = callback(accum, element)
    }
    return accum;
}


function myFind(collection, predicate){
    const collectionArr4 = Object.values(collection);
    
    for (const element of collectionArr4){
       if(predicate(element)){
         return element;
       }
    }
  }

  function myFilter(collection, predicate){
    const collectionArr4 = Object.values(collection)
    const newArr = []
    for (const element of collectionArr4){
       if(predicate(element)){
         newArr.push(element)
       }
    }
  return newArr
  }


function mySize(collection) {
    const collectionArr5 = Object.keys(collection)
    let length = 0
    for(let element in collectionArr5){
        length +=1
    }
return length
}


function myFirst(array, n){
    if(n !== undefined) {
      const newArray = array.slice(0, n)
     return newArray
    }else{
      const newArray = array[0]
      return newArray
      
      }
 }



 const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }

 //  function myLast(array, n){
//     //let slicer = -n
//     if(n === undefined) {
//          return array.pop()
         
//     }else{
//         const newArray2 = array.pop(-n)
//         return newArray2
//     }
//  }
 

 function myKeys(object){
    const newArray =[]
    for(let key in object){
    newArray.push(key)
    }
  return newArray
  }

function myValues(object){
   const newArray = []
   for (let key in object){
        newArray.push(object[key])
   }
   return newArray
}