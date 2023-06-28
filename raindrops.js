//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* export const convert = () => {
  throw new Error('Remove this statement and implement this function');
}; */

// 3 = pling
// 5 = plang
// 7 = plong


//string that contains raindrop sounds

let  arrSound = ['Pling' , 'Plang' , 'Plong']

console.log(arrSound.length)


for ( let i = 1 ; 1 < 100 ; i++){
  if (i % 5 == 0 && i % 3 == 0){
    console.log('pling')
  }else if (i % 3 == 0){
    console.log('plang')
  }else if (i % 5 == 0){
    console.log('plong')
  }else{ 
    console.log(i)
  }
}