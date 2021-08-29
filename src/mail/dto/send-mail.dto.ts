export class SendMailDto {
    readonly name: string;
    readonly email: string;
    readonly from_name: string;
    readonly from_email: string;
    readonly subject: string;
    readonly message: string;
}
