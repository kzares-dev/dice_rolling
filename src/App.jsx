import { useState } from "react"
import CanvasComponent from "./components/Canvas"
import TextInput from "./components/TextInput"
import DiceSelection from "./components/DiceSelection"
import ResultsModal from "./components/ResultsModal";

function App() {
  const [showDice, setShowDice] = useState(false);
  const [showResults, setShowResults] = useState(false)
  const [diceRolling, setDiceRolling] = useState(true)

  const [diceSetting, setDiceSettings] = useState({
    spinTime: 3,
    diceSize: 1,
    front: "Front",
    back: "Back",
    left: "left",
    top: "top",
    bottom: "bottom",
    right: "right",
  })

  return (
    <main className="flex w-full h-full">
      {showDice ?
        <CanvasComponent
          isAnimating={diceRolling}
          setIsAnimating={setDiceRolling}
          showResults={showResults}
          setShowResults={setShowResults}
          diceSetting={diceSetting}
        /> :
        <DiceSelection
          setDiceRolling={setDiceRolling}
          diceSetting={diceSetting}
          setDiceSettings={setDiceSettings}
          setShowDice={setShowDice}
        />}

      {showResults && <ResultsModal setDiceRolling={setDiceRolling} setShowResults={setShowResults} setShowDice={setShowDice} />}
    </main>
  )
}

export default App
