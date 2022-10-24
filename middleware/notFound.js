const notFound = (req, res) => {
    res.status(404).json({errorMessage: 'Desired resource not found'});
}

module.exports = notFound;