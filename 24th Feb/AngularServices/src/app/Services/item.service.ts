import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'Rxjs';
import { Item } from '../item';
const Requestheaders={headers:new HttpHeaders
({
'Content-Type':'application/json',
})
}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
url:string='http://localhost:54726/item/'
  constructor(private http:HttpClient) { }
  public GetAll() : Observable<Item[]>
  {
    return this.http.get<Item[]>(this.url+'GetAllItems',Requestheaders)
  }

  public GetById(id:string) : Observable<Item>
  {
    return this.http.get<Item>(this.url+'GetById/'+id,Requestheaders)
  }

  public AddItem(item:Item):Observable<any>
  {
    return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders)
  }

  public UpdateItem(item:Item):Observable<any>
  {
    return this.http.put<any>(this.url+'Update',JSON.stringify(item),Requestheaders)
  }

  public DeleteItem(id:string):Observable<any>
  {
    return this.http.delete<Item>(this.url+'DeleteItem/'+id,Requestheaders)
  }

}

