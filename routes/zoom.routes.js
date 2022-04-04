const Express = require("express");
const ZoomRoutes = Express.Router();
const ZoomControllers = require("../controllers/zoom.controllers");

/**
* Express router to mount Zoom API related functions.
* @type {object}
* @const
* @namespace ZoomRoutes
*/
ZoomRoutes.post("/userinfo", (req, res) => { new ZoomControllers(req, res).getUserInfo(); });
ZoomRoutes.post("/create_meeting", (req, res) => { new ZoomControllers(req, res).createMeeting(); });
ZoomRoutes.post("/meetings", (req, res) => { new ZoomControllers(req, res).getMeetings(); });
ZoomRoutes.post("/participants", (req, res) => { new ZoomControllers(req, res).getMeetingParticipants(); });
ZoomRoutes.post("/recordings", (req, res) => { new ZoomControllers(req, res).getRecordings(); });
ZoomRoutes.post("/registrants", (req, res) => { new ZoomControllers(req, res).getRecordingRegistrants(); });

ZoomRoutes.options("*", function(req, res, next){
	next();
});

module.exports = ZoomRoutes;
