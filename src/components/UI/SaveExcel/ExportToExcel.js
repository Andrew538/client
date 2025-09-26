import ExcelJS from 'exceljs';
//  import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { fetchOneDelivery } from '../../http/mapApi';
import classes from './ExportToExcel.module.css'

const ExportToExcel = ({ fileName, id }) => {

  // const Export = async () => {
    
     const exportExcel = async () => {
      
     const retunData = await fetchOneDelivery(id);
     const rData = [retunData];
       // 1. Create a new workbook
       const workbook = new ExcelJS.Workbook();
       const worksheet = workbook.addWorksheet("sheet1", {
         pageSetup: { paperSize: 9, orientation: "landscape" },
       });

       // 2. Define the table headers
       worksheet.columns = [
         { header: "Оплата", key: "payment" },
         { header: "Населенный пункт", key: "city",},
        { header: "Клиент", key: "client" },                        
         { header: "Адрес", key: "address" },
         { header: "Контакты", key: "contact" },
         { header: "Комментарий", key: "comment" },
        //  { header: "Вес новых акб", key: "weightnewbatteries"},
        //  { header: "Вес Б/У акб", key: "weightusedbattery" },
         { header: "Цена Б/У", key: "priceofusedbattery"},

       ];

      
       rData.map((item) => {
       
         {
           item.directionsredy.map((d) => {
             d.citydirectionsredy.map((c) => {
               worksheet.addRow({
                 city: c.city.city,
               });
               {
                 c.delivery.map((d) => {
                   worksheet.addRow({
                     client: d.client,
                     address: d.address,
                     contact: d.contact,
                     priceofusedbattery: d.priceofusedbattery,
                     comment: d.comment,
                    //  weightnewbatteries: d.weightnewbatteries,
                    //  weightusedbattery: d.weightusedbattery,
                   });
                 });
               }
             });
           });
         } 
       });
       // await autoFitAllColumns(worksheet)
       // 4. Style the header
       worksheet.getRow().eachCell((cell) => {
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
    <button className={classes.button__export} onClick={exportExcel}>Скачать карту доставки: {fileName}</button>
  );
};

export default ExportToExcel;