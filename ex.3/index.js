const product = {
    name: 'Book',
    price: 1.90,
    discount: 0.05
};

function clone (obj) {
    return {...obj};
}

const newProduct = clone(product);
newProduct.name = 'Calendar';

console.log(product, newProduct);