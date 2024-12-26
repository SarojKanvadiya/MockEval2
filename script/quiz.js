import { baseurl } from "./baseurl.js";

let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault()
    let title = form.title.value;
    let optionA = form.optionA.value;
    let optionB = form.optionB.value;
    let optionC = form.optionC.value;
    let optionD = form.optionD.value;
    let correctOption = form.correctoption.value;


    let qustObj ={
        title,
        optionA,
        optionB,optionC,
        optionD,
        correctOption,
        reviewStatus: false
    }
    console.log(qustObj)
    fetch(`${baseurl}/questions`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(qustObj)
    }).then(()=>{
        alert("Question Created")
    }).catch((err)=>{
        console.log(err)
    })
})

async function getQuiz() {
    try{
        let res = await fetch(`${baseurl}/questions`);
    let data = await res.json()
    return data;
    }catch(err){
        console.log(err)
    }
}

// getQuiz()

window.onload = async()=>{
    let arr = await getQuiz();
    displayQuiz(arr)
}
let cont = document.getElementById("quiz-container");

function displayQuiz(arr){

arr.map((el,i)=>{
    let card = document.createElement("div");
    card.setAttribute("id", "card");
    
    let title = document.createElement("h3");
    title.textContent = `Title: ${el.title}`;

    let optionA = document.createElement("p");
    optionA.textContent = `A : ${el.optionA}`
    let optionB = document.createElement("p");
    optionB.textContent = `B : ${el.optionB}`
    let optionC = document.createElement("p");
    optionC.textContent = `C : ${el.optionC}`
    let optionD = document.createElement("p");
    optionD.textContent = `D : ${el.optionD}`
    
    card.append(title,optionA,optionB,optionC,optionD)

cont.appendChild(card)
})
}


