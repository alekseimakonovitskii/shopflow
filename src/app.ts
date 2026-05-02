import express from 'express';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
   res.json({
        status: 'ok', 
        service: 'shopflow', 
        timestamp: new Date().toISOString(),
    })
})

export default app;
