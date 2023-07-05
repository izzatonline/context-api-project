import React from "react";
import { useDeleteModal } from "../context/DeleteModalContext";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteModal = () => {
    const { toggleOpen } = useDeleteModal();
    return (
        <div className="max-w-xl w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-8 border border-black px-12 py-8">
            <div className="flex flex-row justify-between items-center w-full font-bold">
                <div className="text-2xl">Delete Modal</div>
                <button onClick={toggleOpen} className="text-3xl">
                    <TiDeleteOutline />
                </button>
            </div>
            <form action="">
                <input
                    type="text"
                    name="text"
                    id="text"
                    className="border border-black rounded-xl px-4 py-2 my-2 mr-6"
                />
                <button className="bg-blue-500 px-4 py-2 text-white rounded-xl">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DeleteModal;
