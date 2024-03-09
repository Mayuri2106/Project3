let string=""
let buttons=document.querySelectorAll('.button')


buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
           try{ string=eval(string)
            document.querySelector('input').value=string
            string=""
           }
           catch(error){
            console.log("error")
            document.querySelector('input').value=0
            string=""
            }
        }
        
        else if(e.target.innerHTML=='DEL'){
                string=" "
                document.querySelector('input').value=string
            }

        else if(e.target.innerHTML=='RESET'){
           string="0"
          document.querySelector('input').value=string
          string=""
        }
        
        else{
        
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
            
        }
    })
})