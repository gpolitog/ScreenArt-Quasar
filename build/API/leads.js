var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Lead = mongoose.model("Lead");

router.post("/", (req,res) => {
  var newLead = new Lead({
  name: req.body.name,
  phone: req.body.phone,
  email: req.body.email,
  address: req.body.address,
  status: req.body.status,
  url: req.body.url,
  comment: req.body.comment
  })

  newLead.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.status(401).send(result);
    }
  });
})

router.get("/", (req, res) => {
  Lead.find({},function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.get("/:id", (req, res) => {
  var leadid = new mongodb.ObjectID(req.params["id"]);
  Lead.find({"_id": leadid},function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.get("/name/:name", (req, res) => {
  var leadName = req.params["name"];
  Lead.find({"name": leadName},function (err, leads) {
    if (err) {
      res.send(err);
    } else {
      res.send(leads);
    }
  })
})

router.put("/:id", (req, res) => {
  var leadid = new mongodb.ObjectID(req.params["id"]);
  Lead.find({"_id": leadid},function (err, lead) {
    if (err) {
        res.status(500).send(err);
    } else {
        var lead = lead[0];
        lead.name = req.body.name || lead.name;
        lead.phone = req.body.phone || lead.phone;
        lead.email = req.body.email || lead.email;
        lead.address = req.body.address || lead.address;
        lead.status = req.body.status || lead.status;
        lead.url = req.body.url || lead.url;
        lead.comment = req.body.comment || lead.comment;

        lead.save(function (err, lead) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(lead);
        });
    }
});
})

router.delete("/", (req, res) => {
  var leadid = req.body._id;
  Lead.find({_id: leadid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
