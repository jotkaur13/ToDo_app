/* title , id, createdAt, deleted, status   */
class ToDo{
    constructor(title,deleted,status){
        this.title=title;
        this.deleted=deleted;
        this.status=status;
    }
}

class ToDoList{
    //list toDo;
      constructor (){
        this.listToDo=[];
      }
        addList(toDo)// work
        {

            this.listToDo.push(toDo);
        }
}
// var toDoList= new ToDoList();


 function addTask(){
    var getInput=document.getElementById("takingInput");
    if(getInput.value!=undefined && getInput.value!=null && getInput.value!="")
    {
       // let todo=getInput;
        let toDo=new ToDo(getInput.value,false,"open");
        getInput.value="";
        updateOpenList(toDo);
       // toDoList.addList(toDo);
    }
    
}


function updateOpenList(toDo)
{
    var div =createDiv(["row","openlisttodo"]); 
    //div.classList.add("row","openlisttodo");
   // var p= document.createElement('p');
    var p=createElementP(toDo);
   //p.innerText=toDo.title; //toDo
   // p.classList.add('col-md-8');
    div.appendChild(p);

    var idiv=document.createElement("div");
    idiv.classList.add('col-md-4');
    var button=document.createElement('i');
    button.classList.add("fas", "fa-play");
    button.style.marginRight="10px";
   // button.onclick=function() { updateInProgressList(toDo); };
    button.addEventListener("click", function(){
        updateInProgressList(toDo,div)
    } );
   // button.onclick="updateInProgressList("+toDo+")";
    idiv.appendChild(button);
    var i=document.createElement('i');
    i.classList.add("fas", "fa-trash");
    i.addEventListener("click",function(){
        deletetoDo(div, "open-list");
    });
    idiv.appendChild(i);
    div.appendChild(idiv);
    document.getElementById("open-list").appendChild(div);
    
}

function updateInProgressList(toDo,div)
{
        var div1 =createDiv(["row","inProgressList"]); 
        //var div1=document.createElement('div');
        //div1.classList.add("row");
        //div1.classList.add("inProgressList");
        var p=createElementP(toDo);
        //var p=document.createElement('p');
        //p.innerText=toDo.title;
        //p.classList.add('col-md-8');
        div1.appendChild(p);
        var idiv=document.createElement("div");
        idiv.classList.add('col-md-4');
        var button=document.createElement('i');
        button.classList.add("fas", "fa-check-circle");
        button.style.marginRight="10px";
       
        //button.classList.add('');
        
        //button.innerText="Completed";
        button.addEventListener("click", function(){
            updateCompletedList(toDo,div1)
        } );
        idiv.appendChild(button);
        var i=document.createElement('i');
        i.classList.add("fas", "fa-trash");
        i.addEventListener("click",function(){
            deletetoDo(div1, "InProgressList");
        });
        idiv.appendChild(i);
        div1.appendChild(idiv);
        document.getElementById("InProgressList").appendChild(div1);
        document.getElementById("open-list").removeChild(div);
}


function updateCompletedList(todo,div)
{ 
    var div2 =createDiv(["row","completedList"]); 
    //var div2=document.createElement('div');
    //div2.classList.add("row");
    //div2.classList.add("completedList");
    var p=createElementP(todo);
    //var p=document.createElement('p');
    //p.innerText=todo.title;
    //p.classList.add('col-md-8');
    div2.appendChild(p);
    var idiv=document.createElement("div");
    idiv.classList.add('col-md-4');
    var i=document.createElement('i');
    i.classList.add("fas", "fa-trash");
  
    i.addEventListener("click",function(){
        deletetoDo(div2, "completedList");
    });

    idiv.appendChild(i);
    div2.appendChild(idiv);
    document.getElementById("completedList").appendChild(div2);
    document.getElementById("InProgressList").removeChild(div);

}


function deletetoDo(todo,parent)
{
    document.getElementById(parent).removeChild(todo);

}

function createDiv(className)
{
    var div=document.createElement('div');
    className.forEach(i => {
    div.classList.add(i);
     
    });

    return div;
}

function createElementP(todo)
{
    var p=document.createElement('p');
    p.innerText=todo.title;
    p.classList.add('col-md-8');
    return p;
    
}

function CreateButtonDiv()
{
    var idiv=document.createElement("div");
    idiv.classList.add('col-md-4');
}