export class AddNewUserDto {
  firstName: string;
  lastName: string;
  email: string;
  logins: number;
  readonly authId: string;
}
export class FinishRegisterDto {
  firstName: string;
  lastName: string;
}
