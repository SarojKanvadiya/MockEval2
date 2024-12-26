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


