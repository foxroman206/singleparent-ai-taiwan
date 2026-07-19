import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: '系統健康檢查（含資料庫連線檢查）' })
  async check() {
    try {
      // Real query against the database — not a hardcoded response.
      // If the DB is unreachable, this will throw and we report unhealthy.
      await this.prisma.$queryRaw`SELECT 1`;
    } catch (err) {
      throw new ServiceUnavailableException({
        status: 'error',
        database: 'unreachable',
        message: err instanceof Error ? err.message : 'unknown error',
      });
    }

    return {
      status: 'ok',
      database: 'connected',
      service: 'singleparent-ai-taiwan-backend',
      timestamp: new Date().toISOString(),
    };
  }
}
