const axios = require("axios");
const jwt = require("jsonwebtoken");
const { API_KEY, API_SECRET } = process.env;

class APIRequestHelper{
    /**
    * Default constructor.
    */
    constructor(){ }

    /**
    * DOCU: This method is used to send asynchronous HTTP requests to an API endpoint. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf APIRequestHelper
    * @param {string} url - API endpoint
    * @param {object} post_data - { params } or { data }
    * @param {boolean} is_post - idenfy the method of request if get or post
    * @returns {object} response_data = { status: true, result: data, error: null }
    * @author Psyrone
    */
    fetchAPI = async (url, post_data = {}, is_post = false) => {
        let response_data = { status: false, result: {}, error: null };

        try {
            /* Use the API KEY and APISECRET of Zoom as JWT Token. */
            const payload = { iss: API_KEY, exp: ((new Date()).getTime() + 5000) };
            const token = jwt.sign(payload, API_SECRET);
            const config = {
                method: (is_post) ? "post" : "get",
                data: { ...post_data },
                params: { ...post_data },
                url,
                headers: { Authorization: `Bearer ${token}` }
            };

            /* Make API requests with Axios. */
            let { data } = await axios(config);

            response_data.result = data;
            response_data.status = true;
        }
        catch(error){
            response_data.result.error = error.message;
        }

        return response_data
    }
}

module.exports = APIRequestHelper;