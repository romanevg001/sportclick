import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { MagazineComponent } from './pages/magazine/magazine.component';

export const routes: Routes = [
    
    {
        path: '',
        pathMatch: 'full',
        component: LayoutComponent,
        children: [
    
            {
                path: '',
                component: MagazineComponent,
            }
        ]
}
];
