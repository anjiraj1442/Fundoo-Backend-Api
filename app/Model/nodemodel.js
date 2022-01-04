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
}
//exports
module.exports = {notes,NoteModelClass}