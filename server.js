const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(
  '/api',
  createProxyMiddleware({
    target:
      'https://wcz3qr33kmjvzotdqt65efniv40kokon.lambda-url.us-east-2.on.aws',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
