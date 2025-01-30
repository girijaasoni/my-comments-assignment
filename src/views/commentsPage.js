
import { useState } from "react";
import Comment from "../components/comments";
export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;
    //using date as comment ID
    setComments([...comments, { id: Date.now(), text: newComment, replies: [] }]);
    setNewComment("");
  };

  const addReply = (commentId, replyText) => {
    const targetComment = comments.filter(c => c.id == commentId)
    //bcause filter returns an array 
    targetComment[0].replies = [...targetComment[0].replies, { id: targetComment[0].replies.length + 1, text: replyText }]
    
    setComments([...comments])
  };

  return (
    <div >
      <h2>Comments</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={addComment}
      >
        Submit
      </button>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={addReply} />
        ))}
      </div>
    </div>
  );
}