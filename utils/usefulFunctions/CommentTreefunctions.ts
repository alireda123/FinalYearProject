export function addReplyToTree(comments, parentCommentId, newComment) {
  return comments.map((comment) => {
    if (comment.comment_id === parentCommentId) {
      return {
        ...comment,
        replies: [
          ...(comment.replies || []),
          { ...newComment, depth: comment.depth + 1 },
        ],
      };
    } else if (comment.replies) {
      return {
        ...comment,
        replies: addReplyToTree(comment.replies, parentCommentId, newComment),
      };
    }
    return comment;
  });
}

export function updateCommentInTree(
  tree,
  commentId: number,
  updatedContent: string
) {
  return tree.map((comment) => {
    if (comment.comment_id === commentId) {
      return { ...comment, content: updatedContent, is_edited: true }; // Update the comment itself
    } else if (comment.replies && comment.replies.length > 0) {
      // Recursively update replies
      return {
        ...comment,
        replies: updateCommentInTree(
          comment.replies,
          commentId,
          updatedContent
        ),
      };
    } else {
      return comment; // No changes needed
    }
  });
}

export function deleteCommentFromTree(tree, commentIdToDelete) {
  return tree.filter((comment) => {
    if (comment.comment_id === commentIdToDelete) {
      return false;
    }
    if (comment.replies && comment.replies.length > 0) {
      comment.replies = deleteCommentFromTree(
        comment.replies,
        commentIdToDelete
      );
    }
    return (
      comment.comment_id !== commentIdToDelete ||
      (comment.replies && comment.replies.length > 0)
    );
  });
}
