const categories = [ "Enterprise","Health","Agricultural","Educational","South African","Hackerton"];

 
 
 
function Roll() {
    let dice = Math.floor(Math.random()*6)+1
    document.querySelector("img").setAttribute("src","./assets/dice" + dice + ".png")
    if (dice===1){
        return categories[0]
    }else if(dice===2){
        return categories[1]
    }else if(dice===3){
        return categories[2]
    }else if(dice===4){
        return categories[3]
    }else if(dice===5){
        return categories[4]
    }else if(dice===6){
        return categories[5]
    }
  
}
let predict = ()=>{
    console.log(`Best ${Roll()} solution`);
    document.querySelector("h4").textContent = `Best ${Roll()} solution`;

}