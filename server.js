const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

const CSV_FILE = path.join(__dirname, 'records.csv');
const COUNT_FILE = path.join(__dirname, 'visitor_count.txt');

// Initialize CSV with UTF-8 BOM (\ufeff) so Microsoft Excel opens Turkish characters correctly
if (!fs.existsSync(CSV_FILE)) {
    fs.writeFileSync(CSV_FILE, '\ufeffName,Source,Timestamp\n', 'utf8');
}

// Initialize Visitor Count
if (!fs.existsSync(COUNT_FILE)) {
    fs.writeFileSync(COUNT_FILE, '0', 'utf8');
}

// Get Visitor Count
app.get('/api/visits', (req, res) => {
    fs.readFile(COUNT_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.json({ value: 0 });
        }
        res.json({ value: parseInt(data.trim() || '0', 10) });
    });
});

// Increment Visitor Count
app.post('/api/visits/up', (req, res) => {
    fs.readFile(COUNT_FILE, 'utf8', (err, data) => {
        let count = 0;
        if (!err) {
            count = parseInt(data.trim() || '0', 10);
        }
        count++;
        fs.writeFile(COUNT_FILE, count.toString(), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Failed to write visitor count:', writeErr);
                return res.status(500).json({ error: 'Failed to update count' });
            }
            res.json({ value: count });
        });
    });
});

// Submit Form Registration
app.post('/api/register', (req, res) => {
    const { name, source } = req.body;
    if (!name || !source) {
        return res.status(400).json({ error: 'Name and source are required' });
    }

    const timestamp = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    
    // Escape double quotes in CSV
    const cleanName = name.replace(/"/g, '""');
    const cleanSource = source.replace(/"/g, '""');
    
    const row = `"${cleanName}","${cleanSource}","${timestamp}"\n`;
    
    fs.appendFile(CSV_FILE, row, 'utf8', (err) => {
        if (err) {
            console.error('Failed to write to CSV:', err);
            return res.status(500).json({ error: 'Database write error' });
        }
        res.json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
