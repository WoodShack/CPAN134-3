const form = document.getElementById("post-form");
const errorAlert = document.getElementById("error-alert");
const posts = new Posts();

//Convert image to base64
function getImageBase64(){
    const image = document.getElementById("image").files[0];
    if (!image) {
        return Promise.resolve(posts.getDefaultImage());
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            resolve(e.target.result);
        };

        reader.onerror = function(e) {
            resolve(posts.getDefaultImage());
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
        return;
    }
    
    getImageBase64().then(base64 => {
        posts.addPost(
            base64,
            title,
            summary,
            content
        );

        //Redirect to home
        window.location.href = "index.html";
    });
});