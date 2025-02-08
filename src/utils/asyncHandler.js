// const asyncHandler = (fn) => async() => {
//     try {
//         await fn(requestAnimationFrame, res, next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export default asyncHandler;