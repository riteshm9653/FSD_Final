import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentList: Equipment[] = [];
  selectedEquipment: Equipment = {
    name: '',
    description: '',
    category: '',
    quantity: 0,
    condition: '',
    costPerUnit: 0,
    location: '',
    status: 'OPERATIONAL',
    lastMaintenance: new Date(),
    nextMaintenance: new Date()
  };
  isEditing = false;
  showForm = false;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.loadEquipment();
  }

  loadEquipment(): void {
    this.equipmentService.getAllEquipment().subscribe({
      next: (data) => {
        this.equipmentList = data;
      },
      error: (error) => {
        console.error('Error loading equipment:', error);
      }
    });
  }

  onAddNew(): void {
    this.selectedEquipment = {
      name: '',
      description: '',
      category: '',
      quantity: 0,
      condition: '',
      costPerUnit: 0,
      location: '',
      status: 'OPERATIONAL',
      lastMaintenance: new Date(),
      nextMaintenance: new Date()
    };
    this.isEditing = false;
    this.showForm = true;
  }

  onEdit(equipment: Equipment): void {
    this.selectedEquipment = { ...equipment };
    this.isEditing = true;
    this.showForm = true;
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this equipment?')) {
      this.equipmentService.deleteEquipment(id).subscribe({
        next: () => {
          this.loadEquipment();
        },
        error: (error) => {
          console.error('Error deleting equipment:', error);
        }
      });
    }
  }

  onSave(): void {
    if (this.isEditing && this.selectedEquipment.id) {
      this.equipmentService.updateEquipment(this.selectedEquipment.id, this.selectedEquipment).subscribe({
        next: () => {
          this.loadEquipment();
          this.showForm = false;
        },
        error: (error) => {
          console.error('Error updating equipment:', error);
        }
      });
    } else {
      this.equipmentService.createEquipment(this.selectedEquipment).subscribe({
        next: () => {
          this.loadEquipment();
          this.showForm = false;
        },
        error: (error) => {
          console.error('Error creating equipment:', error);
        }
      });
    }
  }

  onCancel(): void {
    this.showForm = false;
  }
} 