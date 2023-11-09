import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { MqMonitorModule } from './mq-monitor/mq-monitor.module';
import { config } from './config/config.dev';
import { BullBoardModule } from '@bull-board/nestjs';

@Module({
  imports: [
    MqMonitorModule,
    BullModule.forRoot({ connection: config.redis }),
    BullBoardModule.forRoot(config.bullBoard),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
