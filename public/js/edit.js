$(document).ready(function() {
    // Get references to elements on the page
    var $postTitle = $("#post-title");
    var $postBody = $("#post-body");
    var $submitBtn = $("#submit");
  
    // Add an event listener to the form to prevent default submission
    $(document).on("submit", "#edit-form", handleFormSubmit);
  
    // A function to handle form submission and update the post
    function handleFormSubmit(event) {
      event.preventDefault();
  
      // Get the post ID from the URL parameter
      var url = window.location.href;
      var postId = url.substring(url.lastIndexOf("/") + 1);
  
      // Create a newPost object with the updated information
      var updatedPost = {
        title: $postTitle.val().trim(),
        body: $postBody.val().trim()
      };
  
      // Send an AJAX PUT request to update the post
      $.ajax({
        method: "PUT",
        url: "/api/posts/" + postId,
        data: updatedPost
      }).then(function() {
        window.location.href = "/dashboard";
      });
    }
  });
  