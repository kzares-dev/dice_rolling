class DiceFaces {
    constructor() {
        this.faces = {
            x: "x",
            _x: "_x",
            y: "y",
            _y: "_y",
            z: "z",
            _z: "_z",
        }

        this.axis = {
            x: "x",
            _x: "_x",
            y: "y",
            _y: "_y",
            z: "z",
            _z: "_z",
        }
    };

    rotationX() {
        console.log("x")
        const newAxis = {
            x: this.axis.x,
            y: this.axis.z,
            z: this.axis.y,
        };

        console.log(newAxis)
        this.axis = newAxis;

    };

    rotationY() {
        console.log("y")

        const newAxis = {
            x: this.axis.z,
            y: this.axis.y,
            z: this.axis.x,

        };
        console.log(newAxis)


        this.axis = newAxis;
        console.log(newAxis)
    };

    rotationZ() {
        console.log("z")
        const newAxis = {
            x: this.axis.y,
            y: this.axis.x,
            z: this.axis.z,
        };

        this.axis = newAxis;
        console.log(newAxis)
    };

    findCorrespondingAxis(axis) {
        let correspongingAxis;
        Object.entries(([key, value]) => {
            if (value === axis) correspongingAxis = key
        })

        return correspongingAxis
    }

    calculateAxis(axis) {
        const axisArray = Object.entries(this.axis);

        let transformedAxis;
        axisArray.map(([key, value]) => {
            if (key === axis) transformedAxis = value
        })

        console.log(transformedAxis)

        switch (transformedAxis) {
            case "x":
                this.rotationX();
                break
            case "_x":
                this.rotation_X();
                break
            case "y":
                this.rotationY();
                break
            case "_y":
                this.rotation_Y();
                break
            case "z":
                this.rotationZ();
                break
            case "_z":
                this.rotation_Z();
                break

        }

    }


}

const diceFaces = new DiceFaces();

export default diceFaces