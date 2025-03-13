import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(payload: any) {
    const user = await this.userRepository.insert(payload);
    return user;
  }

  async updateUser(id: string, payload: any) {
    const updateUser = await this.userRepository.update({ id }, { ...payload });

    return updateUser;
  }

  async deleteUser(id: string) {
    const deleteUser = await this.userRepository.delete({ id });
    return deleteUser;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
