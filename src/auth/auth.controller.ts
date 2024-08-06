import {
  Controller,
  Get,
  Post,
  Headers,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { getUrlForUserDetailsById, getUserIdFromToken } from '../util';
import { map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { FinishRegisterDto } from './dto/finish-register.dto';

const throwServerError = (id: string) => {
  throw new HttpException(
    `Something went wrong during login/register process: id is ${id}`,
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
};

interface DataI {
  email: string;
  nickname: string;
  user_id: string;
  logins_count: number;
}

@Controller('/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private JWTService: JwtService,
    private HTTPService: HttpService,
  ) {}
  @Get('')
  async getUser(@Headers('authorization') authorization: string) {
    const decodedToken = this.JWTService.decode(authorization.substring(7));
    const userId = decodedToken && getUserIdFromToken(decodedToken?.sub);
    if (userId) {
      const isUserExist = await this.authService.checkUserExisting(userId);
      if (isUserExist) {
        return await this.authService.getUserWithLoginIncrements(userId);
      } else {
        const metadataResponse = this.HTTPService.get(
          getUrlForUserDetailsById(decodedToken?.sub),
          {
            headers: {
              Authorization: authorization,
            },
          },
        );
        metadataResponse
          .pipe(map((response: AxiosResponse) => response.data))
          .subscribe({
            next: async (data: DataI) => {
              const newUserData = {
                authId: userId,
                firstName: '',
                lastName: '',
                email: data.email,
                logins: data.logins_count,
              };
              return await this.authService.addUser(newUserData);
            },
            error: () => throwServerError(userId),
          });
      }
    } else {
      throwServerError(userId!);
    }
  }
  @Post('')
  async finishRegister(
    @Headers('authorization') authorization: string,
    @Body() data: FinishRegisterDto,
  ) {
    const decodedToken = this.JWTService.decode(authorization.substring(7));
    const authId = decodedToken && getUserIdFromToken(decodedToken?.sub);
    if (authId) {
      return await this.authService.completeUserCreating(authId, {
        ...data,
      });
    }
  }
}
