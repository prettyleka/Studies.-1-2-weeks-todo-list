const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  for(let postIndex in posts){
      const post = posts[postIndex]
      const postId = post.id
      if(postId === 2){
          posts.splice(postIndex, 1)
      }
  }
  console.log(posts)