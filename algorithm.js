const solve = (a, b, c) => {
    const D = b ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return new Set(D >= 0 ? [x1, x2] : null);
};

USELESS TEXT
USELESS TEXT
USELESS TEXT
USELESS TEXT
USELESS TEXT

module.exports = solve;