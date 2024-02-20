const form = document.forms.sub
const BASE_URL = "http://localhost:8080"
const container = document.querySelector('.big')
form.onsubmit = (e) => {
    e.preventDefault()
    
    new FormData(form).forEach(inp => {
     
          let inputs = { 
            
                inp
    
    
          }

        
        
        
        
        fetch(BASE_URL + "/users", {
            method: "post",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
            
        })      
                .then(res => res.json())
                .then(res => console.log(res))
                
})
}

function getData() {
    fetch(BASE_URL + "/users")
    .then(res => res.json())
    .then(res => reload(res,container))
}

getData()



function reload(arr, place) {
    place.innerHTML = ""
    
    for(let item of arr) {
   
     let div = document.createElement('div')
    
     let p = document.createElement('p')
 
      div.classList.add('div')
      p.textContent = item.inp
       p.classList.add('p') 
      
       

      div.append(p)
      container.append(div)
            
    }
}

const add_buton = document.querySelector('.add-button')


add_buton.onclick = () => {
    let modal = document.querySelector('.modal-w')
    let body = document.querySelector(".main")
    modal.classList.remove('modal-w')
    modal.classList.add('main-modal', 'main-m')
    body.style.filter = "blur(3px)"
}
