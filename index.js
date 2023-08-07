// code your solution here

function superbowlWin(arrayArgument){   
    
   let winObject = arrayArgument.find(isWin);
   if (winObject === undefined) {
    return undefined;
   
   }
   return winObject.year;
   
   
}

function isWin(element, index, array){
    return element.result === 'W';
    
}

