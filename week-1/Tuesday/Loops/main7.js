const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]
  const postId = 2
  for(let post of posts){
      if(post.id === postId){
          myPost = post
      }

  }
  console.log(myPost)

  const comId = 3
  const comments = myPost.comments
  for(let commentIndex in comments){
      const comment = comments[commentIndex]
      if(comment.id === comId){
            comments.splice(commentIndex,1)
      
      }
    }
    console.log(comments)
   


  

 

