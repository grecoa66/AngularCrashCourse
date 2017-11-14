"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by akg pc on 10/23/2017.
 */
var like_component_1 = require("./like.component");
var like = new like_component_1.Like(10);
console.log('Current likes: ' + like.count);
like.incrementLike();
like.incrementLike();
console.log('Plus two likes: ' + like.count);
like.decrementLike();
like.decrementLike();
console.log('Minus two likes: ' + like.count);
