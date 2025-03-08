let boxes=document.querySelectorAll(".box");
let newGameBtn=document.querySelector(".btn1");
let resetBtn=document.querySelector(".btn2");
let msgcontainer=document.querySelector(".msgContainer");
let msg=document.querySelector(".msg");

let turnO=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame=()=>{
turnO=true;
enableboxes();
msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=false;
        }
        box.disabled=true;
        checkWinner();
    })
})

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//           if(turnO){
//                box.innerText="O";
//                turnO=false;
//             }
//           else{
//                box.innerText="X";
//                turnO=true;
//             }
//             box.disabled=true;     ////box disbled to avoid new updation during the game
//             checkWinner();   ///function  is called
           
//     });
//     });



const enableboxes =() => {
        for(let box of boxes){
           box.disabled=false;
           box.innerText="";
        }
    }
   
    
const disableboxes =() => {
    for(let box of boxes){
       box.disabled=true;
    }
}


const showWinner=(winner)=>{
    msg.innerText=`WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkWinner=()=>{
        for(let pattern of winPatterns){
            let posVal1=boxes[pattern[0]].innerText;
            let posVal2=boxes[pattern[1]].innerText;
            let posVal3=boxes[pattern[2]].innerText;
            if(posVal1!=""&&posVal2!=""&&posVal3!=""){
                if(posVal1==posVal2&&posVal2==posVal3){
                    showWinner(posVal1);                  /////another function is called
                     return true;
                }
            }
        }
};


newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
    