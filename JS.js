
function validateForm() {
    var score = 0;
    Sumbmitbutton = false;
    let fname = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;

    let radio = document.forms["myForm"]["q1"].value;


    let c1 = document.forms["myForm"]["a1"].checked;
    let c2 = document.forms["myForm"]["a2"].checked;
    let c3 = document.forms["myForm"]["a3"].checked;

    let text = document.forms["myForm"]["q3"].value;


  

    if(c1 && c2){
      score+=2;
    } else if (!c1 && c2 || c1 && !c2){
      score+=1;
    }

    if(radio == 1){
      score+=1;
    }

    
    if (/^never$/i.test(text)){
      score+=1;
    }




    document.getElementById('score').innerHTML = "Score: " + score + "/4";

    if (score == 4){
      document.getElementById('score').innerHTML = "WOW! ALL CORRECT!!!";
    }



    
    var mailformat = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    let namereg = new RegExp("^[a-zA-Z]+$");


  

    if(radio ==""){
      alert("Please fill in radios part")
      Sumbmitbutton = false;
      return false
    }
    if(!c1 && !c2 && !c3){
      alert("Please fill in checkbox part")
      Sumbmitbutton = false;
      return false
    }
    if(text ==""){
      alert("Please fill in text part")
      Sumbmitbutton = false;
      return false
    }


    if (namereg.test(fname) == false || fname == "") {
      alert("Name must be filled out & and only contain letters");   
      Sumbmitbutton = false; 
      return false;
    } 
  

    if (mailformat.test(email) == false || email == "") {
      alert("Must contain following, Presence of @ and . character & Presence of at least one character before and after the @. & Presence of at least two characters after . (dot).");
      Sumbmitbutton = false;
      return false;  
    } 

    var content = document.getElementById('typeContent').value;
    document.getElementById('answer1').innerHTML = "Answer: Boris Jelstin";
    document.getElementById('answer2').innerHTML = "Answer: Albania, Hungary";
    document.getElementById('answer3').innerHTML = "Answer: Never";

    const button = document.getElementById('submit')

    if(!Sumbmitbutton){
      button.disabled = false;
    }
 }




