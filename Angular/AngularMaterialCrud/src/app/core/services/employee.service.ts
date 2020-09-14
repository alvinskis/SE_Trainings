import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'http://localhost:3000/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    } else {
      console.log('Server Side Error', errorResponse.error);
    }
    return throwError('There is a problem in your code');

  }

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl).pipe(catchError(this.handleError));
  }

  getEmployeeById(id): Observable<Employee> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(catchError(this.handleError));
  }

  addEmployee(emp): Observable<Employee> {
    return this.http.post<Employee>(baseUrl, emp);
  }

  deleteEmployee(id): Observable<Employee> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<Employee>(url).pipe(catchError(this.handleError));
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    const url = `${baseUrl}/${emp.id}`;
    return this.http.put<Employee>(url, emp).pipe(catchError(this.handleError));
  }

  getEmployeesByLabel(label: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl).pipe(map(result => result.filter(result => result.sales === label)));
  }
}
