import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterDTO{
	@IsString()
	name: string

	@IsString()
	@IsNotEmpty()
	email: string 
	@IsString()
	address: string

	@IsString()
	password: string
	@IsString()
	role: string
	@IsString()
	subject: object
	
	class: number

	classId: number
}
export class LoginDTO{
	@IsString()
	@IsNotEmpty()
	email:string

	@IsString()
	password: string
}
export class Guard{
	@IsString()
	@IsNotEmpty()
	email:string

	@IsString()
	role:string
}
