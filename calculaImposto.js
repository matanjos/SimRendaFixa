function impostoCalc (juros,tempo) {
    if(tempo <= 6)
        return parseFloat(juros) * 0.225;
    if(tempo <= 12)
        return parseFloat(juros) * 0.2;
    if(tempo <= 24)
        return parseFloat(juros) * 0.175;

        return parseFloat(juros) * 0.15;
}

module.exports = impostoCalc;