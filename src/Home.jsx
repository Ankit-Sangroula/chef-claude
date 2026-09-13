import Header from "./component/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <form className="flex justify-center items-center mt-30 gap-3">
        <input
          type="text"
          placeholder="e.g Tomato"
          className="border border-gray-300 rounded-md px-3 text-sm w-[300px] h-[30px]"
        />
        <button className="w-[143px] h-[30px] bg-black text-white rounded-md text-sm font-semibold">
          + Add ingredient
        </button>
      </form>
    </div>
  );
}
