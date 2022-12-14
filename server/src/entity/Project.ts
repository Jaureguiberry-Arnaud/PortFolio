import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, JoinColumn } from "typeorm"
import {Log} from "./Log"
import {User} from "./User"

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    language: string

    @Column({
        type: 'int',
        nullable: true, 
    })
    nbWrittenLines: number

    @Column()
    git_url: string
    
    @Column()
    web_url: string
    
    @Column()
    description: string

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @OneToMany(() => Log, (log) => log.project)
    log: Log[]

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'userId' })
    user: User
    @Column()
    userId: number
}
