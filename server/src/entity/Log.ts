import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn, Column } from "typeorm"
import {Project} from "./Project"

@Entity()
export class Log {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @ManyToOne(() => Project, (project) => project.id, {
        cascade: true,
    })
    @JoinColumn({ name: 'projectId' })
    project: Project
    @Column()
    projectId: number
}