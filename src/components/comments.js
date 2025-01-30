import { useState } from "react";
export default function Comment({ comment, onReply }) {
    const [replyText, setReplyText] = useState("");
    const [showReplyInput, setShowReplyInput] = useState(false);
  
    return (
      <div >
        <p>{comment.text}</p>
        <button
          
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          Reply
        </button>
        {showReplyInput && (
          <div >
            <input
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button
              onClick={() => {
                onReply(comment.id, replyText);
                setReplyText("");
                setShowReplyInput(false);
              }}
            >
              Submit Reply
            </button>
          </div>
        )}
        {comment.replies.length > 0 && (
          <div>
            {comment.replies.map((reply) => (
              <p key={reply.id}>{reply.text}</p>
            ))}
          </div>
        )}
      </div>
    );
  }