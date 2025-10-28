import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const apiKey = process.env.API_KEY; // Ambil API key dari Environment Variable
    
    const response = await fetch('https://api.example.com/data', {
      headers: {
        'Authorization': Bearer ${apiKey}
      }
    });
    
    const data = await response.json();
    
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
