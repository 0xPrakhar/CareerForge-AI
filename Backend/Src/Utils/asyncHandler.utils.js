// asyncHandler is a Higher-Order Function
// It accepts another function (usually your controller)
const asyncHandler = (reqhandler) => {

    // It returns a new function.
    // Express will call this function whenever a request comes in.
    return (req, res, next) => {

        // reqhandler is actually your controller.
        //
        // Example:
        //
        // const loginUser = async (req, res) => {
        //     res.send("Login Successful");
        // }
        //
        // router.post("/login", asyncHandler(loginUser))
        //
        // Here:
        // reqhandler === loginUser
        //
        // So this line:
        // reqhandler(req, res, next)
        //
        // becomes:
        // loginUser(req, res, next)
        //
        // This is why your controller gets executed.

        Promise.resolve(

            // Execute the controller.
            // Since it is an async function, it returns a Promise.
            reqhandler(req, res, next)

        )

        // If the Promise is rejected (an error happens),
        // catch the error.
        .catch((error) =>

            // Give the error to Express.
            // Express will send it to your error-handling middleware.
            next(error)

        );
    };
};

export { asyncHandler };