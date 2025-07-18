"use client";
import { useState } from "react";
import PromptButtons from "./PromptButtons";
const InputForm = ({questionSubmitHandler, error, loading}) => {
  const [inputValue, setInputValue] = useState("");
  

  const promptClick = (inputStr) => {
    setInputValue(inputStr);
  };
  return (
    <section className="mt-5 justify-center items-center">
      <div className="w-full  flex bg-primary rounded-full px-4 py-3 shadow-lg ring-1 ring-text-primary/40 hover:ring-accent transition ease-in-out duration-300">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          className="bg-transparent w-full text-text-primary placeholder:text-text-secondary placeholder:tracking-wider outline-none text-lg"
        />
        <button
          onClick={()=> questionSubmitHandler(inputValue)}
          className="ml-4 text-lg font-semibold text-accent tracking-wide hover:brightness-110 transition-all cursor-pointer ease-in-out duration-300"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && (
        <p className="mt-4 text-error text-base tracking-wide italic">*{error}</p>
      )}
      <PromptButtons promptClick={promptClick} />
    </section>
  );
};

export default InputForm;
