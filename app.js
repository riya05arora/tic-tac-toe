let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disable=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
 
const showwinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkwinner=()=>{
            for(pattern of winpatterns){
                let pos1=boxes[pattern[0]].innerText;
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;

                if(pos1!="" && pos2!=""&& pos3!=""){
                    if(pos1===pos2 && pos2===pos3){
                        console.log("Winner");
                        showwinner(pos1);
                    }
                }

            }
}

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");


}
newBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame)