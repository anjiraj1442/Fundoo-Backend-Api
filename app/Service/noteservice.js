//import
const noteModel = require('../Model/nodemodel')
const Notes = noteModel.notes
const noteModelInstant = new noteModel.NoteModelClass();
class NoteServiceClass {
     async createNoteService(req, res) {
         let newUser = new Notes({
            title: req.title,
            description: req.description,
            isArchieved: req.isArchieved,
            isDeleted: req.isDeleted,
            color: req.color,
            userid:req.data.id,
            
         })
         let saveData = noteModelInstant.createNoteModel(newUser);
         return saveData;
     }
}
//exports
module.exports = new NoteServiceClass();