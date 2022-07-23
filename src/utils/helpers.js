export const formatPrice = (number) => {

    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        currencySign: 'accounting'
    }).format(number / 100);
}

export const getUniqueValues = () => { }
