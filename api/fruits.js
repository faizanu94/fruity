import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws/'
    );

    if (!response.ok) {
      throw new Error(
        `External API request failed with status ${response.status}`
      );
    }

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    res.status(200).json(data);
  } catch (error) {
    console.error('Error in serverless function:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
