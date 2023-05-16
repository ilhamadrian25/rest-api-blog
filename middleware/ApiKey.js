
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';

dotenv.config({path: "../middleware/.env"}); // Load .env file from root folder

// Generate API Key
const generateApiKey = (length = 32) => {
  const apiKey = new Array(length)
    .fill(null)
    .map(() => Math.round(Math.random() * 36).toString(36))
    .join('');
  return apiKey;
};

// Hash API Key
const hashApiKey = async (apiKey) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(apiKey, salt);
  return hash;
};

// Check if API Key exists in .env file
if (!process.env.API_KEY) {
  // Generate new API Key
  const apiKey = generateApiKey();
  const hashedApiKey = await hashApiKey(apiKey);

  // Save API Key to .env file
  fs.writeFileSync('./middleware/.env', `API_KEY=${hashedApiKey}`);

  console.log(`New API Key: ${apiKey}`);
}

// Initialize Express app
const app = express();

// Middleware to check API Key
export const checkApiKey = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API Key is required' });
  }

  const isValidApiKey = await bcrypt.compare(apiKey, process.env.API_KEY);

  if (!isValidApiKey) {
    return res.status(401).json({ message: 'Invalid API Key' });
  }

  next();
};