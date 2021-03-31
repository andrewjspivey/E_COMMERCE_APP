


export const getProducts = async (limit=10) => {
    const baseUrl = 'https://fakestoreapi.com/products?'
    const url = `${baseUrl}/limit=${limit}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
};


export const getProductById = async (productId) => {
    const baseUrl = 'https://fakestoreapi.com/products'
    const url = `${baseUrl}/products/${productId}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
};