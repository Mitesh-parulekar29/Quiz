let s1 = localStorage.getItem("name1");

let showName =
()=>
{
    let playerbox = document.getElementById("playerbox");
    playerbox.innerText="Player name : "+s1;

}
showName();

let a1=[];
let index = 0;
let current;

let questionbox = document.getElementById("question")
let optionbox = document.getElementById("options")
let nxt = document.getElementById("next-btn")
let scoretag = document.getElementById("score")

let loadArray = 
async ()=>
{
    a1= await fetch("./quiz.json");
    a1= await a1.json();
    showQuestion();
}

let showQuestion = 
()=>
{
    console.log(a1);

    current=a1[index];
    console.log(current);

    questionbox.innerText = current.question;

    current.options.forEach(
        (str,i)=>
        {
            let b1=document.createElement("button")
            b1.innerText=str;
            b1.classList.add("option-btn")
            b1.addEventListener("click",
                ()=>
                {
                    checkAnswer(i);
                }
            )
            optionbox.appendChild(b1);

        }
    );
}

loadArray();

let nextQuestion =
()=>
{
    index++;
    optionbox.innerHTML="";
    if(index===a1.length)
    {
        questionbox.innerText="Quizz Completed ✅";
        nxt.style.display = "none";
        return;
    }
    showQuestion();
}


let score=0;

let checkAnswer =
(i)=>
{

    if(i===current.correct)
    {
        score++;
        scoretag.innerText="Score : "+score;
    }
        let btnArray = document.querySelectorAll(".option-btn");
        btnArray.forEach(
            (btn,i)=>
            {
                btn.disabled=true;
                if(i===current.correct)
                {
                    btn.style.backgroundColor="green";
                    return;
                }
                btn.style.backgroundColor="red";
            }
        );
    

}

