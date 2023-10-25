## setting up
`npm install --legacy-peer-deps`

## run the project
`npm run dev`

# App.jsx Component

Contains two principal states
 
1.**[diceSetting, setDiceSettings]**: this state is passed to all other components and store the dice data sush as the _faces text_ , _dice size_, _animation duration_

2.**[diceWorkflow, setDiceWorkflow]**: this state handle all the workflow, that means, he controlls when the _dice displays_, the _results are show_, and the _dice animation_

### Components

|Name           | Location   | Usage                                                                                           |
--------------------------------------------------------------------------------------------------------------------------------
|CanvasComponent| @components| contains all the three.js funcionality, including the physics, camera, the dice, etc            |

|DiceSelection  | @components| the home screen, handle the dice customization                                                  | 

|ResultsModal   | @components| when the propiety of `diceWorkflow.showResults` is true, it shows, with the top face of the dice|


# Canvas.jsx Component

Constain the Canvas Root, the main `<Canvas> </Canvas>` enclose all the 3d elements, and has the propiety `camera`, 
witch set the angle in axis `[x,y,z]`, this determine the position of the dice relative to the user.

- #### Light: Contain a ambient light, and to directional lights, one pointing to the to of the cube, and other to the fron
- ####

