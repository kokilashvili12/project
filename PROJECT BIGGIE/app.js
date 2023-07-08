function result(){
    let score = 0;
    if(document.getElementById(`Correct1`).checked)
    { score++};
    
    if(document.getElementById(`Correct2`).checked)
    { score++};
   
    if(document.getElementById(`Correct3`).checked)
    { score++};
    if(document.getElementById(`Correct4`).checked)
    { score++};
    if(document.getElementById(`Correct5`).checked)
    { score++};
    if(document.getElementById(`Correct6`).checked)
    { score++};
    if(document.getElementById(`Correct7`).checked)
    { score++};
    if(document.getElementById(`Correct8`).checked)
    { score++};
    if(document.getElementById(`Correct9`).checked)
    { score++};
    if(document.getElementById(`Correct10`).checked)
    { score++};
   
    Swal.fire(
       
        `you got ${score} answers correct`,
        'cool!',
        'okay'
      )
  
}







