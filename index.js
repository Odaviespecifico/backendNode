import http from 'node:http';
import fs from 'node:fs/promises'
import express from "express"
const app = express()

app.get('/', async (req,res) =>
  res.sendFile('./index.html',{root:process.cwd()}))
app.get('/contact', async (req,res) =>
  res.sendFile('./contact-me.html',{root:process.cwd()}))
app.get('/about', async (req,res) =>
  res.sendFile('./about.html',{root:process.cwd()}))
app.get('/style.css', (req,res) => {res.sendFile('./style.css',{root:process.cwd()})})

// For the 404 error
app.use((req,res,) => {
  res.status(404).sendFile('./404.html',{root:process.cwd()})
})

app.listen(3000)