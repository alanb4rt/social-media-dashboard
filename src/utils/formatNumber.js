export const formatNumber = (number) => {
    return number >= 10000 ? (number / 1000).toFixed(0) + "k" : number
};
