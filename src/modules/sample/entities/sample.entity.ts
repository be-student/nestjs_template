import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SampleMany } from './sampleMany.entity';
import { SampleOne } from './sampleOne.entity';
@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => SampleOne)
  @JoinColumn()
  one: SampleOne;

  @OneToMany(() => SampleMany, (sampleMany) => sampleMany.sample)
  many: SampleMany[];

  
}
