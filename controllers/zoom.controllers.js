const APIRequestsHelper = require("../helpers/api_requests.helper");

/** 
* @class 
* This controller is being called from the zoom.routes.js <br>
* All methods here are related to Zoom API requests. <br>
* Last Updated Date: April 4, 2022
* @author Psyrone
*/
class ZoomControllers{
    #req;
    #res;

    /**
    * Default constructor.
    * @param {object} req - represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers.
    * @param {object} res - represents the HTTP response that an Express app sends when it gets an HTTP request.
    */
    constructor(req = undefined, res = undefined){
        this.#req = req;
		this.#res = res;
    }

    /**
    * DOCU: This method is used to get the user info of the specified API key owner or email address. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { email_address }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    getUserInfo = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}`);
            }
            else{
                response_data.error = "Email address is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

    /**
    * DOCU: This method is used to create a zoom meeting. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { email_address, post_data: { topic, type, timezone } }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    createMeeting = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address, post_data } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}/meetings`, post_data, true);
            }
            else{
                response_data.error = "Email address is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

    /**
    * DOCU: This method is used to get current user zoom meetings. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { email_address }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    getMeetings = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}/meetings`);
            }
            else{
                response_data.error = "Email address is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

    /**
    * DOCU: This method is used to get meeting participants. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { meeting_id }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    getMeetingParticipants = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { meeting_id } = this.#req.body;

            if(meeting_id){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/report/meetings/${meeting_id}/participants`);
            }
            else{
                response_data.error = "Meeting id is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

    /**
    * DOCU: This method is used to get current user's cloud recordings. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { email_address: params: { from, to, page_size } }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    getRecordings = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address, params } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}/recordings/?`, params);
            }
            else{
                response_data.error = "Email address is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

    /**
    * DOCU: This method is used to get cloud recordings' registrants. <br>
    * Triggered: request.rest <br>
    * Last Updated Date: April 4, 2022
    * @async
    * @function
    * @memberOf ZoomControllers
    * @param {object} this.#req.body - { email_address: params: { page_number, page_size } }
    * @returns {object} response_data = { status: true, result: {}, error: null }
    * @author Psyrone
    */
    getRecordingRegistrants = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { recording_id, params } = this.#req.body;

            if(recording_id){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/meetings/${recording_id}/recordings/registrants`, params);
            }
            else{
                response_data.error = "Recording id is missing";
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }
}

module.exports = ZoomControllers;