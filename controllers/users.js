import userModel from "../models/user.js";

//[GET] Get All Users
export const getUsers = (req, res, next) => {
  userModel
    .findAll()
    .then((userList) => {
      res.status(200).json({
        message: "Get all user",
        userData: userList,
      });
    })
    .catch((error) => {
      res.status(500).json("No data");
    });
};

//[GET] Get User By ID
export const getUserByID = (req, res, next) => {
  const userId = req.params.userId;
  userModel
    .findByPk(userId)
    .then((user) => {
      if (!user) {
        res.status(200).json({
          status: false,
          message: "Can't find user",
        });
      } else {
        res.status(200).json({
          status: true,
          message: "Found the user",
          userData: user,
        });
      }
    })
    .catch((error) => {
      res.status(500).json("No data");
    });
};

//[POST] Create An User
export const createUsers = (req, res, next) => {
  const _email = req.body.email;
  const _fullname = req.body.fullname;
  const _password = req.body.password;
  const _phone = req.body.phone;
  const _gender = req.body.gender;
  const _age = req.body.age;

  const _user = new userModel({
    email: _email,
    fullname: _fullname,
    password: _password,
    phone: _phone,
    gender: _gender,
    age: _age,
  });

  _user
    .save()
    .then((result) => {
      res.status(200).json({
        status: true,
        message: "User has been created",
        data: _user,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// [POST] Update Food
export const updateUser = (req, res, next) => {
  const _id = req.body.id;
  const _email = req.body.email;
  const _fullname = req.body.fullname;
  const _password = req.body.password;
  const _phone = req.body.phone;
  const _gender = req.body.gender;
  const _age = req.body.age;

  const _user = new Object({
    id: _id,
    email: _email,
    fullname: _fullname,
    password: _password,
    phone: _phone,
    gender: _gender,
    age: _age,
  });

  userModel
    .findByPk(_id)
    .then((user) => {
      if (!user) {
        res.status(200).json({
          status: false,
          message: "Can't find user, can't update",
        });
      } else {
        userModel
          .update(_user, {
            where: { id: _user.id },
          })
          .then((result) => {
            res.status(200).json({
              status: true,
              message: "Updated user successfully",
              userData: _user,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json("No data");
    });
};

// [GET] Delete User
export const deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  userModel.findByPk(userId)
      .then(user => {
        if(!user){
          res.status(200).json({
            status: false,
            message: "Can't find user, Can't delete user",
          })
        }else{
          userModel
            .destroy({
              where: {id: userId}
            })
            .then((result) => {
              res.status(200).json({
                  status: true,
                  message: "Deleted user successfully",
              })
            });
        }
      })
      .catch(error => {
          res.status(500).json("No data");
      })
}
