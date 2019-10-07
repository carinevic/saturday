document.addEventListener("DOMContentLoaded", async function() {


  async function getPosts(){
    return await  fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((data) => data);
}
  let posts = await getPosts();
  let articles = document.querySelector(".articles");
  articles.innerHTML = "";
  posts.forEach((post) => {
    let postHTML = ` 
        <div class="col-4"> 

        <div class="card">
        <img class="card-img-top" src="i${post.imageURL}" alt="${post.title}">
        <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.description}</p>
          <button class="btn-primary">${post.detail}</button>
        </div>

     </div> 
</div>`;
    articles.insertAdjacentHTML('beforeend', postHTML);
  });
});
