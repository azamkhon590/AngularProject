import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = 
[
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/add',
        component: AddProductComponent
    },
    {
        path: 'product/edit/:id',
        component: EditProductComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signUp',
        component: SignupComponent
    }
];
