$(document).ready(() => {
    const newCommentForm = $("#new-comment-form");
    const commentInput = $("#comment-input");
  
    newCommentForm.on("submit", (event) => {
      event.preventDefault();
  
      const postId = newCommentForm.data("post-id");
      const commentData = {
        comment: commentInput.val().trim(),
        postId: postId,
      };
  
      if (!commentData.comment || !commentData.postId) {
        return;
      }
  
      postComment(commentData);
    });
  
    function postComment(comment) {
      $.post("/api/comments", comment).then(() => {
        window.location.reload();
      });
    }
  });
  