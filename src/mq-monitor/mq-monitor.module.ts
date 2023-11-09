import { Module } from '@nestjs/common';
import { MqMonitorController } from './mq-monitor.controller';
import { MqMonitorService } from './mq-monitor.service';

@Module({
  controllers: [MqMonitorController],
  providers: [MqMonitorService],
})
export class MqMonitorModule {}
