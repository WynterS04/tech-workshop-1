import Greeting from "@/components/Greeting";

export default function Home() {
    return (
        <section className="bg-teal-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 text-center pt-4">Hello World</h1>
            <button className="mt-4 rounded bg-black px-4 py-2 text-white cursor-pointer hover:bg-gray-700">Click me
            </button>
            <Greeting name="KTP" />
            <Greeting name="World" />
            <Greeting name="Braden" />
        </section>
    );
}
