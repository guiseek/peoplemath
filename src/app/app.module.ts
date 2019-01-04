import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { TeamPeriodsComponent } from './teamperiods/teamperiods.component';
import { PeriodComponent } from './period/period.component';
import { OkrStorageService } from './okrstorage.service';
import { BucketComponent } from './bucket/bucket.component';
import { ObjectiveComponent } from './objective/objective.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PeopleComponent, EditPersonDialog } from './people/people.component';
import { AssignmentsByPersonComponent } from './assignments-by-person/assignments-by-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AssignmentDialogComponent } from './assignment-dialog/assignment-dialog.component';
import { EditObjectiveDialogComponent } from './edit-objective-dialog/edit-objective-dialog.component';
import { EditBucketDialogComponent } from './edit-bucket-dialog/edit-bucket-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamPeriodsComponent,
    PeriodComponent,
    BucketComponent,
    ObjectiveComponent,
    AssignmentComponent,
    PeopleComponent,
    EditPersonDialog,
    AssignmentsByPersonComponent,
    AssignmentDialogComponent,
    EditObjectiveDialogComponent,
    EditBucketDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [
    EditPersonDialog,
    AssignmentDialogComponent,
    EditObjectiveDialogComponent,
    EditBucketDialogComponent,
  ],
  providers: [
    OkrStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
