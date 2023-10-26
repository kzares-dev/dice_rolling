import React from 'react'
import TextInput from './TextInput'

function DiceSelection({
    diceSetting,
    diceWorkflow,
    setDiceSettings,
    setDiceWorkflow,
}) {


    return (
        <section className="flex-1 flex items-center justify-center ">
            <div className=" shadow-md bg-[#fff] p-9 rounded-xl w-full mx-3 max-w-[700px] items-center">

                <div className="flex items-center justify-center">
                    <img className='w-[60px]' src="/dice.png" alt="" />
                </div>


                <h1 className="text-[55px] text-center pb-10" > Roll the Dice </h1>

                <div className="relative inline-block w-full pb-[12px]" >
                    <div className="absolute top-[8px] left-[18px] text-[11px] text-[#d5d5d5] w-full" > Spin Time </div>

                    <input
                        className={`bg-[#3e404b] pt-[24px] pr-[18px] pb-[12px] pl-[18px] w-full text-white rounded-md`}
                        type={"number"}
                        placeholder={"Rolling Duration (seconds) "}
                        min={1}
                        value={diceSetting.spinTime}
                        onChange={(e) => setDiceSettings({ ...diceSetting, spinTime: e.target.value })}
                    />
                </div>
                <div className="relative inline-block w-full pb-[12px]" >
                    <div className="absolute top-[8px] left-[18px] text-[21px] text-[#3e404b] w-full font-[dice]" > Dice Size </div>

                    <input
                        type="range"
                        value={diceSetting.diceSize}
                        onChange={e => setDiceSettings({ ...diceSetting, diceSize: e.target.value })}
                        min="4"
                        max="16"
                        step="1"
                        className="appearance-none w-full h-3 bg-gray-300 rounded-md outline-none overflow-hidden text-black mt-[34px] "
                    />
                </div>


                <div className="flex items-center flex-col sm:flex-row space-x-3 ">
                    <TextInput
                        label="Front Face"
                        placeholder="Front Face"
                        value={diceSetting.front}
                        onChange={(e) => setDiceSettings({ ...diceSetting, front: e.target.value })}
                    />

                    <TextInput
                        label="Back Face"
                        placeholder="Back Face"
                        value={diceSetting.back}
                        onChange={(e) => setDiceSettings({ ...diceSetting, back: e.target.value })}
                    />
                </div>

                <div className="flex items-center flex-col sm:flex-row space-x-3 ">
                    <TextInput
                        label="Top Face"
                        placeholder="Top Face"
                        value={diceSetting.left}
                        onChange={(e) => setDiceSettings({ ...diceSetting, left: e.target.value })}
                    />

                    <TextInput
                        label="Bottom Face"
                        placeholder="Bottom Face"
                        value={diceSetting.top}
                        onChange={(e) => setDiceSettings({ ...diceSetting, top: e.target.value })}
                    />
                </div>

                <div className="flex items-center flex-col sm:flex-row space-x-3 ">
                    <TextInput
                        label="Left Face"
                        placeholder="Left Face"
                        value={diceSetting.bottom}
                        onChange={(e) => setDiceSettings({ ...diceSetting, bottom: e.target.value })}
                    />

                    <TextInput
                        label="Rigth Face"
                        placeholder="Rigth Face"
                        value={diceSetting.right}
                        onChange={(e) => setDiceSettings({ ...diceSetting, right: e.target.value })}
                    />
                </div>

                <button onClick={() => setDiceWorkflow({...diceWorkflow, showDice: true}) } className="w-full h-[32px] text-white bg-[#3e404b]  font-[dice] cursor-pointer rounded-lg py-[2rem] flex items-center justify-center " >
                    Make it roll
                </button>


            </div>

        </section>
    )
}

export default DiceSelection
