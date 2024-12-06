let comment

function sendC(event){
    event.preventDefault()

    comment = document.getElementById('txt1').value
    showC()
}

function showC(){
    let plc = document.getElementById('be')

    plc.style.display = 'none';

    document.getElementById('comments').innerHTML+= `
        <div class="comment">
            <h3>@User-name</h3>
                        
            <p>${comment}</p>
    </div>
    `
}