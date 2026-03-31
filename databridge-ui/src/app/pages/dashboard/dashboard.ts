import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../services/file-upload';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  selectedFile: File | null = null;
  uploadProgress: number | null = null;
  uploadResult: any = null;
  error: string | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }
    this.selectedFile = input.files[0];
    this.error = null;
    this.uploadResult = null;
    this.uploadProgress = null;
  }

  upload() {
    if (!this.selectedFile) {
      this.error = 'Please select a file first.';
      return;
    }

    this.error = null;
    this.uploadProgress = 0;

    this.fileUploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === 1 && event.total) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event.body) {
          this.uploadResult = event.body;
          this.uploadProgress = 100;
        }
      },
      error: () => {
        this.error = 'File upload failed. Please try again.';
        this.uploadProgress = null;
      },
    });
  }
}
