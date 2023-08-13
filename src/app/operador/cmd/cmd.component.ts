import { Component } from '@angular/core';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent {
  selectedPiece: string | undefined;
  selectedRapport: string | undefined;
  availableRapports: { value: string; label: string; }[] | undefined;

  onPieceChange() {
    this.selectedRapport = ''; // Reset the selected rapport when piece changes

    if (this.selectedPiece === '1') {
      this.availableRapports = [
        { value: '1', label: 'AP1 Rapport 1' },
        { value: '2', label: 'AP1 Rapport 2' }
      ];
    } else if (this.selectedPiece === '2') {
      this.availableRapports = [
        { value: '1', label: 'AP2 Rapport 1' },
        { value: '2', label: 'AP2 Rapport 2' }
      ];
    } else if (this.selectedPiece === '3') {
      this.availableRapports = [
        { value: '1', label: 'AP CANELADO Rapport 1' },
        { value: '2', label: 'AP CANELADO Rapport 2' }
      ];
    } else if (this.selectedPiece === '4') {
      this.availableRapports = [
        { value: '1', label: 'AP CANELADO Rapport 1' },
        { value: '2', label: 'AP CANELADO Rapport 2' }
      ];
    } else {
      this.availableRapports = [];
    }
  }
}
