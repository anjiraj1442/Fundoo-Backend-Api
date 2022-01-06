//imports
const mongoose = require("mongoose")
const createNotes = new mongoose.Schema({
    title: {
         type: String
    },
    description: { 
        type: String 
    },
    isArchieved: { 
        type: Boolean 
    },
    isDeleted: {
         type: Boolean 
    },
    color: { 
        type: String
    },
    userid:{
        type:String
    }
   
    
}, {
    timestamps: true,
})

 const notes = mongoose.model('NotesData', createNotes);
 //class
 class NoteModelClass {
    createNoteModel(obj) {
         let response = {
             sucess: true,
             message: '',
             data: "",
             status: 200
         };
         return new Promise((resolve, reject) => {
             obj.save().then((data) => {
                 (response.sucess = true),
                     (response.message = "succesfully create notes"),
                     (response.data = data);
                 (response.status = 200);
                 resolve({ response });
             }).catch((err) => {
                 console.log(err)
                 response.sucess = false,
                     response.message = "error while creating new notes"
                 response.data = "";
                 (response.status = 500);
                 reject({ response });
             })
         })
     }

        findNotes(req) {
          var response = {
            message: "",
            data: "",
            success: "",
            status: 200
           };
           return new Promise((resolve, reject) => {
             notes.findOne(req)
                .then((data) => {
                    if (data) {
                        (response.success = true),
                            (response.data = data),
                            (response.status = 202),
                            (response.message = "Notes available");
                        resolve(response);
                    }
                    else {
                        resolve({
                            message: "Notes not available",
                            data: null,
                            status: 400
                        });
                    }
                })
                .catch((err) => {
                    reject(
                        { success: false, error: err }
                    );
                });
        });
    }
    checkNotes(req) {
        var response = {
            message: "",
            data: "",
            success: "",
            status: 200
        };
        return new Promise((resolve, reject) => {
            notes.findOne({_id: req._id})
                .then((data) => {
                    if (data) {

                        (response.success = true),
                            (response.data = data),
                            (response.status = 202),
                            (response.message = "Notes found");
                        resolve(response);
                    }

                    else {
                        resolve({
                            message: "Notes not found",
                            data: null,
                            status: 400
                        });
                    }
                })
                .catch((err) => {
                    reject(
                        { success: false, error: err }
                    );
                });
        });
    }
    updateNoteModel(req, data) {
        let NoteModel = {
            title: req.title ? req.title : data.title,
            description: req.description ? req.description : data.description,
            isArchieved: req.isArchieved ? req.isArchieved : data.isArchieved,
            isDeleted: req.isDeleted ? req.isDeleted : data.isDeleted,
            color: req.color ? req.color : data.color,
            
        }
        return new Promise((resolve, reject) => {
            notes.updateOne({ _id: req._id }, NoteModel)
                .then((result) => {
                    resolve(result)
                })
                .catch((err) => {
                    reject(
                        { success: false, error: err }
                    );
                });
        });
    }
}
//exports
module.exports = {notes,NoteModelClass}