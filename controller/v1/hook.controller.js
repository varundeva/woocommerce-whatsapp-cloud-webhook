const {sendCreateOrderNotification} = require("../../whatsapp/sendMessage")

const createOrder = async (req, res) => {
    const body = req.body;
    const data = await sendCreateOrderNotification(body);
    res.send(data)
}


module.exports = {createOrder}