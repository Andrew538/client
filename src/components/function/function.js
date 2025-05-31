import { updateMovingToDefectWarehouse, updateNumberReturnDocument, updatePlantDocumentNumber, updateRecord, updateReleaseDate } from "../http/guaranteeAPI";

export default function fullUdate(id, numberReturnDocument,  plantDocumentNumber, movingToDefectWarehouse, releaseDate, result, statusExam, addRec) {
      function resultUpdate() {
        if (result === "") {
          const result = addRec.result;
          updateRecord(id, result, statusExam);
        } else if (result.length) {
          updateRecord(id, result, statusExam);
        }
      }
      resultUpdate();
      function numberReturnDocumentUdate() {
        if (numberReturnDocument === "") {
          const numberReturnDocument = addRec.numberReturnDocument;
          updateNumberReturnDocument(id, numberReturnDocument, statusExam);
        } else {
          updateNumberReturnDocument(id, numberReturnDocument, statusExam);
        }
      }
      numberReturnDocumentUdate();
      function plantDocumentNumberUpdate() {
        if (plantDocumentNumber === "") {
          const plantDocumentNumber = addRec.plantDocumentNumbert;
          updatePlantDocumentNumber(id, plantDocumentNumber, statusExam);
        } else {
          updatePlantDocumentNumber(id, plantDocumentNumber, statusExam);
        }
      }
      plantDocumentNumberUpdate();

      function movingToDefectWarehouseUpdate() {
        if (movingToDefectWarehouse === "") {
          const movingToDefectWarehouse = addRec.movingToDefectWarehouse;
          updateMovingToDefectWarehouse(
            id,
            movingToDefectWarehouse,
            statusExam
          );
        } else {
          updateMovingToDefectWarehouse(
            id,
            movingToDefectWarehouse,
            statusExam
          );
        }
      }
      movingToDefectWarehouseUpdate();
      function ReleaseDateUpdate() {
        if (releaseDate === "") {
          const releaseDate = addRec.releaseDate;
          updateReleaseDate(id, releaseDate, statusExam);
        } else {
          updateReleaseDate(id, releaseDate, statusExam);
        }
      }
      ReleaseDateUpdate();
    }
           