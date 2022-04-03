const axios = require("axios");
const jwt = require("jsonwebtoken");
const { API_KEY, API_SECRET } = process.env;

class APIRequestHelper{
    #req;
    #res;

    constructor(req = undefined, res = undefined){
        this.#req = req;
		this.#res = res;
    }

    fetchAPI = async (url, is_post = false, post_data = {}) => {
        let response_data = { status: false, result: {}, error: null };

        try {
            /* Use the API KEY and APISECRET of Zoom as JWT Token. */
            const payload = { iss: API_KEY, exp: ((new Date()).getTime() + 5000) };
            const token = jwt.sign(payload, API_SECRET);
            const config = {
                method: (is_post) ? "post" : "get",
                data: post_data,
                url,
                headers: { Authorization: `Bearer ${token}` }
            };

            /* Make API request to Axios. */
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