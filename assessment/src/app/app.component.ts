import { Component, OnInit } from '@angular/core';
import { MyTabs } from 'src/interfaces/my-tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public tabs: MyTabs[] = [{"category":"Dashboard","subCategory":[{"label":"SOP","role":"SOP_A_VIEW"},{"label":"SOP-V2","role":"SOP_A_V2"},{"label":"QSOP","role":"QSOP_V_VIEW"}]},{"category":"User","subCategory":[{"label":"Add User","role":"USR_M_ADD"},{"label":"Edit User","role":"USR_M_ADD"},{"label":"Delete User","role":"USR_D"}]},{"category":"Master","subCategory":[{"label":"Shift Master","role":"SHIFT_M_ADD"},{"label":"Machine","role":"MACHN_M_VIEW"},{"label":"Component Master","role":"COMP_M_VIEW"}]},{"category":"Test","subCategory":[{"label":"Test","role":"TEST_M_ADD"}]}];
  public role = '';

  ngOnInit() {
    console.log('sdfsdf')
    this.role = '';
  }

  public addRole(data: MyTabs) {
    this.tabs.filter(tab => {
      if(data.category === tab.category) {
        tab.subCategory.push({
          label: this.role,
          role:  this.role.toUpperCase().replace(" ","_"),
        })
      }
    })
  }

  public clearRole(index: number, data: MyTabs) {
    this.tabs.forEach( (tab) => {
      if(tab.category === data.category) {        
        tab.subCategory.splice(index,1);
      } 
    });
  }

  public clearInput() {
    this.role = '';
  }
}

