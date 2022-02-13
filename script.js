
let likes = document.querySelectorAll(".fa")

console.log(likes);

for ( let i = 0; i<likes.length; i++)
{

    likes[i].addEventListener("click", function()
    {
        if(likes[i].style.color === "rgba(177, 32, 32, 0.3)")
        {
            likes[i].style.color = "red";
        }
        else
        {
            likes[i].style.color = " rgba(177, 32, 32, 0.3)";
        }
    
    });
}
 /*navbar*/
 
/*const button = document.getElementsByClassName('navbar-toggle');
const navbarlinks = document.getElementsByClassName('navbar-links');
button.addEventListener("click", function()
{
    for ( var i = 0; i<navbarlinks.length; i++)
  
    
});*/