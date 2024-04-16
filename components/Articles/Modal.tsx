import { Button, Dialog,
    DialogHeader,
    DialogBody,
    Textarea,
    DialogFooter } from "@material-tailwind/react";
import { useState } from "react";


export default function Modal({edit, setEdit, item, openModals, updateComment, open, handleClose}){
    

    return(
        <Dialog
        size="md"
        className="max-w-2xl"
        key={item.id}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={openModals[item.comment_id] || false}
        handler={handleClose} 
      >
        <DialogHeader>Edit your comment</DialogHeader>
        <DialogBody>
          <div className="">
            <Textarea
              className="border-gray-300 border-2 p-2 rounded-md"
              onChange={(e) => {
                setEdit(e.target.value);
              }}
              //  value={item.content}
              placeholder={item.content}
              rows={8}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
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