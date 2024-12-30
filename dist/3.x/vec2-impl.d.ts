import { Mat3Arg } from './mat3';
import { Mat4Arg } from './mat4';
import { Vec2Arg, Vec2Type } from './vec2';
import { Vec3Arg } from './vec3';
import { BaseArgType } from './types';
export { Vec2Arg, Vec2Type };
type Vec2Ctor<T extends Vec2Arg = Float32Array> = new (n: number) => T;
/**
 * Generates am typed API for Vec3
 */
declare function getAPIImpl<VecType extends Vec2Arg = Float32Array>(Ctor: Vec2Ctor<VecType>): {
    create: (x?: number, y?: number) => VecType;
    fromValues: (x?: number, y?: number) => VecType;
    set: <T extends Vec2Arg = VecType>(x: number, y: number, dst?: T) => T;
    ceil: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    floor: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    round: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    clamp: <T extends Vec2Arg = VecType>(v: Vec2Arg, min?: number, max?: number, dst?: T) => T;
    add: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    addScaled: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, scale: number, dst?: T) => T;
    angle: (a: Vec2Arg, b: Vec2Arg) => number;
    subtract: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    sub: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    equalsApproximately: (a: Vec2Arg, b: Vec2Arg) => boolean;
    equals: (a: Vec2Arg, b: Vec2Arg) => boolean;
    lerp: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, t: number, dst?: T) => T;
    lerpV: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, t: Vec2Arg, dst?: T) => T;
    max: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    min: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    mulScalar: <T extends Vec2Arg = VecType>(v: Vec2Arg, k: number, dst?: T) => T;
    scale: <T extends Vec2Arg = VecType>(v: Vec2Arg, k: number, dst?: T) => T;
    divScalar: <T extends Vec2Arg = VecType>(v: Vec2Arg, k: number, dst?: T) => T;
    inverse: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    invert: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    cross: <T extends Vec3Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    dot: (a: Vec2Arg, b: Vec2Arg) => number;
    length: (v: Vec2Arg) => number;
    len: (v: Vec2Arg) => number;
    lengthSq: (v: Vec2Arg) => number;
    lenSq: (v: Vec2Arg) => number;
    distance: (a: Vec2Arg, b: Vec2Arg) => number;
    dist: (a: Vec2Arg, b: Vec2Arg) => number;
    distanceSq: (a: Vec2Arg, b: Vec2Arg) => number;
    distSq: (a: Vec2Arg, b: Vec2Arg) => number;
    normalize: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    negate: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    copy: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    clone: <T extends Vec2Arg = VecType>(v: Vec2Arg, dst?: T) => T;
    multiply: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    mul: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    divide: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    div: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
    random: <T extends Vec2Arg = VecType>(scale?: number, dst?: T) => T;
    zero: <T extends Vec2Arg = VecType>(dst?: T) => T;
    transformMat4: <T extends Vec2Arg = VecType>(v: Vec2Arg, m: Mat4Arg, dst?: T) => T;
    transformMat3: <T extends Vec2Arg = VecType>(v: Vec2Arg, m: Mat3Arg, dst?: T) => T;
    rotate: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, rad: number, dst?: T) => T;
    setLength: <T extends Vec2Arg = VecType>(a: Vec2Arg, len: number, dst?: T) => T;
    truncate: <T extends Vec2Arg = VecType>(a: Vec2Arg, maxLen: number, dst?: T) => T;
    midpoint: <T extends Vec2Arg = VecType>(a: Vec2Arg, b: Vec2Arg, dst?: T) => T;
};
type API<T extends BaseArgType = Float32Array> = ReturnType<typeof getAPIImpl<T>>;
export declare function getAPI<T extends Vec2Arg = Float32Array>(Ctor: Vec2Ctor<T>): API<T>;