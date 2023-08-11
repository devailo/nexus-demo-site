

export const sortProducts = (products, selectedSortOption) => {
    const sortedProducts = [...products]

    if (selectedSortOption === 'name') {
        sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand))
    } else if (selectedSortOption === 'name-reverse') {
        sortedProducts.sort((a, b) => b.brand.localeCompare(a.brand))
    } else if (selectedSortOption === 'price') {
        sortedProducts.sort((a, b) => {
            const priceA = a.discounted ? a.price * 0.8 : a.price
            const priceB = b.discounted ? b.price * 0.8 : b.price
            return priceA - priceB
        })
    } else if (selectedSortOption === 'price-reverse') {
        sortedProducts.sort((a, b) => {
            const priceA = a.discounted ? a.price * 0.8 : a.price
            const priceB = b.discounted ? b.price * 0.8 : b.price
            return priceB - priceA
        })
    }

    return sortedProducts;
};