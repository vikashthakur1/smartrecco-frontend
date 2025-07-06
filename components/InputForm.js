"use client";
import { useState } from "react";
import PromptButtons from "./PromptButtons";
const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const submitQuestion = () => {
    console.log(inputValue);
  };

  const promptClick = (promptText) => {
    setInputValue(promptText);
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
          onClick={submitQuestion}
          className="ml-4 text-lg font-semibold text-accent tracking-wide hover:brightness-110 transition-all cursor-pointer ease-in-out duration-300"
        >
          Search
        </button>
      </div>
      <PromptButtons promptClick={promptClick} />
    </section>
  );
};

export default InputForm;
