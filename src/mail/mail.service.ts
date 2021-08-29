import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { SendMailDto } from './dto/send-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  create(createMailDto: CreateMailDto) {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number, updateMailDto: UpdateMailDto) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }

  sendEmail(sendMailDto: SendMailDto) {
    this.mailerService.sendMail({
      to: sendMailDto.email,
      from: '"' + sendMailDto.from_name + '" <' + sendMailDto.from_email + '>', // override default from
      subject: sendMailDto.subject,
      template: './email', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: sendMailDto.name,
        message: sendMailDto.message,
      },
    });
  }
}
