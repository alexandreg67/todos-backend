import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('User is insert with id : ', this.id);
    }
    
    @AfterUpdate()
    logUpdate() {
        console.log('User is update with id : ', this.id);
        
    }

    @AfterRemove()
    logRemove() {
        console.log('User is remove with id : ', this.id);  
    }
    
}