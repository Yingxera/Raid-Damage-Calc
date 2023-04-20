const euler = 2.71828;
const division = 1500;

function CalcEHP() {
    let health = document.getElementById("inputHealth").value;
    let defence = document.getElementById("inputDefence").value;

    let reduction = (0.85 * (1 - Math.pow(euler, -defence / division))).toFixed(4);
    let ehp = (health / (1 - reduction)).toFixed(0);

    document.getElementById("textMitigation").innerText = reduction;
    document.getElementById("textEHP").innerText = ehp;
}