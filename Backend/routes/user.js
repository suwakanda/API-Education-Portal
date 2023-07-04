// Filename : user.js
const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const multer = require("multer")
const jwt = require("jsonwebtoken");
const router = express.Router();
const app = express();

//these are folder path 
const User = require("../model/User");
//---image upload route
const Images = require("../model/useImg")
const auth = require("../middleware/auth");
const { find, where } = require("../model/User");

//-----------------Image Upload Api -----------------------------
let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './publicc')
  },

  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, new Date().toISOString() + file.originalname);
  },

  fileFilter(req, file, cb) {
    if (!file.mimetype.split('/')[1] === 'png/jpg') {
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  }
})

let upload = multer({
  storage: storage,
}).single('userFile');

router.post("/profileimg", upload, (req, res) => {
  try {
    const user = Images.create({
      img: req.file.filename
    })
    console.log(req.file.filename)
    res.status(200).send('File is uploaded')
  }
  catch (err) {
    res.status(400).send({ err })
  }
})

//-----------------------Signup Api------------------------------------
router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username"),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "please enter a valid password").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {
      username, email, password
    } = req.body;
    try {
      let user = await User.findOne({
        email
      });

      if (user) {
        return res.status(400).json({
          msg: "user already exist"
        });
      }
      user = new User({
        username,
        email,
        password,

      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      user.save() // these method save datat in database
        console.log(user.save())
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString", {
        expiresIn: 10000
      },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token, user  // --thes data pass in frontend to show information user in web page
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
)

router.post(
  "/login",
  [
    check("email", "please enter a valid email address").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email
      });
      if (!user)
        return res.status(400).json({
          message: "user no exits"
        });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      await user.save()
      const payload = {
        user: {
          id: user.id,
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token, user
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(209).json({
        message: "Server Error"
      });
    }
  }
);

router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user", });
  }
});




//router findonly only one user

// router.get("/:id", async (req, res) => {
//   const id = await req.params.id;
//   User.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found user with id" + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res.status(500)({
//         Message: err.message
//       });
//     });
// });

//find all user

// router.get("/all",  (req, res) => {
//   User.find({published:false})
//     .then(data => {
//       res.send(data)
// })
//     .catch(err => {
//       res.status(500)({
//         Message: err.message || "some error occured"

//        });
//      });
// });
//   router.get('/all', (req, res) => {
//     User.find(user).then((data) => {
//       res.json(data);
//     });
//   });

//router delete
router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "user deleted succesfully!",

    })
  } catch (err) {
    res.status(500).json({
      Message: "user not deleted"
    })
  }
});

module.exports = router;
