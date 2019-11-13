const express = require('express');
const router = express.Router();
const activityModel = require('../model/activityModel');

router.get('/all', (req, res) => {
    activityModel.find()
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
    const newActivity = new activityModel({
        name: req.body.name,
        itineraryId: req.body.itineraryId,
        adress: req.body.adress,
        img: req.body.img,
        duration: req.body.duration,
        price: req.body.price,
        description: req.body.description
    })
    newActivity.save()
        .then(activity => {
            res.send(activity)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});

router.get('/:itineraryId',
	(req, res) => {
  		let itineraryRequested = req.params.itineraryId;
  		activityModel.find({ itineraryId: itineraryRequested })
			.then(activities => {
                res.send(activities)
			})
			.catch(err => console.log(err));
});

module.exports = router;