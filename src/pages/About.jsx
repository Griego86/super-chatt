import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {

    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <main className="flex-1 mx-auto text-center max-w-screen-xl">
                <h1 className="text-3xl font-bold text-center py-5 text-indigo-600">
                    About Super Chatt
                </h1>
                <p className="py-2">super-chatt</p>
                <h1 className="text-3xl font-bold text-center py-5 text-indigo-600">
                    Meet the Developer!
                </h1>
                <p className="py-2">some text goes here</p>
            </main>
            <Footer />
        </div>
    )
}