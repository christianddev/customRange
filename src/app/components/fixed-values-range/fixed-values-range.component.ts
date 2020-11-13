import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FilterProductsService } from 'src/app/services/filter-products/filter-products.service';

@Component({
  selector: 'ngc-fixed-values-range',
  templateUrl: './fixed-values-range.component.html',
  styleUrls: ['./fixed-values-range.component.scss']
})
export class FixedValuesRangeComponent implements OnInit {

  values: number[] ;

  constructor(
    private filterProductsService: FilterProductsService
  ) { }

  ngOnInit(): void {
    this.getPriceValues();
  }

  getPriceValues(): void {
    this.filterProductsService.getPricesValues().pipe(
        tap(prices => this.values = prices?.values ?? []),
        catchError((err) => of(err))
      ).subscribe();
  }

}
