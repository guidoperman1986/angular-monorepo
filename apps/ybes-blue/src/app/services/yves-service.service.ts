import { Injectable, signal } from '@angular/core';
import { data } from '../../assets/data';
import { Observable, of } from 'rxjs';
import { Ybes } from '../interface/data.interface';

@Injectable({
  providedIn: 'root',
})
export class YvesServiceService {
  private dataTable: Ybes[] = data;
  private ybesData = signal<Ybes[]>([])

  constructor() {
    this.setData(0, 10);
  }
  

  setData(start: number, offset: number) {
    const data = this.dataTable.slice(start, offset)
    this.ybesData.set(data);
  }

  get data() {
    return this.ybesData()
  }

  get numberOfPages() {
    return this.dataTable.length;
  }
}
