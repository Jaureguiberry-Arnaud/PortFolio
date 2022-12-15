import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm"
import {Project} from "./Project"
import * as bcrypt from "bcrypt"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    pseudo: string

    @Column()
    password: string

    @Column({ unique: true })
    role: string

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @OneToMany(() => Project, (project) => project.user, {
        cascade: true,
    })
    project: Project[]
   
    // Function to hash password
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }
    // Function to compare unhashedPassword and hashed password
    checkIfUnhashedPasswordIsValid(unhashedPassword: string) {
        return bcrypt.compare(unhashedPassword, this.password)
    }
}

