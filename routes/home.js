const express = require('express');
const {homeview, generatePdf, certificate}  = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeview);
router.get('/certificate', certificate)
router.get('/download', generatePdf);

module.exports = {
    routes: router
}