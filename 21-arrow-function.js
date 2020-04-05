// const square = function(x){
//     return x*x
// }

// console.log(square(4))
// const add =((a,b) =>{
// return a+b
// })

// console.log(add(3,5))

const square = (x) => x*x;
console.log(square(44))

const event = {
    name:"Birthday Party",
    guestList:['Money','Andrew','Honey'],
    printGuestList(){

        // const that =this
        const n =this.name;
        console.log('Guest List for '+ this.name)
        this.guestList.forEach(function(guest) {
         
            console.log(guest+" is attending "+n)  
        });
    }

}
event.printGuestList()