import { Post } from '../../shared/post';
import { Subject } from 'rxjs';

    var p1 = new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    p1.loveIts = 2;
    
    var p2 = new Post("Mon deuxieme post","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    p2.loveIts = -3;
    
    var p3 = new Post("Encore un post","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");


export class PostService {
  
    postsSubject = new Subject<any[]>();
    private posts = [p1,p2,p3];


    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    upVote(i: number) {
        this.posts[i].loveIts++;
    }

    downVote(i: number) {
        this.posts[i].loveIts--;
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.emitPostSubject();
    }

    deletePost(i: number) {
        this.posts.splice(i,1);
        this.emitPostSubject();
    }
}