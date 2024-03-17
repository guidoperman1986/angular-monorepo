import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ybes } from './interface/data.interface';
import { YvesServiceService } from './services/yves-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ybes-blue';
  ybesData = this.ybesService.data;
  totalPages = signal<number>(0);
  currentPage = signal<number>(1);

  constructor(private ybesService: YvesServiceService) {}

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages.set(this.ybesService.numberOfPages);
  }

  sortTable(column: keyof Ybes) {
    this.ybesData.sort((a, b) => {
      const regexPattern = new RegExp(/[$(),]/g, 'gi');

      const aValue = Number(String(a[column]).replace(regexPattern, ''));
      const bValue = Number(String(b[column]).replace(regexPattern, ''));

      if (!Number.isNaN(aValue) || !Number.isNaN(bValue)) {
        return aValue - bValue;
      }
      
      return (a[column] as string).localeCompare(b[column] as string);
    });
  }
}
