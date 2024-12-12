const userC ={
    name: "@User-name",
    comment: "Lorem ipsum",
    like: false,
    dislike: false,
    heart: false,
    reply: false
}

const allComments = []

function sendC(event) {
    event.preventDefault()

    userC.comment = document.getElementById('txt1').value
    document.getElementById("txt1").value =""
    document.getElementById("comments").innerHTML =""
    
    
    allComments.push(
        {
            comment:userC.comment
        }
    )

    allComments.forEach(element => {
        document.getElementById('comments').innerHTML += `
    <div class="comment">
        <div class="c-info">
            <div class="comment-h">
                <div class="userN">
                    <img src="./pfp.png" alt="">
                    <h3>@User-name</h3>
                </div>
    
                <label class="menu-comment">
                    <img src="./icons/three-dots-vertical.svg" alt="">
                    <input type="checkbox" onchange="showMenu(event)">
    
                    <ul>
                        <li>Moodify</li>
                        <hr>
                        <li>Delete</li>
                        <hr>
                        <li>Report</li>
                        </ul>
                </label>
            </div>
                                    
            <p>${element.comment}</p>
    
            <div class="icons-c">
                                <label>
                                    <span><img src="./icons/hand-thumbs-up.svg" alt=""></span>
                                    <input type="checkbox" onchange="like(event)">
                                </label>
    
                                <label>
                                    <span><img src="./icons/hand-thumbs-down.svg" alt=""></span>
                                    <input type="checkbox" onchange="dislike(event)">
                                </label>
    
                                <label>
                                    <span><img src="./icons/heart.svg" alt=""></span>
                                    <input type="checkbox" onchange="love(event)">
                                </label>
    
                                <label>
                                    <span><img src="./icons/reply-all.svg" alt=""></span>
                                    <input type="checkbox" onchange="replyI(event)">
                                </label>
            </div>
        </div>
    </div>
    `

    });
}    

function showC() {
}

function like(event) {
    if (event.target.checked) {
        event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-up-fill.svg"
    } else {
        event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-up.svg"
    }
}

function dislike(event) {
    if (event.target.checked) {
        event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-down-fill.svg"
    } else {
        event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-down.svg"
    }
}

function love(event) {
    if (event.target.checked) {
        event.target.closest("label").querySelector("img").src = "./icons/heart-fill.svg"
    } else {
        event.target.closest("label").querySelector("img").src = "./icons/heart.svg"
    }
}

function replyI(event) {
    if (event.target.checked) {
        event.target.closest("label").querySelector("img").src = "./icons/reply-all-fill.svg"
    } else {
        event.target.closest("label").querySelector("img").src = "./icons/reply-all.svg"
    }
}

function showMenu(event) {
    if (event.target.checked) {
        event.target.closest("label").querySelector("ul").style = "visibility: visible;"
    } else {
        event.target.closest("label").querySelector("ul").style = "visibility: hidden;"
    }
}