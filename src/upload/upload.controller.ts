import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = uuidv4() + extname(file.originalname);
          cb(null, fileName);
        },
      }),
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    console.log('ABC');

    try {
      const fileNames = [];
      for (const file of files) {
        const filePath = `https://nest-services-app-production.up.railway.app/uploads/${file.filename}`;
        fileNames.push(filePath);
      }
      return { fileNames };
    } catch (error) {
      return error;
    }
  }
}
