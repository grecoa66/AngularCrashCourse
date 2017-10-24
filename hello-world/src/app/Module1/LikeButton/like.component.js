"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by akg pc on 10/23/2017.
 */
var Like = /** @class */ (function () {
    function Like(_count) {
        this._count = _count;
        // ...
    }
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('The like count must be greater than zero');
            }
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.incrementLike = function () {
        this._count++;
    };
    Like.prototype.decrementLike = function () {
        this._count--;
    };
    return Like;
}());
exports.Like = Like;
