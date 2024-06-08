import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "src/entites/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: Repository<UserEntity>){

    }

    async finAll(){
        const user = await this.userRepository.find();
        return user;
    }

    async finAOne(id: string){
        const user = await this.userRepository.findOne({where : {id}});
        return user;
    }

    create(payload : any ){
        const user = this.userRepository.create()
        user.firstname = payload.firstname;
        user.lastname = payload.lastname;
        user.email = payload.email;
        user.city = payload.city;
        user.description = payload.description;
        user.password = payload.password;

        return this.userRepository.save(user);
    }
    async update(id: string, payload : any ){
        const user = await this.userRepository.findOne({where : {id}})
        user.firstname = payload.firstname;
        user.lastname = payload.lastname;
        user.email = payload.email;
        user.city = payload.city;
        user.description = payload.description;
        user.password = payload.password;

        return this.userRepository.save(user)
        
    }
    async delete(id : string){
        const user = await this.userRepository.findOne({where : {id}})

        return this.userRepository.delete(id)
        
    }
}