import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class Teacher implements CanActivate {
  constructor( private  prisma :PrismaService){}
  canActivate = async( context: ExecutionContext): Promise<boolean> => {
    const { user } = context.switchToHttp().getRequest();
   console.log('role',user)
    const user_db = await this.prisma.user.findUnique({
      where: {
          email: user.email
      }
    })
    if( user.role === user_db.role && user_db.role === 'teacher'){
      return  true
    }else{
      return false
    }
    
  }
}