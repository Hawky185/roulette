export const allOdds = {
    number: "35/1",
    colour: {
        red: "1/1",
        black: "1/1",
        green: "17/1"
    },
    oddEven : "1/1"
};

export const getBetOdds = (bet) => {
    const type = bet.type;
    if (type === "colour") {
        return allOdds.colour[bet.value];
    }
    return allOdds[bet.type];
};
