const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b; 
}


function div(a, b) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"
}

function pow(a, b) {
    if (b == 0) {
        return 1;
    } else{
        let resultado = 1;
        for (let i = 0; i < b; i++) {
        resultado = resultado * a;
        } 
        return resultado;
    }
}

module.exports = fns;