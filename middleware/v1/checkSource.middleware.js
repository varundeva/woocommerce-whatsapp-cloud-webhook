const config = require("../../config");
const checkSource = (req, res, next) => {
    const source = req.headers["x-wc-webhook-source"];
    
    if (source === config.woocommerce_webhook_source) {
        next();
    }
    else {
        res.status(401).send("Unauthorized Request Origin Found");
    }
}
module.exports = {checkSource};
