const euler = 2.71828;
const defDivision = 1500;
const diffThreshold = -30;

function CalcEHP() {
    let health = document.getElementById("inputHealth").value;
    let defence = document.getElementById("inputDefence").value;

    let reduction = 0.85 * (1 - Math.pow(euler, -defence / defDivision));
    let ehp = (health / (1 - reduction)).toFixed(0);

    document.getElementById("textMitigation").innerText = (reduction * 100).toFixed(2);
    document.getElementById("textEHP").innerText = ehp;
}


function CalcACC() {
    let acc = document.getElementById("inputACC").value;
    let res = document.getElementById("inputRES").value;

    let chance;
    if ((acc - res) <= diffThreshold) {
        chance = 0.3 + 0.67 * (1 - Math.pow(euler, (3 * (0.3 - (res - acc) / 100))));
    }
    else {
        chance = 0.03 + 0.27 * Math.pow(euler, (6 * (((res - acc) / 100) - 0.3)));
    }

    document.getElementById("textDiff").innerText = acc - res;
    document.getElementById("textACC").innerText = ((1 - chance) * 100).toFixed(2);
}