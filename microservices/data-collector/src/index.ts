import app from './app';

if (process.env.AWS_LAMBDA !== 'true') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Data Collector Service running on port ${PORT}`);
  });
}