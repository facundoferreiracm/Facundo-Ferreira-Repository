// Google Apps Script: guarda cada registro como una fila en la hoja de cálculo.
// 1) Creá una Google Sheet con encabezados en la fila 1:
//    fecha | nombre | celular | perfil | emprendimiento | origen
// 2) Extensiones > Apps Script, pegá este código.
// 3) Implementar > Nueva implementación > Aplicación web
//    (Ejecutar como: yo / Quién tiene acceso: cualquier usuario) y copiá la URL en ENDPOINT de index.html.
function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  SpreadsheetApp.getActiveSheet().appendRow([d.fecha, d.nombre, d.celular, d.perfil, d.emprendimiento, d.origen]);
  return ContentService.createTextOutput('ok');
}
