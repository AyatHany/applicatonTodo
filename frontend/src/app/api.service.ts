import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  registerUser(user: any){
    this.http.post('http://backend2-todoapp.apps.eu45.prod.nextcle.com/api/user',user).subscribe(res=>{
      console.log(res);
    })
  }
  logoutUser(){
    this.http.get('http://backend2-todoapp.apps.eu45.prod.nextcle.com/api/usrlogin').subscribe(res=>{
      console.log(res);
    })
  }
  loginUser(user: any){
    this.http.post('http://backend2-todoapp.apps.eu45.prod.nextcle.com/api/userlogin',user).subscribe(res=>{
      console.log(res);
    })
  }
  public addtask(task: any){
    this.http.post('http://backend2-todoapp.apps.eu45.prod.nextcle.com/api/task',{"title":task,"isDone":false}).subscribe(res=>{
      console.log(res);
    })
}
  public removetask(id: string){
  this.http.delete('http://backend2-todoapp.apps.eu45.prod.nextcle.com/api/task/'+id).subscribe(res=>{
    console.log(res);
  })
}
  public gettasks(){
    this.http.get('http://localhost:3000/api/tasks').subscribe(res=>{
      console.log(res);
    })
}
}