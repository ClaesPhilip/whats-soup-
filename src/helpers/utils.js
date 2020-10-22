export const formatNumber = number => {
    return new Intl.NumberFormat('en-SW', { style: 'currency', currency: 'SEK' }).format(number);
}