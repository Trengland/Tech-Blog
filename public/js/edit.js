const postId = document.querySelector('input[name="id"]').value;

  const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="body"]').value;
  
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

      document.location.replace('/dashboard');
  }
  const deleteFormHandler = async () => {
    await fetch(`/api/posts/${postId}`, {
      method: 'DELETE'
    });
    document.location.replace('/dashboard');
  }

  //event listeners
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  document.querySelector('#delete-post').addEventListener('click', deleteFormHandler);
