/* wgpu-matrix@3.3.0, license MIT */
'use strict';

var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.vec4n = exports.vec3n = exports.vec2n = exports.quatn = exports.mat4n = exports.mat3n = exports.vec4d = exports.vec3d = exports.vec2d = exports.quatd = exports.mat4d = exports.mat3d = exports.vec4 = exports.vec3 = exports.vec2 = exports.quat = exports.mat4 = exports.mat3 = exports.utils = void 0;
const tslib_1 = require("tslib");
/**
 * Some docs
 * @namespace wgpu-matrix
 */
const types_1 = require("./types");
const mat3_impl_1 = require("./mat3-impl");
const mat4_impl_1 = require("./mat4-impl");
const quat_impl_1 = require("./quat-impl");
const vec2_impl_1 = require("./vec2-impl");
const vec3_impl_1 = require("./vec3-impl");
const vec4_impl_1 = require("./vec4-impl");
const utils = tslib_1.__importStar(require("./utils"));
exports.utils = utils;
/**
 * Generate wgpu-matrix API for type
 */
function wgpuMatrixAPI(Mat3Ctor, Mat4Ctor, QuatCtor, Vec2Ctor, Vec3Ctor, Vec4Ctor) {
    return {
        /** @namespace mat3 */
        mat3: (0, mat3_impl_1.getAPI)(Mat3Ctor),
        /** @namespace mat4 */
        mat4: (0, mat4_impl_1.getAPI)(Mat4Ctor),
        /** @namespace quat */
        quat: (0, quat_impl_1.getAPI)(QuatCtor),
        /** @namespace vec2 */
        vec2: (0, vec2_impl_1.getAPI)(Vec2Ctor),
        /** @namespace vec3 */
        vec3: (0, vec3_impl_1.getAPI)(Vec3Ctor),
        /** @namespace vec4 */
        vec4: (0, vec4_impl_1.getAPI)(Vec4Ctor),
    };
}
_a = wgpuMatrixAPI(Float32Array, Float32Array, Float32Array, Float32Array, Float32Array, Float32Array), 
/**
 * 3x3 Matrix functions that default to returning `Float32Array`
 * @namespace
 */
exports.mat3 = _a.mat3, 
/**
 * 4x4 Matrix functions that default to returning `Float32Array`
 * @namespace
 */
exports.mat4 = _a.mat4, 
/**
 * Quaternion functions that default to returning `Float32Array`
 * @namespace
 */
exports.quat = _a.quat, 
/**
 * Vec2 functions that default to returning `Float32Array`
 * @namespace
 */
exports.vec2 = _a.vec2, 
/**
 * Vec3 functions that default to returning `Float32Array`
 * @namespace
 */
exports.vec3 = _a.vec3, 
/**
 * Vec3 functions that default to returning `Float32Array`
 * @namespace
 */
exports.vec4 = _a.vec4;
_b = wgpuMatrixAPI(Float64Array, Float64Array, Float64Array, Float64Array, Float64Array, Float64Array), exports.mat3d = _b.mat3, exports.mat4d = _b.mat4, exports.quatd = _b.quat, exports.vec2d = _b.vec2, exports.vec3d = _b.vec3, exports.vec4d = _b.vec4;
_c = wgpuMatrixAPI(types_1.ZeroArray, Array, Array, Array, Array, Array), exports.mat3n = _c.mat3, exports.mat4n = _c.mat4, exports.quatn = _c.quat, exports.vec2n = _c.vec2, exports.vec3n = _c.vec3, exports.vec4n = _c.vec4;
//# sourceMappingURL=wgpu-matrix.module.js.map
