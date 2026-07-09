class ApiError extends Error {

    // This constructor runs automatically whenever we write:
    // new ApiError(...)
    constructor(

        // Default message if no message is provided
        message = "Something went wrong",

        // HTTP status code (404, 500, etc.)
        statusCode,

        // Extra error details (default is an empty array)
        error = [],

        // Optional custom stack trace
        stack = ""
    ) {

        // Call the parent (Error) constructor first.
        // This lets the Error class save the message.
        super(message);

        // Save the HTTP status code
        this.statusCode = statusCode;

        // Since this is an error, there is no data.
        this.data = null;

        // Every ApiError means the request failed.
        this.success = false;

        // Save extra error details.
        this.error = error;

        // If the user provides a custom stack,
        // use that stack.
        if (stack) {
            this.stack = stack;
        }

        // Otherwise, let JavaScript create
        // the stack trace automatically.
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;