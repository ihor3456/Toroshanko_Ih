class Card {
  constructor(post, user) {
    this.post = post;
    this.user = user;
    this.element = document.createElement("div");
    this.element.className = "card";
    this.render();
  }

  render() {
    const { title, body } = this.post;
    const { name, email } = this.user;
    this.element.innerHTML = `
    <div class="card-user">${name} ${email}</div>
    <button class="card-delete-btn">Delete</button>
  </div>
      <div class="card-header">${title}</div>
      <div class="card-body">${body}</div>
      <div class="card-footer">
      
    `;
    this.element
      .querySelector(".card-delete-btn")
      .addEventListener("click", this.delete.bind(this));
  }

  delete() {
    const postId = this.post.id;
    fetch(`https://ajax.test-danit.com/api/json/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          this.element.remove();
        } else {
          alert(
            `Error deleting post ${postId}: ${response.status} ${response.statusText}`
          );
        }
      })
      .catch((error) => alert(`Error deleting post ${postId}: ${error}`));
  }
}

fetch("https://ajax.test-danit.com/api/json/users")
  .then((response) => response.json())
  .then((users) => {
    fetch("https://ajax.test-danit.com/api/json/posts")
      .then((response) => response.json())
      .then((posts) => {
        const feed = document.getElementById("feed");
        for (const post of posts) {
          const user = users.find((u) => u.id === post.userId);
          const card = new Card(post, user);
          feed.appendChild(card.element);
        }
      })
      .catch((error) => alert(`Error loading posts: ${error}`));
  })
  .catch((error) => alert(`Error loading users: ${error}`));
