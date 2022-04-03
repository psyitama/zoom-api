const Express = require("express");
const ZoomRoute = Express.Router();
const ZoomController = require("../controllers/zoom.controller");

ZoomRoute.post("/userinfo", (req, res) => { new ZoomController(req, res).getUserInfo(); });
ZoomRoute.post("/create_meeting", (req, res) => { new ZoomController(req, res).createMeeting(); });
ZoomRoute.post("/meetings", (req, res) => { new ZoomController(req, res).getMeetings(); });
ZoomRoute.post("/participants", (req, res) => { new ZoomController(req, res).getMeetingParticipants(); });
ZoomRoute.post("/recordings", (req, res) => { new ZoomController(req, res).getRecordings(); });
ZoomRoute.post("/registrants", (req, res) => { new ZoomController(req, res).getRecordingRegistrants(); });

ZoomRoute.options("*", function(req, res, next){
	next();
});

module.exports = ZoomRoute;
