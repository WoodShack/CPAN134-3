class Posts {
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
        ("My post 1",
        "My post 1 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        this.addPost
        ("My post 2",
        "My post 2 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

        this.addPost
        ("My post 3",
        "My post 3 summary and Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "+
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    }

    addPost(title,summary,content){
        let post = {
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
}