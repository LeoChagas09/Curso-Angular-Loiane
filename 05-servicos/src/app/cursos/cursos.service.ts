import { Injectable } from "@angular/core";

@Injectable()
export class CursosService{

  private cursos: string[] = ['Angular 2' , 'Java' , 'Nodejs'];

  constructor(){}

  getCursos(){
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso)
  }

}
