import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient{
    async enableShutdownhooks(app: INestApplication){
        this.son ('beforeExit', async( ) =>{
            await app.close ();
        });
            
        }
    }

