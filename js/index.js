const listContainer = document.getElementById("post-list");
let posts = new Posts();

function getPostHTML(postID,post){
    let html = `
        <div class="row mb-4 mt-4">
            <div class="col">
                <div class="card text-center">
                    <div class="card-header">
                        <img src="`+post.image+`" class="post-img">
                        <br><br>
                        `+post.title+`
                    </div>
                    <div class="card-body">
                        <p class="card-text">`+post.summary+`</p>
                    </div>
                    <div class="card-footer text-body-secondary">
                        <a href="post.html?postID=`+postID+`" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    return html;
}

function populateListContainer(){
    let html = "";
    let currentPosts = posts.getPosts();

    for (let i = 0; i < currentPosts.length; i++) {
        html += getPostHTML(i,currentPosts[i]);
    }

    listContainer.innerHTML = html;
}

populateListContainer();