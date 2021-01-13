import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.UIdesignchangesBlogModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.UIdesignchangesPostModule),
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.UIdesignchangesTagModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class UIdesignchangesEntityModule {}
