declare namespace Authentication {
    declare interface VerifyPhoneRequest {
        phone_number: string;
    }
    declare interface VerifyPhoneResponse {
        msg: string;
        user_exists: boolean;
        type: string;
        code: string;
    }
} 