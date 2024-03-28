export default function CommentBox({submitComment, commentbox, setCommentbox}) {
    //grabbed from https://larainfo.com/blogs/tailwind-css-comment-box-example
  return (
    <div className=" mt-16 rounded-lg shadow-md shadow-blue-600/50">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label htmlFor="comment" className="text-lg text-gray-600">
            Add a comment
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            onChange={(e) => {setCommentbox(e.target.value)}}
            value={commentbox}
            placeholder=""
          />
        </div>
        <div>
          <button onClick={submitComment} className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
            Comment
          </button>
          <button onClick={(e) => {e.preventDefault(); setCommentbox(''); }} className="px-3 py-2 text-sm text-blue-600 border border-blue-500 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
