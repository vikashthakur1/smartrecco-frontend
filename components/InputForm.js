// import PromptButtons from './PromptButtons'
const InputForm =() =>{
    return(
        <section className="w-[70%] mt-5 items-center">
         <div className="w-full flex items-center bg-primary rounded-full px-4 py-3 shadow-lg ring-2 ring-text-primary/40 hover:ring-accent transition ease-in-out duration-300">
            <input type="text" placeholder="Search..."
                className="bg-transparent w-full text-text-primary placeholder:text-text-secondary placeholder:tracking-wider outline-none text-lg"
            />
            <button
             
             className="ml-4 text-lg font-semibold text-accent tracking-wide hover:brightness-110 transition-all cursor-pointer ease-in-out duration-300"
            >
              Search
            </button>
         </div>
         {/* <PromptButtons/> */}
        </section>
    )
}

export default InputForm;