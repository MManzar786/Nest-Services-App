import {
  BadGatewayException,
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { BaseEntity } from './base.entitiy';
import { IBaseService } from './IBase.service';

export class BaseController<T extends BaseEntity> {
  constructor(private readonly _IBaseService: IBaseService<T>) {}

  @Get()
  async findAll(@Res() res): Promise<T[]> {
    try {
      console.log('Find ALL Logs');

      const results: T[] = await this._IBaseService.getAll();
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }

  @Get(':id')
  async findById(@Res() res, @Param('id') id: number): Promise<T> {
    try {
      const result: T = await this._IBaseService.get(id);
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: result });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please check the ID, and try again later.' });
    }
  }

  @Post()
  async create(@Res() res, @Body() entity: T): Promise<number> {
    try {
      const result = await this._IBaseService.create(entity);
      return res
        .status(HttpStatus.CREATED)
        .json({ statusCode: HttpStatus.OK, data: result });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error. Please check the BODY request, and try again later.',
        error: error.message,
      });
    }
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id: number) {
    try {
      const result = this._IBaseService.delete(id);
      return res
        .status(HttpStatus.CREATED)
        .json({ statusCode: HttpStatus.OK, data: result });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  @Put()
  async update(@Res() res, @Body() entity: T): Promise<T> {
    try {
      const result = this._IBaseService.update(entity);
      return res
        .status(HttpStatus.CREATED)
        .json({ statusCode: HttpStatus.OK, data: result });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
