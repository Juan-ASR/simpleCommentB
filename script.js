const userC ={
    name: "@User-name",
    comment: "Lorem ipsum",
    reactions:  {
        like: false,
        dislike: false,
        heart: false,
        reply: false,
        reported: false,
        deleted: false
    }
}

const allComments = [] //every comment is saved here

function sendC(event) {
    event.preventDefault()

    userC.comment = document.getElementById('txt1').value //gets the text area info / value
    document.getElementById("txt1").value ="" //empty the text area
    document.getElementById("comments").innerHTML ="" //empty the comments container
    
    
    allComments.push(
        {
            comment:userC.comment,
            reactions: {
                like: userC.reactions.like,
                dislike: userC.reactions.dislike,
                reply: userC.reactions.reply,
                heart: userC.reactions.heart,
                report: userC.reactions.reported,
                deleted: userC.reactions.deleted
            }
        }
    )

    allComments.forEach(

        (element, index) => {
            let is_deleted = element.reactions.deleted ? "comment-deleted" : "";
            let is_reported = element.reactions.report ? "comment-reported" : "";

            let is_deleted_btn = element.reactions.deleted ? "Restore" : "Delete";
            let is_reported_btn = element.reactions.report ? "Cancel Report" : "Report";

            document.getElementById('comments').innerHTML += `
            <div class="comment ${is_deleted} ${is_reported}" id="comment_number_${index}">
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
                                <li onclick="delete_c(event,${index})">${is_deleted_btn}</li>
                                <hr>
                                <li onclick="report_c(event,${index})">${is_reported_btn}</li>
                                </ul>
                        </label>
                    </div>
                                            
                    <p>${element.comment}</p>
            
                    <div class="icons-c">
                                        <label>
                                            <span><img src="./icons/hand-thumbs-up${element.reactions.like?"-fill":""}.svg" alt=""></span>
                                            <input type="checkbox" onchange="like(event,${index})">
                                        </label>
            
                                        <label>
                                            <span><img src="./icons/hand-thumbs-down${element.reactions.dislike?"-fill":""}.svg" alt=""></span>
                                            <input type="checkbox" onchange="dislike(event,${index})">
                                        </label>
            
                                        <label>
                                            <span><img src="./icons/heart${element.reactions.heart?"-fill":""}.svg" alt=""></span>
                                            <input type="checkbox" onchange="love(event,${index})">
                                        </label>
            
                                        <label>
                                            <span><img src="./icons/reply-all${element.reactions.reply?"-fill":""}.svg" alt=""></span>
                                            <input type="checkbox" onchange="replyI(event,${index})">
                                        </label>
                    </div>
                </div>
            </div>
            `

    });
}    

function showC() {
}

function like(event,index) {
    event.target.checked ? event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-up-fill.svg" : event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-up.svg";

    allComments[index].reactions.like = event.target.checked
}

function dislike(event,index) {
    event.target.checked ? event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-down-fill.svg" : event.target.closest("label").querySelector("img").src = "./icons/hand-thumbs-down.svg";

    allComments[index].reactions.dislike = event.target.checked

}

function love(event,index) {
    event.target.checked ? event.target.closest("label").querySelector("img").src = "./icons/heart-fill.svg" : event.target.closest("label").querySelector("img").src = "./icons/heart.svg";

    allComments[index].reactions.heart = event.target.checked

}

function replyI(event,index) {
    event.target.checked ? event.target.closest("label").querySelector("img").src = "./icons/reply-all-fill.svg" : event.target.closest("label").querySelector("img").src = "./icons/reply-all.svg";

    allComments[index].reactions.reply = event.target.checked
}

function showMenu(event) {
    event.target.checked ? event.target.closest("label").querySelector("ul").style = "visibility: visible;" : event.target.closest("label").querySelector("ul").style = "visibility: hidden;";
}

function delete_c(event,index){
    event.target.textContent = allComments[index].reactions.deleted ? "Delete" : "Restore";

    allComments[index].reactions.deleted = !allComments[index].reactions.deleted

    document.getElementById(`comment_number_${index}`).classList.toggle("comment-deleted")
}

function report_c(event,index){
    event.target.textContent = allComments[index].reactions.report ? "Report" : "Cancel Report";

    allComments[index].reactions.report = !allComments[index].reactions.report

    document.getElementById(`comment_number_${index}`).classList.toggle("comment-reported")
}