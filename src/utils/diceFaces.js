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
            _x: this.axis._x,

            y: this.axis.z,
            _y: this.axis._z,

            z: this.axis.y,
            _z: this.axis._y,

        };
        console.log(newAxis)
        this.axis = newAxis;
        console.log(newAxis)

    };
    rotation_X() {
        console.log("_x")
        const newAxis = {
            x: this.axis.x,
            _x: this.axis.x,

            y: this.axis.z,
            _y: this.axis._z,

            z: this.axis.y,
            _z: this.axis._y,

        };

        this.axis = newAxis;
        console.log(newAxis)
    };

    rotationY() {
        console.log("y")

        const newAxis = {
            x: this.axis.z,
            _x: this.axis._z,

            y: this.axis.y,
            _y: this.axis._y,

            z: this.axis.x,
            _z: this.axis._x,


        };
        console.log(newAxis)


        this.axis = newAxis;
        console.log(newAxis)

    };

    rotation_Y() {
        console.log("_y")

        const newAxis = {
            x: this.axis.z,
            _x: this.axis._z,

            y: this.axis.y,
            _y: this.axis._y,

            z: this.axis.x,
            _z: this.axis._x,
        };

        this.axis = newAxis;
        console.log(newAxis)


    };

    rotationZ() {
        console.log("z")
        const newAxis = {
            x: this.axis.y,
            _x: this.axis._y,

            y: this.axis.x,
            _y: this.axis._x,

            z: this.axis.z,
            _z: this.axis._z,
        };

        this.axis = newAxis;
        console.log(newAxis)
    };

    rotation_Z() {
        console.log("_z")
        const newAxis = {
            x: this.axis._y,
            _x: this.axis.y,

            y: this.axis._x,
            _y: this.axis.x,

            z: this.axis.z,
            _z: this.axis._z,
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