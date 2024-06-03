import { Button, Dialog,
    DialogHeader,
    DialogBody,
    Textarea,
    DialogFooter } from "@material-tailwind/react";
import { modalProps } from "@/Types/allTypes";
export default function Modal({edit, setEdit, item, openModals, updateComment, open, handleClose}: modalProps){
    return(
        <Dialog
        placeholder=''
        size="md"
        className="max-w-2xl"
        key={item.comment_id}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={openModals[item.comment_id] || false}
        handler={handleClose} 
      >
        <DialogHeader   placeholder=''>Edit your comment</DialogHeader>
        <DialogBody   placeholder=''>
          <div className="">
            <Textarea
              className="border-gray-300 border-2 p-2 rounded-md"
              onChange={(e) => {
                setEdit(e.target.value);
              }}
              defaultValue={item.content}
           
              rows={8}
            />
          </div>
        </DialogBody>
        <DialogFooter   placeholder=''>
          <Button
            placeholder=''
            variant="text"
            color="red"
            onClick={() => {
              handleClose(item.comment_id);
              setEdit("");
            }}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder=''
            onClick={(e) => {
              e.preventDefault();
              updateComment(item.comment_id);
              handleClose(item.comment_id);
            }}
            variant="gradient"
            color="green"
            
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    )
}