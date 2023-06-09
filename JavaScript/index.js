let cartcount = document.getElementById('cartCount')

let btnss = document.getElementsByClassName('btnCart')
let count = 0
for(let btn of btnss){
    btn.addEventListener('click', ()=>{ 
        count++;
        document.getElementById('cartCount').innerText = count
    }
)}