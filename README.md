## Overview
This Google Apps Script project lets you download files from Google Drive using a list of file IDs stored in a Google Sheet. The files are fetched and saved to a specified Google Drive folder with an optional custom prefix for the filenames. If no prefix is provided, the original file names are preserved.

## Features
- Reads file IDs from a specified range in a Google Sheet.
- Downloads files directly via Google Drive URL fetch.
- Saves downloaded files into a specified Drive folder.
- Supports optional prefix naming. Uses original file names if no prefix specified.
- Logs errors for files that fail to download.

## Usage
1. Prepare a Google Sheet with file IDs listed in column A (rows 1 to 100 or you can also update the range).
2. Open Apps Script editor and replace `"YOUR_GG_DRIVE_FOLDER_ID"` with your destination folder ID.
3. Set a prefix for the file names or leave empty to keep original names.
4. Run the `downloadFilesWithPrefixName` function.
5. Files will be downloaded and saved with the chosen naming convention.