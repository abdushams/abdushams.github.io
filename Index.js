function calc() {
    var t = new Date();
    var yea = t.getFullYear();
    var mon = t.getMonth();
    var day = t.getDate();
    var hou = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();
    var birthYea = document.getElementById("year").value;
    var birthMon = document.getElementById("month").value;
    var birthDay = document.getElementById("day").value;
    var years = yea - birthYea ;
    var months = (years*12 + (mon - birthMon+1));
    var days = (months*30.4375 +(day - birthDay));
    var weeks = parseInt(days/7);
    var hours = (days * 24 - hou);
    var minutes = (hours * 60 - min);
    var seconds = (minutes * 60 - sec);
    
    if ((birthYea != 0) && (birthMon != 0) && (birthDay != 0) && (birthYea >=1900) && (birthMon > 0) && (birthMon < 13) && (birthDay > 0) && (birthDay < 32)){
       document.getElementById("firstBar").innerHTML = "<p id='newBar'>done !<br> <table border='px'>* your age is : <br><tr><td>  " + years + " years  </td></tr><tr><td> " + months + " months  </td></tr><tr><td>  " + weeks + " weeks   </td></tr><tr><td>  " + parseInt(days) + " days   </td></tr><tr><td>  " + hours + " hours   </td></tr><tr><td>  " + minutes + " minutes   </td></tr><tr><td>  " + seconds + " seconds  </rd></tr></table></p>";
    }
    else {
       document.getElementById("firstBar").innerHTML = " <p id='secondBar'>please enter a viled date .<br> * be sure you entered your real birth date and all fields are not blank</p>"
    }
}
