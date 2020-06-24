import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Contact } from '../contact.entity';

@Injectable()
export class ContactsService {

    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ){}

    async findContact(contactCode: number): Promise<Contact> {
        return await this.contactRepository.findOne(contactCode);        
    }

    async findAllContacts(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async insertContact(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async updateContact(contactCode: number, contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contactCode, contact);
    }
    
    async deleteContact(contactCode: number): Promise<DeleteResult> {
        return await this.contactRepository.delete(contactCode);
    }

}
