//import
const noteModel = require('../Model/notemodel')
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
            userid: req.data.id,
            
         })
         let saveData = noteModelInstant.createNoteModel(newUser);
         return saveData;
     }
       async getNoteService(req,res){
          var getnote  ={
            userid:req.data.id

           }
         var foundnotes = await noteModelInstant.findNotes(getnote)
         if(foundnotes){
             return foundnotes;
         }
     }
}
//exports
module.exports = new NoteServiceClass();