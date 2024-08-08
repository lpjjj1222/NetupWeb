/**
 * @typedef {Object} ApiResponse
 * @property {boolean} status - indicating if the operation is successful
 * @property {string} message - showing the error details returned from amplify if the operation failed
 * @property {any} data - being null for create/update/delete and showing the result returned for read
 */
export class ApiResponse {
    status: boolean;
    message: string;
    data: any;

    /**
     * Creates an instance of ApiResponse.
     * @param {boolean} status - Indicates if the operation is successful
     * @param {string} message - Shows the error details returned from amplify if the operation failed
     * @param {any} data - Data being null for create/update/delete and showing the result returned for read
     */
    constructor(status: boolean, message: string, data: any) {
        this.status = status;
        this.message = message;
        this.data = data;
        console.log(this.message);
    }

    /**
     * Indicates if the operation is successful
     * @returns {boolean}
     */
    is_ok(): boolean {
        return this.status;
    }

    /**
     * Indicates if the operation failed
     * @returns {boolean}
     */
    is_err(): boolean {
        return !this.status;
    }
}
