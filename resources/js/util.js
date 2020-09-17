export default function formatCurrency(num, currency, asNumber, skipCalculation) {
    if (!skipCalculation) num = calculate(num, currency);
    let res = Number(num.toFixed(1));
    if (!asNumber) res = getSign(currency) + res.toLocaleString() + " ";
    return res;
}

function getSign(code) {
    let res = "$";
    if (code == 'euro') res = "€";
    else if (code == 'gbp') res = "£";
    return res;
}

function calculate(num, code) {
    let res = num;
    if (code == 'euro') res = num * 0.9;
    else if (code == 'gbp') res = num * 0.7;
    return res;
}

