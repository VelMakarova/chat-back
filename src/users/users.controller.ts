import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
  @Get('/contacts')
  getUserContacts(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}

@Controller('/')
export class RootController {
  constructor() {}
  @Get('/')
  handleRoot() {
    return 'index';
  }
}
