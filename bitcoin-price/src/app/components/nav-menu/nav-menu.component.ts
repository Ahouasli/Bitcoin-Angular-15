import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router:Router){
    
  }
  collapse() {
    this.isExpanded = false;
  }
  Navigation(){
    this.router.navigateByUrl('/');
  }
 


  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  // openDialog() {
  //   console.log(this.dialog)
  //   debugger
  //   const dialogRef = this.dialog.open(InstitutionPopupComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
   
  // }
  
}
