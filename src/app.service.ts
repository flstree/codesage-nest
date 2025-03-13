import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): string {
    return 'Testing this application is so awesome!';
  }

  checkPalindrome(value: string): 'YES' | 'NO' {
    const reversedWord = value.split('').reverse().join('');
    if (reversedWord === value) return 'YES';
    return 'NO';
  }
}
