
  // GET THE IDS FROM HTML PAGE/ HOME PAGE

let addToDoButton = document.getElementById('addToDo');
let  toDoContainer =  document.getElementById('todoContainer');
let inputField =  document.getElementById('inputField');


 function addList()
 {
    var paragraph = document.createElement('p')    // CREATING A PARAGRAPH TAG EVERY TIME 
   paragraph.classList.add('paragraph-styling');
   
   let value =inputField.value.trim();    //validation for empty string

   if(value.length == 0)
   {
    alert('Please Enter Your To-Do..');
   }

    // if not empty string then start this function
   else{
   paragraph.innerText = value ;   // ASSIGNING THE VAULE OF INPUT TO THE PARAGRAPH


   todoContainer.appendChild(paragraph);  // ADDING NEW PARAGRAPH

   inputField.value="";                  // AFTER ADDING NEW PARAGRAPH INPUT FIELD IS BLANK
   

  // ADD PARAGRAPH AFTER HITING + BUTTON  

   paragraph.addEventListener('click', function(){   // WHEN YOU ARE DONE WITH TO DO JUST MARK IT ON JUST ON LINE THROUGH
    paragraph.style.textDecoration =" line-through";
   })


  // FOR DELETE THE PARAGRPH AFTER HITTING DOUBLE CLICK
  
  paragraph.addEventListener('dblclick', function(){    
   todoContainer.removeChild(paragraph);   // TO REMOVE THE ITEM FROM THE LIST
   })


   }

 }

  // EVERY TIME HITTING THE  '+' BUTTON THIS FUNCTION WILL BE TURNED ON
  addToDoButton.addEventListener('click',()=>{
    addList();
  });

  inputField.addEventListener('keyup', (event)=>{

  if(event.which === 13){
     addList();
  }

  });


  