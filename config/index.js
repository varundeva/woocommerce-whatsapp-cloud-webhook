module.exports = config = {
    // Port Running
    port: process.env.PORT || 5000,
    woocommerce_webhook_source: process.env.WOOCOMMERCE_WEBHOOK_SOURCE,
    from_phone_number_id: process.env.FROM_PHONE_NUMBER_ID,
    whatsapp_cloud_api_access_token: process.env.WHATSAPP_CLOUD_API_ACCESS_TOKEN,
    whatsapp_cloud_api_endpoint: process.env.WHATSAPP_CLOUD_API_ENDPOINT||'https://graph.facebook.com/',
    version: process.env.WHATSAPP_CLOUD_API_VERSION||'v13.0',
    create_order_template: process.env.CREATE_ORDER_TEMPLATE,
};
