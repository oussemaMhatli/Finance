// Angular Import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// project import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { ChatMsgComponent } from './theme/layout/admin/nav-bar/nav-right/chat-msg/chat-msg.component';
import { ChatUserListComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/chat-user-list.component';
import { FriendComponent } from './theme/layout/admin/nav-bar/nav-right/chat-user-list/friend/friend.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SiteConfigurationsComponent } from './demo/site-configurations/site-configurations/site-configurations.component';
import { ToastrModule } from 'ngx-toastr';
import { TransactionComponent } from './demo/transaction/transaction.component';

import { UserProfileComponent } from './demo/user-profile/user-profile.component';

import { TagsComponent } from './demo/tags/tags.component';
import { DateSortPipePipe } from './pipes/date-sort-pipe.pipe';
import { TrieMontantPipe } from './pipes/trie-montant.pipe';
import { BudgetComponent } from './demo/budget/budget.component';
import { PlanificationDepensesComponent } from './planification-depenses/planification-depenses.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GuestComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavSearchComponent,
    ChatMsgComponent,
    ChatUserListComponent,
    FriendComponent,
    NavContentComponent,
    NavItemComponent,
    NavCollapseComponent,
    NavGroupComponent,
    SiteConfigurationsComponent,
    TransactionComponent,
    UserProfileComponent,
    TagsComponent,
    DateSortPipePipe,
    TrieMontantPipe,
    BudgetComponent,
    PlanificationDepensesComponent,













  ],
  imports: [HttpClientModule,BrowserModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
     RouterModule,
     ToastrModule.forRoot() // ToastrModule added

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
