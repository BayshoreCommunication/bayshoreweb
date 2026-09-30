const fs = require('fs');
const http = require('http');

http.get('http://localhost:3000/bayshore-solutions', res => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    // Find where Tasnova is in the HTML
    const tasnovaIndices = [];
    let pos = 0;
    while ((pos = html.indexOf('Tasnova Rashnath', pos)) !== -1) {
      tasnovaIndices.push(pos);
      pos += 16;
    }
    console.log('Tasnova found at indices:', tasnovaIndices);
    
    // Check what is immediately after the first Tasnova
    if (tasnovaIndices.length > 0) {
      const idx = tasnovaIndices[0];
      console.log('After first Tasnova (500 chars):');
      console.log(html.substring(idx + 50, idx + 500));
    }
  });
});
