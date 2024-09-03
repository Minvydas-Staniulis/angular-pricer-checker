import { ProductFacade } from '@angular-monorepo/products-data-access';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-products-products-feature-details',
  templateUrl: './products-products-feature-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsProductsFeatureDetailsComponent
  implements OnInit, OnDestroy
{
  @ViewChild('content', { static: true }) content!: TemplateRef<HTMLElement>;

  product$ = this.facade.product$;
  subs = new Subscription();
  dialogRef!: MatDialogRef<any>;

  get id(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private facade: ProductFacade
  ) {}

  ngOnInit(): void {
    this.openDialog();
    this.initData();
  }

  initData(): void {
    this.facade.fetchProductById(this.id ?? '');
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '400px';
    dialogConfig.data = {};

    this.dialogRef = this.dialog.open(this.content, dialogConfig);

    this.afterClosed();
  }

  afterClosed(): void {
    this.subs.add(
      this.dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['../..'], {
          relativeTo: this.route,
          queryParamsHandling: 'preserve',
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
