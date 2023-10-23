import React from 'react'

function ResultsModal({ setShowDice, setShowResults, setDiceRolling }) {
    return (
        <section className=" fixed bottom-0 left-0 right-0 flex-1 flex items-center justify-center ">
            <div className=" shadow-md bg-[#3e404b] p-9 rounded-xl w-full mx-3 max-w-[700px] mb-4">
                <h1 className="text-[40px] text-center pb-4 text-[#fff] " > Dice Results </h1>


                <div className="flex items-center justify-between gap-4 ">
                    <button onClick={() => {setShowDice(false); setShowResults(false)}} className=" text-[#3e404b] text-[20px] max-w-[250px] w-full h-[32px] bg-[#fff]  font-[dice] cursor-pointer rounded-lg py-[2rem] flex items-center justify-center " >
                        Back
                    </button>
                    <button onClick={() => {setShowResults(false); setDiceRolling(true)}} className=" text-[#3e404b] text-[20px] w-full h-[32px] bg-[#fff]  font-[dice] cursor-pointer rounded-lg py-[2rem] flex items-center justify-center " >
                        Throw Again
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ResultsModal
