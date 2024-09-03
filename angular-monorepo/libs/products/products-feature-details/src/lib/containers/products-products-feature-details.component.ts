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

  subs = new Subscription();
  dialogRef!: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.openDialog();
    console.log('reached');
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '400px';
    dialogConfig.data = { name: 'hehew' };

    this.dialogRef = this.dialog.open(this.content, dialogConfig);

    this.afterClosed();
  }

  afterClosed(): void {
    this.subs.add(
      this.dialogRef.afterClosed().subscribe((submited) => {
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
