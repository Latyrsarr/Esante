import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UtilisateursModule } from '../utilisateurs/utilisateurs.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    forwardRef(() => UtilisateursModule),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // utilisez une variable d'environnement pour le secret
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
