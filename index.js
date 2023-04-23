const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const main = document.getElementById('main-content')
const likeBtn = document.getElementById('like-btn')
const likeEl = document.getElementById('likes-el')





function renderPost(){
    main.innerHTML = ''
    for(let i = 0; i < posts.length; i++){
        
        main.innerHTML += `
        <div class="container">
            <section class="post-title">
                <img class="avatar" src="${posts[i].avatar}" >
                <div class="post-title__info">
                    <h1>${posts[i].name}</h1>
                    <h2>${posts[i].location}</h2>
                </div>
             </section>
             
             <section class="post">
                <img class="post-content" src="${posts[i].post}">
                <div class="post-items">
                    <div class="post-icons">
                        <img class="like-btn" onClick="like('${i}')" id="likeBtn" src="images/icon-heart.png" alt="heart like button">
                        <img src="images/icon-comment.png" alt="comment button">
                        <img src="images/icon-dm.png" alt="direct message button">
                    </div>
                    <p id="likes-el">${posts[i].likes} <span>likes</span></p>
                    <p>${posts[i].username}<span id="comment"> ${posts[i].comment}</span></p>
                </div>
              </section>  
        `
    }
}


renderPost()


function like(index){
    posts[index].likes += 1
    renderPost()
}

// sticky header

let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("myHeader").classList.remove("hidden");
  } else {
    document.getElementById("myHeader").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
});
