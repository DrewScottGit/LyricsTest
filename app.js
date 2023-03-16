// Find out whether the shape is a cube

// volume = Length * Width * Height

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// function isItACube (side, volume){ 
//     if((volume%side)**3 == side && side > 0){
//     console.log(true + ' This is a cube. OMG Yay!')
//     }else{
//         console.log(false + " this isnt a cube. Try again G!")
//     }
// }
// // isItACube(5,30)
// // isItACube(56,3,1)
// // isItACube(-1,2)
// isItACube(125,5)
// isItACube()
// isItACube()
// isItACube()
// trim it down

// isItACube(side, volume) => volume/side**2 == side && side > 0

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(evt) {
//     const li = document.createElement('li');
//     const inp = document.querySelector('input')
//     li.textContent = inp.value
//     document.querySelector('ul').appendChild(li)
//     console.log(li)
//   });

//When the user clicks a button
//An array of lyrics will show on the screen
//after each array displays on screen they will stay for a time and then change after a declared number of milli seconds

let pTag = document.querySelector('p')

let lyrics = ([['I dont\'t mind'], ['Letting you down easy, but just give it time'], ['if it dont\'t hurt now but just wait, just wait a while'],['You\'re nor the big fish in the pond no more'],['you are what they\'re feeding on'],['So what are you gonna do'],['When the world dont\'t orbit around you?']])

const btn = document.querySelector('button')
function letsStartSinging(){
    for(let i = 0; i < lyrics.length; i++){
    pTag.textContent += lyrics[i]
}
}



// btn.addEventListener('click', function(letsStartSinging){
//     const li = document.createElement('li');
//     const inp = document.querySelector('input')
//     li.textContent = inp.value;
//     document.querySelector('ul').appendChild(li);
//   });

