export const formatNumber = (number) => {
    return number >= 10000 ? `${Math.floor((number / 1000))}k` : number;
};
