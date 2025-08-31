// import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { fetchOneDelivery } from '../../http/mapApi';
 import * as ExcelJS from 'exceljs';

const ExportToExcel = ({ fileName, id }) => {

  // const Export = async () => {
    
     const exportExcel = async () => {
      
     const retunData = await fetchOneDelivery(id);
     const rData = [retunData];
       // 1. Create a new workbook
       const workbook = new ExcelJS.Workbook();
       const worksheet = workbook.addWorksheet("sheet1", {
         pageSetup: { paperSize: 9, orientation: " landscape" },
       });

       // 2. Define the table headers
       worksheet.columns = [
         { header: "Оплата", key: "payment" },
         { header: "Населенный пункт", key: "name",
            
         },
          { header: "Клиент", key: "client" },
        
         //   { header: 'Name', key: 'name', width: 30 },
       
         { header: "Адрес", key: "address" },
         { header: "Контакты", key: "contact" },
         { header: "Комментарий", key: "comment" },
       ];

      
       rData.map((item) => {
         worksheet.addRow({
           // name: `Направление ${item.region}`,
           // email: item.email,
           // joinDate: item.joinDate,
         });
         {
           item.directionsredy.map((d) => {
             d.citydirectionsredy.map((c) => {
               worksheet.addRow({
                 name: c.city.city,
               });
               {
                 c.delivery.map((d) => {
                   worksheet.addRow({
                     client: d.client,
                     address: d.address,
                     contact: d.contact,
                     comment: d.comment,
                   });
                 });
               }
             });
           });
         }
       });
       // await autoFitAllColumns(worksheet)
       // 4. Style the header
       worksheet.getRow(4).eachCell((cell) => {
         cell.font = { bold: true };
         cell.alignment = { horizontal: "center", wrapText: true };
       });

       //  Автоподбор ширины столбцов
       worksheet.columns.forEach((column, index) => {
         let maxLength = 0;
         worksheet.eachRow({ includeEmpty: true }, (row) => {
           const cellValue = row.getCell(index + 1).value;
           const stringValue = cellValue ? cellValue.toString() : "";
           maxLength = Math.max(maxLength, stringValue.length);
         });
         column.width = Math.min(maxLength + 2, 50); // Максимальная ширина 50
       });

       // await autoFitAllColumns(worksheet)
       // autoWidth()
       // 5. Save the workbook as an Excel file
       const buffer = await workbook.xlsx.writeBuffer();
       const blob = new Blob([buffer], {
         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
       });

       saveAs(blob, `${fileName}.xlsx`);
     };
//  exportExcel()

      
    
  // }
     


  return (
    <button onClick={exportExcel}>Скачать карту доставки {fileName}</button>
  );
};

export default ExportToExcel;