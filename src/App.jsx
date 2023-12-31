import { useState } from "react"
import {
  CanvasComponent,
  DiceSelection,
  ResultsModal,
} from "./components"

function App() {  

  const [diceSetting, setDiceSettings] = useState({
    spinTime: 3,
    diceSize: 1,
    faces: {
      front: ["Front", true],
      back: ["Back", true],
      left: ["left", true],
      top: ["top", false],
      bottom: ["bottom", false],
      right: ["right", true],
    },
    
  });
  const [diceWorkflow, setDiceWorkflow] = useState({
    showDice: false,
    showResults: false,

    diceQuaternion: null,
    diceResult: null,
  })
  //this state is nesesary to make separated in order to mantain the reactivity
  const [isAnimating, setIsAnimating] = useState(true)

  return (
    <main className="flex w-full h-full">
      {diceWorkflow.showDice ?
        <CanvasComponent
          isAnimating={isAnimating}
          diceSetting={diceSetting}
          diceWorkflow={diceWorkflow}

          setIsAnimating={setIsAnimating}
          setDiceSettings={setDiceSettings}
          setDiceWorkflow={setDiceWorkflow}
        /> :
        <DiceSelection
          diceSetting={diceSetting}
          diceWorkflow={diceWorkflow}

          setDiceSettings={setDiceSettings}
          setDiceWorkflow={setDiceWorkflow}
        />}

      {diceWorkflow.showResults &&
        <ResultsModal
          setIsAnimating={setIsAnimating}
          diceWorkflow={diceWorkflow}
          setDiceWorkflow={setDiceWorkflow}
        />}
    </main>
  )
}

export default App
