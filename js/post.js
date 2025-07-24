//Variables
const posts = new Posts();
const allPosts = posts.getPosts();
const urlParams = new URLSearchParams(window.location.search);
const postID = urlParams.get('postID');
const editMode = urlParams.get('edit');
const currentPost = allPosts[postID];
const titleInput = document.getElementById("title");
const summaryInput = document.getElementById("summary");
const contentInput = document.getElementById("content");
const postImg = document.getElementById("post-img");
const editBtn = document.getElementById("post-edit-btn");
const editContainer = document.getElementById("post-edit-container");
const form = document.getElementById("post-form");
const errorAlert = document.getElementById("error-alert");
const formHeader = document.getElementById("post-form-header");
const deleteBtn = document.getElementById("post-delete-btn");

//On window load
window.onload = function() {
    titleInput.value = currentPost.title;
    summaryInput.value = currentPost.summary;
    contentInput.value = currentPost.content;
    postImg.src = currentPost.image;

    //Enter edit mode if url param set
    if(editMode === "1"){
        enterEditMode();
    }
};

function enterEditMode(){
    titleInput.readOnly = false;
    summaryInput.readOnly = false;
    contentInput.readOnly = false;
    editBtn.style.display = "none";
    editContainer.style.display = "block";
    formHeader.innerHTML = "Edit Post";
}

editBtn.addEventListener("click", function(event) {
    window.location.href = "post.html?postID="+postID+"&edit=1";
});

deleteBtn.addEventListener("click", function(event) {
    posts.deletePost(postID);
    window.location.href = "index.html";
});

//Convert image to base64
function getImageBase64(){
    const image = document.getElementById("image").files[0];
    if (!image) {
        return Promise.resolve(currentPost.image);
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            resolve(e.target.result);
        };

        reader.onerror = function(e) {
            resolve(currentPost.image);
        };

        reader.readAsDataURL(image);
    });
}

//Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = event.target.title.value;
    let summary = event.target.summary.value;
    let content = event.target.content.value;

    if(title.trim() === "" || 
       summary.trim() === "" || 
       content.trim() === ""){
        errorAlert.style.display = "block";
        window.scrollTo(0, 0);
        return;
    }
    
    getImageBase64().then(base64 => {
        posts.updatePost(
            postID,
            base64,
            title,
            summary,
            content
        );

        //Redirect to home
        window.location.href = "index.html";
    });
});