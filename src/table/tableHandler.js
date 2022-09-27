import { tableValues } from "./table";

const tableHandler = async (req, res) => {
    tableValues ?
        res.status(200).send({tableValues: tableValues}) :
        res.status(404).send({tableValues: "No table values found"});
};

export default tableHandler;
