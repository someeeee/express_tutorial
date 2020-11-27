var debug = require('debug')('express-tutorial:server');
require('dotenv').config

import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}
return res.status(err.status || 500)
  .json(res.locals.error)
})

// bin/www를 그대로 사용하기 위해 예외적으로 commonJs 문법 유지
module.exports = app
