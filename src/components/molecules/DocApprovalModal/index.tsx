import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { api } from "~/utils/api";
import { UserDocs } from "@prisma/client";

const DialogDemo = ({
  name,
  status,
  keyId,
  userDoc,
}: {
  userDoc: UserDocs;
  name: string;
  status: string;
  keyId: string;
}) => {
  const [newStatus, setNewStatus] = useState("");
  console.log("keys: ", name, status, keyId);
  console.log("userDoc, userDoc: ", userDoc);
  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.docs.update.useMutation({
    onSuccess: (result) => {
      void ctx.docs.getByUser.invalidate();

      console.log("SUCCESS: ", result);
      //   setUserDoc(result);
    },
    onError: (e) => {
      // console.log("ERROR: ", e.message);
      if (
        e.message.includes("Unique constraint failed on the (not available)")
      ) {
        // toast.error("You already have a ticket open");
      }
    },
  });

  const handleDocUpload = (e: any) => {
    if (typeof newStatus == "string") {
      userDoc.payStubOneStatus = newStatus;
      mutate({
        userDoc: { ...userDoc, payStubOneStatus: newStatus },
        email: userDoc.email,
      });
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="other-shadow text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px]  items-center justify-center rounded-[4px] border-none bg-white px-[15px] font-medium leading-none outline-none">
          Review
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Review Document
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
            Make changes to your profile here. Click save when you&aposre done.
          </Dialog.Description>
          <div className="flex gap-x-4">
            <div
              onClick={() => setNewStatus("missing")}
              className={`w-full rounded-full border-2 border-solid border-red-400  text-center ${
                newStatus !== "missing" ? "bg-white" : "bg-red-200"
              } px-4 py-2 text-xl font-bold`}
            >
              Reject
            </div>

            <div
              onClick={() => setNewStatus("Approved")}
              className={`w-full rounded-full border-2 border-solid border-green-400  text-center ${
                newStatus !== "Approved" ? "bg-white" : "bg-green-200"
              } px-4 py-2 text-xl font-bold`}
            >
              Approve
            </div>
          </div>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                onClick={handleDocUpload}
                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
