//imports
const noteservice = require("../Service/noteservice");
const noteService = require("../Service/noteservice");
const logger = require("../Configdb/logger");
class NotesControllerClass {
  async createNote(req, res) {
    await noteService
      .createNoteService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in add notes");
        return res.status(400).send(err);
      });
  }
  async getNote(req, res) {
    await noteservice
      .getNoteService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in get notes");
        return res.status(400).send(err);
      });
  }
  async deleteNotes(req, res) {
    await noteservice
      .dltNoteService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in delete notes");
        res.status(400).send(err);
      });
  }
  async isArchiveControll(req, res) {
    await noteservice
      .isArchiveService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in getingisArchieved notes");
        res.status(400).send(err);
      });
  }
  async isDeletedControll(req, res) {
    await noteservice
      .isDeletedService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in getingisDeleted notes");
        res.status(400).send(err);
      });
  }
  async upadteNotes(req, res) {
    await noteservice
      .updateNoteService(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        logger.error("Error in update notes");
        return res.status(400).send(err);
      });
  }
}
//exports
module.exports = new NotesControllerClass();
