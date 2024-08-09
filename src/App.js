import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background w-full h-screen flex flex-col items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg  w-11/12 text-center
      mt-[40px] mx-auto px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
      <div className="flex w-full flex-col items-center mt-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
