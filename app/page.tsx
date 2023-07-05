import Image from "next/image";
import Hero from "./component/Hero";
import { DeleteModalProvider } from "./context/DeleteModalContext";
import { HeadlessModalProvider } from "./context/HeadlessModalContext";

export default function Home() {
    return (
        <main>
            <HeadlessModalProvider>
                <DeleteModalProvider>
                    <Hero />
                </DeleteModalProvider>
            </HeadlessModalProvider>
        </main>
    );
}
