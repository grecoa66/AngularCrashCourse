/**
 * Created by akg pc on 10/23/2017.
 */
import {Like} from './like.component';

let like = new Like(10);

console.log('Current likes: ' + like.count);

like.incrementLike();
like.incrementLike();

console.log('Plus two likes: ' + like.count);

like.decrementLike();
like.decrementLike();

console.log('Minus two likes: ' + like.count)
