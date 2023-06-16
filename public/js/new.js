// takes info from the newpost.handlebars file and creates the post, adds it to the db, render it to the page, etc.
// everything will eventually be rendered from the PUBLIC folder - so be sure to link all js files correctly
// submits a new blog post to the server
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  console.log(title, content)
  
    if (title && content) {
      const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create new blog post. Please try again.');
      }
    }
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  