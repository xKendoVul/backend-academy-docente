import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocentesModule } from './docentes/docentes.module';
import { DatabaseModule } from './database/database.module';
import { RelacionesModule } from './relaciones/relaciones.module';

@Module({
  imports: [
    DatabaseModule,
    RelacionesModule,
    DocentesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }