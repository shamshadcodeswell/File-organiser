# File Organizer CLI

A Node.js command-line tool that sorts files in a folder into 
categorized subfolders (images, documents, videos, audio) based 
on their extension.

## Usage
\`\`\`bash
node app.js 
\`\`\`

## Example
\`\`\`bash
node app.js ./Downloads
\`\`\`
Before: Downloads/ has photo.jpg, resume.pdf, song.mp3 mixed together
After:  Downloads/images/photo.jpg, documents/resume.pdf, audio/song.mp3

## How it works
- Reads the target folder with the async fs API
- Matches each file's extension against a category map
- Creates category folders as needed and moves files in
- It leaves any subfolder untouched

## Built with
Node.js (fs, path, process.argv) — no external dependencies