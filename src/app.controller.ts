import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // dependency injection
  constructor(private readonly appService: AppService) {}

  @Get(':value')
  getCheckPalindrome(@Param('value') value: string) {
    // body params
    //path params
    // query params
    //Return a yes or no if the passed in value is a palindrome
    console.log(value);
    const returnedValue = this.appService.checkPalindrome(value);

    return { answer: returnedValue };
  }
}
