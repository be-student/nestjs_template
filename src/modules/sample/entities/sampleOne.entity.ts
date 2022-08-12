import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sample } from './sample.entity';

@Entity()
export class SampleOne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Sample, (sample) => sample.one)
  sample: Sample;
}
