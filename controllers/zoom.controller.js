const APIRequestsHelper = require("../helpers/api_requests.helper");

class ZoomController{
    #req;
    #res;

    constructor(req = undefined, res = undefined){
        this.#req = req;
		this.#res = res;
    }

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

    createMeeting = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}/meetings`, true, this.#req.body);
            }
        }
        catch(error){
            response_data.error = error;
        }

        this.#res.json(response_data);
    }

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

    getRecordings = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { email_address } = this.#req.body;

            if(email_address){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/users/${email_address}/recordings/?from=2021-01-30`);
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

    getRecordingRegistrants = async () => {
        let response_data = { status: false, result: {}, error: null };

        try{
            let { recording_id } = this.#req.body;

            if(recording_id){
                let apiRequestsHelper = new APIRequestsHelper(this.#req);
                response_data = await apiRequestsHelper.fetchAPI(`https://api.zoom.us/v2/meetings/${recording_id}/recordings/registrants`);
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

module.exports = ZoomController;