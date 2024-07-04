const nodemailer = require("nodemailer");

const userScehma = require("../model/user.model");
console.log(userScehma.user);
const { v4: uuidV4 } = require("uuid");
exports.getUser = async (req, res) => {
  try {
    const user = await userScehma.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};



/* get single user */
exports.getSingleUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get the user id from the request parameters
    const user = await userScehma.findById(userId); // Fetch the user by _id

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};
/* delete single user */
exports.deleteSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const delteIUser = await userScehma.findByIdAndDelete(userId);
    console.log(delteIUser);
    res.status(201).json(delteIUser);
  } catch (err) {
    res.status(404).json({ message: "USER DELETE FAILED", err });
  }

};
/* user created */
exports.createUser = async (req, res) => {
  try {
    const newUser = new userScehma({
      name: req.body.name,
      email: req.body.email,
    });
    sendEmail(newUser.email,{
        subject:"Akbor Shanto",
        message:"Asslamualikum 😍 I am  Akbor Shanto👋 Thank you for visiting my website. A Passonate MERN STACK Developer from Bangladesh. "
        
        
        
    })
   const user= await newUser.save();
   console.log(user)
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err, "THIS IS USER ERRO");
    res.status(500).send({ message: err.message });
  }
};
/* send email */
const sendEmail=(emailAddress,EmailData)=>{
    
    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.SMT_EMAIL,
          pass: process.env.SMT_PASS,
        },
      });

      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
/* info */
const mailBody={
    from: `"akbor-portfolio" <${process.env.SMT_EMAIL}>`, // sender address
    to: emailAddress, // list of receivers
    subject: EmailData.subject, // Subject line
   
    html:EmailData.message
  }

  transporter.sendMail(mailBody,(errr,info)=>{

    if(errr){
        console.log(errr,"dsf")
    }else{
        console.log("email sendt")
    }
 });






}