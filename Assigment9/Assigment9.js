


 const checkNum = document.querySelector('.check')
 


const secretNum = 10;
console.log(secretNum);


const userNum = document.querySelector('.userInput')
console.log(userNum)


let img=document.querySelector('.img')
let imag=document.querySelector('.imag')
let box1=document.querySelector('.box1')
const box=document.querySelector('.box')

 
const msg = document.querySelector('.msg')
const msj = document.querySelector('.msj')
const buttonR=document.querySelector('.btnR')
const buttonC=document.querySelector('.btnC')
const buttonD=document.querySelector('.btnD')


const Rabbit={
    name:'Sun Shine',
    age:2,
    breed:'Rabbit'
}
const Cat={
    name:'Muezza',
    age:3,
    breed:'MyCat'
} 
const Dog={
    name:'Shurido',
    age:4,
    breed:'Dog'
} 
 const showPict = function () {
    imag.classList.remove("hidden")
      }
      const hidePict = function () {
          imag.classList.add("hidden")
            }
 
 
 
 const showPic = function () {
  img.classList.remove("hidden")
    }
    const hidePic = function () {
        img.classList.add("hidden")
          }
        
          buttonR.addEventListener('click',function () {
            hidePict()
             msj.textContent=`${Rabbit.name} is a ${Rabbit.breed} and is ${Rabbit.age} years old `;
            imag=document.querySelector('.imag2')
            showPict()
})
buttonC.addEventListener('click',function () {
    hidePict()
    msj.textContent=`${Cat.name} is a ${Cat.breed} and is ${Cat.age} years old `;
    imag=document.querySelector('.imag')
    showPict()
})
buttonD.addEventListener('click',function () {
    hidePict()
    msj.textContent=`${Dog.name} is a ${Dog.breed} and is ${Dog.age} years old `;
    imag=document.querySelector('.imag3')
    showPict()
})
        checkNum.addEventListener('click',function () {
            if (userNum.value == 10) {
                msg.textContent = "You Got the Secret Number! "+secretNum+" Congratulations!!! ";
                hidePic()
                img=document.querySelector('.img4')
                showPic()
            }else if (userNum.value > secretNum) {
                    msg.textContent = 'Too High, Be Carefull Don`t Fall';
                    hidePic()
                    img=document.querySelector('.img2')
                    showPic()
                
             } else if (userNum.value < secretNum&&userNum.value >=1) {
                hidePic()
        
                 msg.textContent = 'Too Low Think Big';
                 img=document.querySelector('.img3')
                 showPic()
                
             } 
             else if(userNum.value!=Number||userNum.value=='0'){
                hidePic()
                msg.textContent = 'No Input or Invalid Value'
                img=document.querySelector('.img')
                showPic()
   
            } else{
                showPic()
            }
       
        
       
    
    
    })


