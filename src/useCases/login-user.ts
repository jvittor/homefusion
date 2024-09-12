import type { UserRepository } from '@/repositories/user-repository';

interface LoginUserRequest {
  email: string;
  password: string;
}

// eslint-disable-next-line import/prefer-default-export
export class LoginUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: LoginUserRequest): Promise<void> {
    const { email, password } = request;
    await this.userRepository.login(email, password);
  }
}
