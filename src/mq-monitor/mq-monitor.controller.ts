import { Controller, Get, Query } from '@nestjs/common';
import { MqMonitorService } from './mq-monitor.service';
import { Queue } from 'bullmq';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { config } from '../config/config.dev';
import { BullBoardInstance, InjectBullBoard } from '@bull-board/nestjs';

@Controller('mq-monitor')
export class MqMonitorController {
  constructor(
    @InjectBullBoard() private readonly boardInstance: BullBoardInstance,
    private readonly mqMonitorService: MqMonitorService,
  ) {}

  @Get()
  async getFeature(@Query('queuename') queuename: string) {
    // You can do anything from here with the boardInstance for example:
    // const featureQueue = this.boardInstance.addQueue()
    // this.boardInstance.replaceQueues();
    try {
      console.log(queuename);
      const q = new Queue(queuename, { connection: config.redis });
      this.boardInstance.addQueue(new BullMQAdapter(q));
    } catch (e) {
      console.log(e);
    }
    return 'OK';
  }
}
