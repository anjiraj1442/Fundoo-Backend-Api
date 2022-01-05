//imports
const noteservice = require('../Service/noteservice');
const noteService = require('../Service/noteservice')
class NotesControllerClass {
     async createNote(req, res) {
         await noteService.createNoteService(req.body)
         .then((result) => {
             res.status(200).json(result)
         }).catch((err => {
            
             return res.status(400).send(err);
         }))
     }
     async getNote(req,res){
         await noteservice.getNoteService(req.body)
         .then((result) => {
            res.status(200).json(result)
        }).catch((err => {
           
            return res.status(400).send(err);
        }))
        
     }
     async deleteNotes(req,res){
         await noteservice.dltNoteService(req.body)
         .then((result)=>{
             res.status(200).json(result)
         }).catch((err =>{
             res.status(400).send(err)
         }))
     }
     async isArchiveControll(req,res){
        await noteservice.isArchiveService(req.body)
        .then((result)=>{
            res.status(200).json(result)
        }).catch((err =>{
            res.status(400).send(err)
        }))
    }
}
//exports
module.exports = new NotesControllerClass();