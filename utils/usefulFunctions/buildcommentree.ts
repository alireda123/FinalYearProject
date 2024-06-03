interface Comment {
    id: number;
    parent_id: number | null;
    content: string;
    replies?: Comment[];
  }
  
// export function buildCommentTree(comments: Comment[]): Comment[] {
//     const commentMap: Record<number, Comment> = {}; // Use Record for better type safety
//     const commentTree: Comment[] = [];
  
//     comments.forEach(comment => {
//       commentMap[comment.comment_id] = { ...comment, replies: [], depth: 0 }; // Ensure each comment has a replies array and initialize depth
//     });
  
//     comments.forEach(comment => {
//       if (comment.parent_id === null) {
//         commentTree.push(commentMap[comment.comment_id]); // Add top-level comments to the tree
//       } else {
//         const parent = commentMap[comment.parent_id];
//         if (parent) { // Check if the parent exists in the map
//           // Increment depth of reply
//           commentMap[comment.comment_id].depth = parent.depth + 1;
//           parent.replies.push(commentMap[comment.comment_id]); // Add reply to parent's replies array
//         } else {
//           // Handle the case where the parent comment is missing
//           console.error(`Parent comment with ID ${comment.parent_id} not found.`); 
//         }
//       }
//     });
  
//     return commentTree;
//   }
  
export function buildCommentTree(comments: Comment[]): Comment[] {
  const commentMap: Record<number, Comment> = {};
  const commentTree: Comment[] = [];
  const missingParents: number[] = []; // Track missing parent IDs

  // First Pass: Create Map and Track Missing Parents
  comments.forEach(comment => {
    commentMap[comment.comment_id] = { ...comment, replies: [], depth: 0 };
    if (comment.parent_id && !commentMap[comment.parent_id]) {
      missingParents.push(comment.parent_id);
    }
  });

  // Second Pass: Build the Tree and Handle Missing Parents
  comments.forEach(comment => {
    if (comment.parent_id === null) {
      commentTree.push(commentMap[comment.comment_id]);
    } else {
      const parent = commentMap[comment.parent_id];
      if (parent) {
        commentMap[comment.comment_id].depth = parent.depth + 1;
        parent.replies.push(commentMap[comment.comment_id]);
      } else if (!missingParents.includes(comment.parent_id)) { // Prevent duplicate errors
        console.error(`Parent comment with ID ${comment.parent_id} not found.`);
      }
    }
  });

  return commentTree;
}

  