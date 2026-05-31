import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory array to store contact inquiries (simple demonstration)
const contactInquiries = [];

// Contact form API route
app.post('/api/contact', (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone number are required fields.' });
  }

  const newInquiry = {
    id: Date.now(),
    name,
    phone,
    email: email || 'N/A',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  contactInquiries.push(newInquiry);
  console.log('New Contact Inquiry Received:', newInquiry);

  return res.status(201).json({ 
    success: true, 
    message: 'Inquiry received successfully.',
    data: newInquiry 
  });
});

// Serve frontend static assets in production
const frontendBuildPath = path.join(__dirname, '../dist');
app.use(express.static(frontendBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
