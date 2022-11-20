function like(postId) {
  const likeCount = document.getElementById(`likes-count-${postId}`);
  const likeButton = document.getElementById(`like-button-${postId}`);

  fetch(`/like-post/${postId}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      likeCount.innerHTML = data["likes"];
      if (data["liked"] === true) {
        likeButton.className = "fas fa-heart fa-2x";
      } else {
        likeButton.className = "far fa-heart fa-2x";
      }
    })
    .catch((e) => alert("Could not like post."));
}