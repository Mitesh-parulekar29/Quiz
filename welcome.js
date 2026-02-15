let namebox = document.getElementById("name")

let checkname = 
(event)=>
{
    event.preventDefault();

    let s1 = namebox.value;
    localStorage.setItem("name1",s1);
    setTimeout(
        ()=>
        {
            window.location.href="./quiz.html";
        }
        ,1500
    );

}