var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    { name: 'banana', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 3},
    { name: 'orange', type: 'fruit', quantity: 3, price: 5},
]


var filteredProducts = products.filter((product) => product.type === 'fruit')
// console.log(filteredProducts)

// type veg, quant greater than 0 and price less than 10 
var newCondition = products.filter((productSpecific) => productSpecific.type === 'vegetable' && productSpecific.quantity > 0 && productSpecific.price < 10)
console.log(newCondition);


// When to use to filter 
var post = { id: 4, tittle: 'New Post'}
var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
]

// Return the comments associated to post
const commentsForPost = (post, comments) =>
  comments.filter((comment) => comment.postId === post.id);

var results = commentsForPost(post, comments)
    console.log(results)
