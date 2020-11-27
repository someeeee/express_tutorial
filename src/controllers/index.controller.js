const { rawListeners } = require("../app");

const index = (req, res, next) => res.json({
    message: 'Hello Dinos!'
})

export {
    index
}