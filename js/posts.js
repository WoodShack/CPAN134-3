class Posts {
    #defaultImage = "data:image/png;base64,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";
    #postKey = "posts";
    #posts = [];

    constructor(){
        this.#loadPosts();
        this.#addDefaultPosts();
    }

    #loadPosts(){
        let loadedPosts = JSON.parse(localStorage.getItem(this.#postKey));
        if(loadedPosts !== null){
            this.#posts = loadedPosts;
        }
    }

    #addDefaultPosts(){
        if (this.#posts.length !== 0) {
            //Default posts already exist
            return;
        }

        this.addPost
        (this.#defaultImage,
        "My post 1",
        "My post 1 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        this.addPost
        (this.#defaultImage,
        "My post 2",
        "My post 2 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        this.addPost
        (this.#defaultImage,
        "My post 3",
        "My post 3 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }

    addPost(imageBase64,title,summary,content){
        let post = {
            image:imageBase64,
            title:title,
            summary:summary,
            content:content
        };

        this.#posts.push(post);
        localStorage.setItem(this.#postKey,JSON.stringify(this.#posts));
    }

    getPosts(){
        return this.#posts;
    }

    getDefaultImage(){
        return this.#defaultImage;
    }
}