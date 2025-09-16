function driveFilesDownloader() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var fileIds = sheet.getRange("A1:A100").getValues(); // Update range here
  var folder = DriveApp.getFolderById("YOUR_GG_DRIVE_FOLDER_ID"); // Your Folder ID here
  var prefix = "YOUR_NEW_PREFIX_FILE_"; // Leave it blank if you want to use original file name

  fileIds.forEach(function(row, index) {
    var fileId = row[0];
    if (!fileId) return;

    var downloadUrl = "https://drive.google.com/uc?export=download&id=" + fileId;
    try {
      var response = UrlFetchApp.fetch(downloadUrl);
      var blob = response.getBlob();

      // Use original file name if prefix is empty or null, else use prefixed name
      if (prefix && prefix.trim() !== "") {
        blob.setName(prefix + (index + 1));
      } else {
        var originalFile = DriveApp.getFileById(fileId);
        blob.setName(originalFile.getName());
      }

      folder.createFile(blob);
    } catch(e) {
      Logger.log('Error download file with fileId: ' + fileId + ' - ' + e.toString());
    }
  });
}
