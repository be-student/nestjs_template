import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from './entities';
import { SampleMany } from './entities/sampleMany.entity';
import { SampleOne } from './entities/sampleOne.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample) private sampleRepository: Repository<Sample>,
    @InjectRepository(SampleOne) private oneRepository: Repository<SampleOne>,
    @InjectRepository(SampleMany)
    private manyRepository: Repository<SampleMany>,
  ) {}

  async create() {
    const sampleUser = new Sample();
    sampleUser.firstName = 'sample';
    sampleUser.lastName = 'user';
    const sampleOne = new SampleOne();
    sampleOne.firstName = 'test';
    sampleOne.lastName = 'asdf';
    sampleUser.one = sampleOne;

    const sampleMany = new SampleMany();
    sampleMany.firstName = 'many';
    sampleMany.lastName = 'help';
    sampleMany.sample = sampleUser;
    await this.oneRepository.save(sampleOne);
    await this.sampleRepository.save(sampleUser);
    await this.manyRepository.save(sampleMany);
    return 'This action adds a new sample';
  }

  async findAll() {
    const sampleUsers = await this.sampleRepository.find();
    return JSON.stringify(sampleUsers);
  }

  async findOne(id: number) {
    // const sampleUser = await this.sampleRepository.findOne({
    //   where: { id: id },
    //   relations: {
    //     one: true,
    //   },
    // });

    // //inverse side
    // const sampleOne = await this.oneRepository
    //   .createQueryBuilder('sampleOne')
    //   .where('sampleOne.id = :id', { id: id })
    //   .leftJoinAndSelect('sampleOne.sample', 'one')
    //   .getMany();
    // console.log(sampleOne);
    // const sampleUser = await this.sampleRepository
    //   .createQueryBuilder('sample')
    //   .where('sample.id = :id', { id })
    //   .leftJoinAndSelect('sample.one', 'id')
    //   .getManyAndCount();

    // //many
    // const sampleUser = await this.sampleRepository.findOne({
    //   where: { id: id },
    //   relations: {
    //     many: true,
    //   },
    // });
    // const sampleUser = await this.sampleRepository
    //   .createQueryBuilder('sample')
    //   .where('sample.id = :id', { id })
    //   .leftJoinAndSelect('sample.many', 'id')
    //   .getMany();
    // const sampleUser = await this.manyRepository
    //   .createQueryBuilder('many')
    //   .leftJoinAndSelect('many.sample', 'id')
    //   .getMany();

    return sampleUser;
  }

  async remove(id: number) {
    await this.sampleRepository.delete({ id: id });
    return `This action removes a #${id} sample`;
  }
}
