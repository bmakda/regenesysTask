import { AuthGuard } from '@nestjs/passport';
import {
    Get,
    Post,
    Body,
    Controller,
    UsePipes,
    Delete,
    Param,
    Put,
    UseGuards,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.interface';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll() {
        const data = await this.usersService.findAll();

        let status = HttpStatus.OK;
        if (!data) status = HttpStatus.NOT_FOUND;
        return { status, data };
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async findById(@Param('id') id) {
        const data = await this.usersService.findOne(id);

        let status = HttpStatus.OK;
        if (!data) status = HttpStatus.NOT_FOUND;
        return { status, data };
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    // @UsePipes(new ValidationPipe())
    async create(@Body() createUserDto: CreateUserDto) {
        const duplicateUser = await this.usersService.findOne(createUserDto);
        if (!duplicateUser) {
            const data = await this.usersService.create(createUserDto);
            return { status: HttpStatus.CREATED, data };
        } else {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'Username already taken',
            }, HttpStatus.CONFLICT);
        }
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async deleteItem(@Param('id') id) {
        const data = await this.usersService.delete(id);

        let status = HttpStatus.OK;
        if (!data) status = HttpStatus.NOT_FOUND;
        return { status, data };
    }

    // @Put(':id')
    // async updateItem(@Param('id') id, @Body() createItemDto: CreateItemDto) {
    //     this.usersService.updateItem(id, createItemDto);
    // }
}
