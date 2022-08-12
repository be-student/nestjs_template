import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sample } from './sample.entity';

@Entity()
export class SampleMany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Sample, (sample) => sample.many)
  sample: Sample;
}
