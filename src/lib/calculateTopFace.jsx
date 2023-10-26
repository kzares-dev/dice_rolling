import { Euler } from 'three';

export const calculateFace = (refQuaternion) => {
    const quaternion = refQuaternion;
    const euler = new Euler();
    euler.setFromQuaternion(quaternion);

    const eps = 0.1;
    const isZero = (angle) => Math.abs(angle) < eps;
    const isApproximatelyEqualToHalfPi = (angle) => Math.abs(angle - 0.5 * Math.PI) < eps;
    const isApproximatelyEqualToMinusHalfPi = (angle) => Math.abs(-0.5 * Math.PI - angle) < eps;
    const isApproximatelyEqualToPiOrMinusPi = (angle) => Math.abs(Math.PI - angle) < eps || Math.abs(-Math.PI - angle) < eps;

    // Verificar las condiciones en orden descendente de prioridad para capturar los casos más específicos primero

    if (isApproximatelyEqualToPiOrMinusPi(euler.x)) {
        return 6;
    } else if (isApproximatelyEqualToMinusHalfPi(euler.x)) {
        return 3;
    } else if (isApproximatelyEqualToHalfPi(euler.x)) {
        return 4;
    } else if (isApproximatelyEqualToHalfPi(euler.z)) {
        return 2;
    } else if (isApproximatelyEqualToMinusHalfPi(euler.z)) {
        return 5;
    } else if (isZero(euler.x) && isZero(euler.z)) {
        return 1;
    } else {
        // Manejar el caso cuando no se cumple ninguna condición
        return 0;
    }
};