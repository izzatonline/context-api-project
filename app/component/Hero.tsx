"use client";

import { AiFillDelete, AiOutlineUserDelete } from "react-icons/ai";
import DeleteModal from "./DeleteModal";
import { useDeleteModal } from "../context/DeleteModalContext";
import { useHeadlessModal } from "../context/HeadlessModalContext";
import HeadlessModal from "./HeadlessModal";

export default function Hero() {
    const { isOpen, toggleOpen } = useDeleteModal();
    const { isOpen: isHeadlessOpen, toggleOpen: toggleHeadlessOpen } =
        useHeadlessModal();
    return (
        <div className="max-w-3xl bg-red-300 mx-auto">
            <div className="text-2xl">IS OPEN: {String(isOpen)}</div>
            {isOpen && <DeleteModal />}
            {isHeadlessOpen && <HeadlessModal />}
            <div className="flex flex-row justify-center items-center space-x-4 bg-slate-400">
                <div className="text-2xl text-center font-bold my-10">
                    CONTEXT API
                </div>
                <div>
                    <button
                        onClick={toggleOpen}
                        className="bg-red-400 px-4 py-2 rounded-xl hover:bg-red-300 border border-red-700"
                    >
                        <AiFillDelete className="text-3xl" />
                    </button>
                </div>
                <div>
                    <button
                        onClick={toggleHeadlessOpen}
                        className="bg-green-400 px-4 py-2 rounded-xl hover:bg-green-300 border border-green-700"
                    >
                        <AiOutlineUserDelete className="text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}
