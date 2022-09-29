export const winningValue = {
    "number": "17",
    "colour": "red"
};

export const allValidBetsReturn = [
    {
        "winningValue": {
            "number": "17",
            "colour": "red"
        }
    },
    {
        "type": "number",
        "value": "17",
        "stake": 10,
        "odds": "35/1",
        "isWinner": true,
        "winnings": 360
    },
    {
        "type": "colour",
        "value": "black",
        "stake": 50,
        "odds": "1/1",
        "isWinner": false,
        "winnings": 0
    },
    {
        "type": "oddEven",
        "value": "odd",
        "stake": 80,
        "odds": "1/1",
        "isWinner": true,
        "winnings": 160
    },
    {
        "type": "colour",
        "value": "green",
        "stake": 4,
        "odds": "17/1",
        "isWinner": false,
        "winnings": 0
    }
];

export const allValidBets = [
    {
        "type": "number",
        "value": "17",
        "stake": 10
    },
    {
        "type": "colour",
        "value": "black",
        "stake": 50
    },
    {
        "type": "oddEven",
        "value": "odd",
        "stake": 80
    },
    {
        "type": "colour",
        "value": "green",
        "stake": 4
    }
];

export const allInvalidBets = [
    {
        "type": "number",
        "value": "1784635",
        "stake": 10
    },
    {
        "type": "colour",
        "value": "orange",
        "stake": 50
    },
    {
        "type": "oddEven",
        "value": "both",
        "stake": 87
    },
    {
        "type": "shape",
        "value": "circle",
        "stake": 4
    }
];

export const someInvalidBets = [
    {
        "type": "number",
        "value": "1784635",
        "stake": 10
    },
    {
        "type": "colour",
        "value": "black",
        "stake": 50
    },
    {
        "type": "oddEven",
        "value": "odd",
        "stake": 87
    },
    {
        "type": "shape",
        "value": "circle",
        "stake": 4
    }
];
