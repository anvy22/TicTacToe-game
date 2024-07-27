const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#restBtn");
const Win = document.querySelector("#W1");
const restartBtn = document.querySelector("#restart");
const container = document.querySelector(".winnerShow");
const Winner = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];
 
let turnO = true;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner(box);
        
    })
    
})

const checkWinner = (box)=>{
    for(i of Winner){
        let pos1=boxes[i[0]].innerText;
        let pos2=boxes[i[1]].innerText;
        let pos3=boxes[i[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3)
            {
                
                showWinner(pos1);
            }
                
        }


    }
}

const showWinner = (pos1)=>{
    
    Win.innerText=`Winner is ${pos1}`;
    container.classList.remove("hide");
    for(i of boxes)
    {
        i.disabled=true;

    }


}
restartBtn.addEventListener("click",()=>{
    for(i of boxes){
       i.innerText="";
       turnO=true;
       disable();
       container.classList.add("hide");
    }
});

resetBtn.addEventListener("click",()=>{
    for(i of boxes){
       i.innerText="";
       turnO=true;
       disable();
       container.classList.add("hide");
    }
});
const disable = ()=>{
    for(i of boxes){
        i.disabled=false;
    }
}