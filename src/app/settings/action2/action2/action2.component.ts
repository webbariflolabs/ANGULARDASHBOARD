import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Edit4Component } from './edit4/edit4/edit4.component';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-action2',
  templateUrl: './action2.component.html',
  styleUrls: ['./action2.component.css']
})
export class Action2Component {
 
  opened: boolean = false;
  accountId: string[] = [];
  accountName: string[] = [];


 constructor(public dialog: MatDialog){}

  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    
  };

  
  openDialog6(): void {
    const dialogRef = this.dialog.open(Edit4Component, {
      width: '480px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });


}
}