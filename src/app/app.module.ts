import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post.service';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: NewPostComponent},
  { path: '', component: PostListComponent},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
