const fs = require('fs').promises;
const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

async function processFile(inputFile, outputFile) {
    try {
        logger.info(`Attempting to read file: ${inputFile}`);
        const data = await fs.readFile(inputFile, 'utf-8');
        const timestamp = new Date().toISOString();
        const updatedContent = `${data}\nAppended Timestamp: ${timestamp}`;
        logger.info(`Attempting to write to file: ${outputFile}`);
        await fs.writeFile(outputFile, updatedContent);
        logger.info(`Successfully wrote to file: ${outputFile}`);
    } catch (error) {
        logger.error(`Error during file operation: ${error.message}`);
    }
}

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');
processFile(inputFilePath, outputFilePath);
