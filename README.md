## setting up
`npm install --legacy-peer-deps`

## run the project
`npm run dev`

# App.jsx Component

Contains two principal states
 
1.**[diceSetting, setDiceSettings]**: this state is passed to all other components and store the dice data sush as the _faces text_ , _dice size_, _animation duration_

2.**[diceWorkflow, setDiceWorkflow]**: this state handle all the workflow, that means, he controlls when the _dice displays_, the _results are show_, and the _dice animation_

### Components


--------------------------------------------------------------------------------------------------------------------------------
**CanvasComponent**: contains all the three.js funcionality, including the physics, camera, the dice, etc            

**DiceSelection**: the home screen, handle the dice customization                                                   

**ResultsModal**: when the propiety of `diceWorkflow.showResults` is true, it shows, with the top face of the dice


# Canvas.jsx Component

Constain the Canvas Root, the main `<Canvas> </Canvas>` enclose all the 3d elements, and has the propiety `camera`, 
witch set the angle in axis `[x,y,z]`, this determine the position of the dice relative to the user.

- #### **Light:** Contain a ambient light, and to directional lights, one pointing to the to of the cube, and other to the fron
- #### **Physics:** No description needed for this
- ### **Ground:**  Contains two grounds, one invisible, this is the physical ground, the cube is placed on top of this; and another ground after that, handle the shadow
- ### **Cube:** Is basically the cube spinning in air, when the animation time is over switchs to the `CubeWithPhysics` cube
 
# Cube.jsx & CubeWithPhisics components

They hold a `RoundedBox`, is the basic form of the cube, and in the same element  `MeshWithText` components, this is the text, and they are positioned one by one.

In case of **Cube** it has the random rotations, more information is in the code.

The **CubeWithPhysics** component has nathing complex, only the definition of `useBox` to make the element compatible with the physics


# lib/calculateTopFace.js
 The function in this file is very awesome, it makes calculations and checks using complex mathematics, modifing this file is **not recomended**

