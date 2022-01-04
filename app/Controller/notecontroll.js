//imports
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
}
//exports
module.exports = new NotesControllerClass();