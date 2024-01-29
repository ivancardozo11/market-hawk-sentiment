import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Sentiment Analysis Service running on port ${PORT}`);
});
