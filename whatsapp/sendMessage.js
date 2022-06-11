const axios = require('axios');
const { get } = require("lodash")

const config = require("../config");

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Authorization': 'Bearer ' + config.whatsapp_cloud_api_access_token,
    }
}

const getCreateOrderBody = (order) => {
    return {
        "messaging_product": "whatsapp",
        "to": get(order,'billing.phone').replace('+', ''),
        "type": "template",
        "template": {
            "name": config.create_order_template,
            "language": {
                "code": "en",
                "policy": "deterministic"
            },
            "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "text",
                            "text": get(order, "line_items.0.name").substring(0, 29)+'..'
                        }
                    ]
                }, {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": get(order,"billing.first_name")+' '+get(order,"billing.last_name")
                        },
                        {
                            "type": "text",
                            "text": get(order, "line_items.0.parent_name")
                        }
                    ]
                }
            ]
        }
    }
}

sendCreateOrderNotification = async (order) => {
    try {
        
        const response = await axios.post(`${config.whatsapp_cloud_api_endpoint}${config.version}/${config.from_phone_number_id}/messages`, getCreateOrderBody(order), { headers: getHeaders() });
        return response.data;
    } catch (error) {
        return error.response.data || error.message
    }
}


module.exports = { sendCreateOrderNotification }