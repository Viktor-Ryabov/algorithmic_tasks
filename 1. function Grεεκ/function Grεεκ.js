function GrεεκL33t(str) {
    let dictionary = {
        A: "α",
        B: "β",
        D: "δ",
        E: "ε",
        I: "ι",
        K: "κ",
        N: "η",
        O: "θ",
        P: "ρ",
        R: "π",
        T: "τ",
        U: "μ",
        V: "υ",
        W: "ω",
        X: "χ",
        Y: "γ",
    };
    let workingArr = str.toUpperCase().split("");
    for (let i = 0; i < workingArr.length; i++) {
        if (Object.keys(dictionary).includes(workingArr[i])) {
            workingArr[i] = dictionary[workingArr[i]];
        } else {
          workingArr[i] = workingArr[i].toLowerCase();
        }
    }
    return workingArr.join("");
}
