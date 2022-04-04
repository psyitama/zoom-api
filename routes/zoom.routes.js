const Express = require("express");
const ZoomRoutes = Express.Router();
const ZoomController = require("../controllers/zoom.controllers");

ZoomRoutes.post("/userinfo", (req, res) => { new ZoomController(req, res).getUserInfo(); });
ZoomRoutes.post("/create_meeting", (req, res) => { new ZoomController(req, res).createMeeting(); });
ZoomRoutes.post("/meetings", (req, res) => { new ZoomController(req, res).getMeetings(); });
ZoomRoutes.post("/participants", (req, res) => { new ZoomController(req, res).getMeetingParticipants(); });
ZoomRoutes.post("/recordings", (req, res) => { new ZoomController(req, res).getRecordings(); });
ZoomRoutes.post("/registrants", (req, res) => { new ZoomController(req, res).getRecordingRegistrants(); });

ZoomRoutes.options("*", function(req, res, next){
	next();
});

module.exports = ZoomRoutes;
