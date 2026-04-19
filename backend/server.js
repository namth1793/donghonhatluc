const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Fallback to index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n  Tiệm Sửa Đồng Hồ Minh Hoàng`);
    console.log(`  Server running at: http://localhost:${PORT}\n`);
});
