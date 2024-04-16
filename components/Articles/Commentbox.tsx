import { Textarea, Button, IconButton } from "@material-tailwind/react";
export default function CommentBox({
  submitComment,
  commentbox,
  setCommentbox,
}) {
  //grabbed from https://larainfo.com/blogs/tailwind-css-comment-box-example
  return (
    <div>
      <form>
        <div className="mt-16">
          <Textarea
            className="border-gray-300 border-2 p-2 rounded-md"
            onChange={(e) => {
              setCommentbox(e.target.value);
            }}
            value={commentbox}
            variant="static"
            placeholder="Your Comment"
            rows={8}
          />
          <div className="flex w-full justify-between py-1.5">
            <IconButton variant="text" color="blue-gray" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </IconButton>
            <div className="flex gap-2">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setCommentbox("");
                }}
                size="sm"
                color="red"
                variant="text"
                className="rounded-md"
              >
                Cancel
              </Button>
              <Button
                onClick={submitComment}
                size="sm"
                color="white"
                className="rounded-md"
              >
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
