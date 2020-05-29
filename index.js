
let list = [];
let uplist = [];
    
list = ["God of War","Gta V","Gta IV","The Sims 2","The Sims 3", "Gta Vi","The Sims 4","Battlefield 4","Rainbow Six","Fortnite","Moving Out"];


    const input = document.getElementById("input");
    const dropmenu = document.getElementById("dropdown-content");
    const p = document.createElement('p');
   

    
    
  

   function listen(event){
        if(event.target.value){
        dropmenu.innerHTML = ""
        addsearch(event.target.value);
        dropmenu.setAttribute('class','show');
        }else{
            dropmenu.setAttribute('class','');
            dropmenu.innerHTML = ""
        }
    }

    function addsearch(input){
       search = input.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
       const find = new RegExp("^"+search);

       let x=0;
       let y=0;

        while (x <=list.length-1){
            
        if(find.test(list[x])){
            const p = document.createElement("p");
            const a = document.createElement("a");
            a.appendChild(p);
            a.href = `/${list[x]}.html`;
            p.textContent = list[x];
            dropmenu.appendChild(a)
        }else{
               y++;          
            
        }
        x++;
    }
            
            if(y==list.length){
            const p = document.createElement('p');
            p.style.color = "rgba(255,0,0,2)"
            p.style.webkitTextStroke = ".2px black";
            p.textContent = "Nothing Found";
            dropmenu.appendChild(p);
        
        }
    }

    input.addEventListener('keyup',listen);

