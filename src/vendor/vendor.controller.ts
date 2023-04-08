import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { BaseController } from "../base/base.controller";
import { Vendor } from "./entites/vendor.entity";
import { VendorsService } from "./vendor.service";

@Controller("vendors")
export class VendorsController extends BaseController<Vendor> {
  constructor(private readonly vendorService: VendorsService) {
    super(vendorService);
  }

  @Get("all")
  async findAll(@Res() res): Promise<any[]> {
    try {
      const results: any[] = await this.vendorService.getAllVendors();
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: "Error. Please try again later." });
    }
  }
}
