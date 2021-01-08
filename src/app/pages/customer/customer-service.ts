import { map } from 'rxjs/operators';
import { Injectable,PipeTransform, Pipe  } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerService {

        private baseUrl = environment.baseUrl;
        constructor(private http:HttpClient) { }

        getCustomerList(): Observable<any> {  
                return this.http.get(`${this.baseUrl}`+'customer/getCustomerNameWithoutOrder');  
        } 

        updateStatusCustomer(customerModel: any): Observable<any> {  
                return this.http.post(`${this.baseUrl}`+'customer/updateStatusCustomer', customerModel);  
        } 

        saveCustomer(customerModel: any): Observable<any> {  
                return this.http.post(`${this.baseUrl}`+'customer/addUpdateCustomer', customerModel);  
        } 
}

