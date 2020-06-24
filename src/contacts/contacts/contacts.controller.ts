import { Controller, Get, Param, Post, Body, Patch, Delete, Res, HttpStatus } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from '../contact.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('contacts')
export class ContactsController {
    
    constructor(
        private service: ContactsService
    ) {}

    @Get(':cod')
    async findContact(@Param('cod') contactCode: number): Promise<Contact> {
        return this.service.findContact(contactCode);
    }

    @Get()
    async findAll(): Promise<Contact[]> {
        return this.service.findAllContacts();
    }

    @Post()
    async createContact(@Body() contactData: Contact): Promise<Contact> {
        return this.service.insertContact(contactData);
    }

    @Patch(':cod')
    async updateContact(@Param('cod') contactCode: number ,@Body() contactData: Contact): Promise<UpdateResult> {
        return this.service.updateContact(contactCode, contactData);
    }

    @Delete(':cod')
    async deleteContact(@Param('cod') contactCode: number): Promise<DeleteResult> {
        return this.service.deleteContact(contactCode);
    }

}
