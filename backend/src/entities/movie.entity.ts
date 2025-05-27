import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  originalTitle!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  budget!: number;

  @Column("date")
  releaseDate!: Date;

  @Column()
  duration!: number;

  @Column({ nullable: true })
  imagePath?: string;
}
