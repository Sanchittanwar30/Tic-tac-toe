let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newbtn");
let msgcnt = document.querySelector(".message");
let msg=document.querySelector("#msg");

let flag = true;
let cnt=0;

const arr = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[2,5,8],[6,7,8]];

const gamedraw=()=>{
    msg.innerText=`It's a Draw`;
    msgcnt.classList.remove("hide");
    disbtn();
}

const showwinner = (x) => {
    msg.innerText=`Congratulations, winner is ${x}`;
    msgcnt.classList.remove("hide");
    disbtn();
}



const resetgame=()=>{
    flag=true;
    cnt=0;
    enbtn();
    msgcnt.classList.add("hide");

}

const enbtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const checkwinner=()=>{
    for(a of arr){
        let val1=boxes[a[0]].innerText;
        let val2=boxes[a[1]].innerText;
        let val3=boxes[a[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                showwinner(val1);
                return true;
            }
        }

    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(flag){
            box.innerText="0";
            flag=false;
        }
        else{
            box.innerText="X";
            flag=true;
        }
        box.disabled = true;
        cnt++;
       let iswin = checkwinner();
       

        if(cnt === 9 && !iswin){
            gamedraw();
        }

    });

});

newgamebtn.addEventListener("click",resetgame);
rbtn.addEventListener("click",resetgame);