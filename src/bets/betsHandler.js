import { tableNumbers, tableColours } from "../table/table";

const betsHandler = async (req, res) => {
    const bets = req.body;
    if (!validateBets(bets)) {
        return res.status(400).send({message: "invalid bets"})
    }
    return res.status(200).send({message: "All gravy"})
};

const validateBets = (bets) => {
    let isValid = true;
    bets.forEach((bet) => {
        if (!bet.type) {
            isValid = false;
        }
            switch (bet.type) {
                case "number":
                    if (tableNumbers.includes(bet.value)) {
                        break;
                    } else {
                        isValid = false;
                    }
                case "colour":
                    if (tableColours.includes(bet.value)) {
                        break;
                    } else {
                        isValid = false;
                    }
                case "odd/even":
                    if ((bet.value === ("odd" || "even"))) {
                        break;
                    } else {
                        isValid = false;
                    }
                default:
                    isValid = false;
            }
    });
    return isValid;
};

export default betsHandler;

