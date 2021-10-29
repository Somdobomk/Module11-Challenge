const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const apiRouter = require('./routes/apiRouter');
const htmlRouter = require('./routes/htmlRouter');

app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, () => {
	console.log(`App is listening on port ${PORT}`);
});
