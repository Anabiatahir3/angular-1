import {Injectable} from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
    constructor (private loader:LoaderService){
    }
    intercept(
        req:HttpRequest<any>,
        next:HttpHandler
    ):Observable<HttpEvent<any>>{
        console.log('Interceptor works! Request URL:', req.url);
        this.loader.showLoader();
        console.log(this.loader.getApiCount())
        return next.handle(req).pipe(
            finalize(() => this.loader.hideLoader())
          );
    }
}