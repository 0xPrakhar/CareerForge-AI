class ApiResponse {

    // We only pass message, data and statusCode.
    constructor(message, data = null, statusCode) {

        // Save the message.
        this.message = message;

        // Save the response data.
        this.data = data;

        // Save the HTTP status code.
        this.statusCode = statusCode;

        // If statusCode is less than 400,
        // the request was successful.
        // Otherwise, it failed.
        this.success = statusCode < 400;
    }
}

export { ApiResponse };
// also we can export like this because we are using named export in near future if i add more classes so can export it very easy 