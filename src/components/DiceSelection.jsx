import React from 'react'
import TextInput from './TextInput'

function DiceSelection({
    diceSetting,
    diceWorkflow,
    setDiceSettings,
    setDiceWorkflow,
}) {

    const changeWinning = (face) => {
        return () => {
            let updatedFaces = { ...diceSetting.faces };
            updatedFaces[face][1] = !updatedFaces[face][1];
            setDiceSettings({ ...diceSetting, faces: updatedFaces });
        }
    }
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
                        value={diceSetting.faces.front[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, front: [e.target.value, diceSetting.faces.front[1]] } })}
                    />

                    <TextInput
                        label="Back Face"
                        placeholder="Back Face"
                        value={diceSetting.faces.back[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, back: [e.target.value, diceSetting.faces.back[1]] } })} />
                </div>

                <div className="flex items-center flex-col sm:flex-row space-x-3 ">
                    <TextInput
                        label="Top Face"
                        placeholder="Top Face"
                        value={diceSetting.faces.top[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, top: [e.target.value, diceSetting.faces.top[1]] } })} />

                    <TextInput
                        label="Bottom Face"
                        placeholder="Bottom Face"
                        value={diceSetting.faces.bottom[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, bottom: [e.target.value, diceSetting.faces.bottom[1]] } })} />
                </div>

                <div className="flex items-center flex-col sm:flex-row space-x-3 ">
                    <TextInput
                        label="Left Face"
                        placeholder="Left Face"
                        value={diceSetting.faces.left[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, left: [e.target.value, diceSetting.faces.left[1]] } })} />

                    <TextInput
                        label="Rigth Face"
                        placeholder="Rigth Face"
                        value={diceSetting.faces.right[0]}
                        onChange={(e) => setDiceSettings({ ...diceSetting, faces: { ...diceSetting.faces, right: [e.target.value, diceSetting.faces.right[1]] } })} />
                </div>

                <div className="flex flex-col py-5">
                    <h1 className='text-[25px]' >Winning Faces: </h1>
                    <div className="float-left gap-2 flex ">
                        {Object.entries(diceSetting.faces).map(item => {
                            if (item[1][1]) return (
                                <p onClick={changeWinning(item[0])} className='float-left text-[20px] bg-[#3e404b] rounded-md py-1 px-5 text-white font-bold ' key={item[0]} > {item[0]} </p>
                            )
                        })}
                    </div>
                </div>

                <div className="bg-[#3e404b] pr-[18px] pb-[50px] pl-[18px] w-full text-white rounded-md my-6 flex flex-col">
                    <h1 className='text-[25px] pb-4' >Add a winning face:</h1>

                    <div className="gap-2 flex">
                        {Object.entries(diceSetting.faces).map(item => {
                            if (!item[1][1]) return (
                                <p onClick={changeWinning(item[0])} className='text-[20px] bg-white rounded-md py-1 px-5 text-[#3e404b] font-bold ' key={item[0]} > {item[0]} </p>
                            )
                        })}
                    </div>
                </div>

                <button onClick={() => setDiceWorkflow({ ...diceWorkflow, showDice: true })} className="w-full h-[32px] text-white bg-[#3e404b]  font-[dice] cursor-pointer rounded-lg py-[2rem] flex items-center justify-center " >
                    Make it roll
                </button>


            </div>

        </section>
    )
}

export default DiceSelection
