import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : Date;
  @Input() index : number;

  constructor(private postService: PostService) {

  }

  onDownvote() {
    this.postService.downVote(this.index);
  }

  onUpvote() {
    this.postService.upVote(this.index);
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }

}
