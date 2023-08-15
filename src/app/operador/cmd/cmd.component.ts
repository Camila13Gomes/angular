import { Component } from '@angular/core';

@Component({
  selector: 'app-cmd',
  templateUrl: './cmd.component.html',
  styleUrls: ['./cmd.component.scss']
})
export class CmdComponent {
  selectedPiece: string | undefined;
  selectedRapport: string | undefined;
  selectedEstado: string | undefined;
  selectedMaquina: string | undefined;
  availableRapports: { value: string; label: string; }[] | undefined;
  availableEstados : { value: string; label: string; }[] | undefined;
  availableMaquinas: { value: string; label: string; }[] | undefined;

  constructor() {
    // Defina as opções para ESTADO
    this.availableEstados = [
      { value: '1', label: 'Talhagem'},
      { value: '2', label: 'Shaving'},
      { value: '2', label: 'TTH'},
      { value: '2', label: 'Retificação'},
      { value: '2', label: 'operaçao 200'},
      { value: '2', label: 'Montada'},
      { value: '2', label: 'Torneamento'},
      { value: '2', label: 'Brochagem'}
    ];

  }

  onPieceChange() {
    this.selectedRapport = '';
    this.selectedEstado = '';
    this.selectedMaquina = '';
    this.availableRapports = []; // Limpar as opções de rapport
    this.availableMaquinas = []; // Limpar as opções de máquina


      if (this.selectedPiece === '1') {
      this.availableRapports = [   // OPÇOES PARA A RAPPORT
        { value: '1', label: '11X43' },
        { value: '2', label: '11X45' }
      ];
    } else if (this.selectedPiece === '2') {
      this.availableRapports = [
        { value: '1', label: '17X39' },
        { value: '2', label: '17X41' }
      ];
    } else if (this.selectedPiece === '3') {
      this.availableRapports = [
        { value: '1', label: 'NULL' },
        { value: '2', label: 'NULL' }
      ];
    } else if (this.selectedPiece === '4') {
      this.availableRapports = [
        { value: '1', label: '26X41' },
        { value: '2', label: '29X43' }
      ];
    } else if (this.selectedPiece === '5') {
      this.availableRapports = [
        { value: '1', label: '35X39' },
        { value: '2', label: '43X22' }
      ];
    } else if (this.selectedPiece === '6') {
      this.availableRapports = [
        { value: '1', label: '41X35' },
        { value: '2', label: '43X32' }
      ];
    } else if (this.selectedPiece === '7') {
      this.availableRapports = [
        { value: '1', label: '43X29' },
        { value: '2', label: '50x28' }
      ];
    } else if (this.selectedPiece === '8') {
      this.availableRapports = [
        { value: '1', label: '11X43' },
        { value: '2', label: '11X45' }
      ];
    } else if (this.selectedPiece === '9') {
      this.availableRapports = [
        { value: '1', label: '17X39' },
        { value: '2', label: '17X41' }
      ];
    } else if (this.selectedPiece === '10') {
      this.availableRapports = [
        { value: '1', label: '26X41' },
        { value: '2', label: '29X43' }
      ];
    } else if (this.selectedPiece === '11') {
      this.availableRapports = [
        { value: '1', label: '35X39' },
        { value: '2', label: '43X22' }
      ];
    } else if (this.selectedPiece === '12') {
      this.availableRapports = [
        { value: '1', label: '41X35' },
        { value: '2', label: '43X32' }
      ];
    } else if (this.selectedPiece === '13') {
      this.availableRapports = [
        { value: '1', label: '43X29' },
        { value: '2', label: '50x28' }
      ];
    } else if (this.selectedPiece === '14') {
      this.availableRapports = [
        { value: '1', label: '43X42' },
        { value: '2', label: '45X44' }
      ];
    } else if (this.selectedPiece === '15') {
      this.availableRapports = [
        { value: '1', label: '14X63' },
        { value: '2', label: '14X69' },
        { value: '2', label: '15X58' }
      ];
    } else if (this.selectedPiece === '16') {
      this.availableRapports = [
        { value: '1', label: '14X63' },
        { value: '2', label: '14X69' },
        { value: '2', label: '15X58' }
      ];
    } else if (this.selectedPiece === '17') {
      this.availableRapports = [
        { value: '1', label: '14X63' },
        { value: '2', label: '14X69' },
        { value: '2', label: '15X58' }
      ];
    } else if (this.selectedPiece === '18') {
      this.availableRapports = [
        { value: '1', label: '14X59' },
        { value: '2', label: '14X69' }
      ];

    } else if (this.selectedPiece === '19') {
      this.availableRapports = [
        { value: '1', label: '14X59' },
        { value: '2', label: '14X69' }
      ];
    } else if (this.selectedPiece === '20') {
      this.availableRapports = [
        { value: '1', label: '41X29' },
        { value: '2', label: '49X28' },
        { value: '2', label: '30D' },
        { value: '2', label: '49X27' },
        { value: '2', label: '51/28' }
      ];
    } else if (this.selectedPiece === '21') {
      this.availableRapports = [
        { value: '1', label: 'NULL' },
        { value: '2', label: 'NULL' }
      ];
    } else if (this.selectedPiece === '22') {
      this.availableRapports = [
        { value: '1', label: 'Z106' },
        { value: '2', label: 'Z98' }
      ];
    } else if (this.selectedPiece === '23') {
      this.availableRapports = [
        { value: '1', label: 'Z43' },
        { value: '2', label: 'Z47 ESQ'},
        { value: '2', label: 'Z47 DIR'},
        { value: '2', label: 'Z53'}
      ];

    } else if (this.selectedPiece === '24') {
      this.availableRapports = [
        { value: '1', label: 'NULL' },
        { value: '2', label: 'NULL' }
      ];
    } else if (this.selectedPiece === '25') {
      this.availableRapports = [
        { value: '1', label: 'Z43' },
        { value: '2', label: 'Z47 ESQ' },
        { value: '2', label: 'Z47 DIR' },
        { value: '2', label: 'ZZ53' }
      ];
    }

// OPÇOES PARA A MAQUINA

  if (this.selectedPiece === '1') {
    this.availableMaquinas  = [
      { value: '1', label: '62015487' },
      { value: '1', label: '2418'},
      { value: '1', label: '788742'},
      { value: '2', label: '781016'}
    ];
  } else if (this.selectedPiece === '2') {
    this.availableMaquinas  = [
      { value: '1', label: '62019430'},
      { value: '1', label: '62019428'},
      { value: '2', label: '814221'},
      { value: '2', label: '814223'}
    ];
  } else if (this.selectedPiece === '3') {
    this.availableMaquinas  = [
      { value: '1', label: 'C456'},
      { value: '1', label: 'C457'},
      { value: '1', label: 'C458'}
    ];
  } else if (this.selectedPiece === '4') {
    this.availableMaquinas  = [
      { value: '1', label: '62018915'},
      { value: '2', label: '62018917'},
      { value: '2', label: '62019018'}
    ];
  } else if (this.selectedPiece === '5') {
    this.availableMaquinas  = [
      { value: '1', label: '62019046'},
      { value: '2', label: '62019089'},
      { value: '2', label: '62019018'}
    ];
  } else if (this.selectedPiece === '6') {
    this.availableMaquinas  = [
      { value: '1', label: '62019047'},
      { value: '2', label: '62019090'},
      { value: '2', label: '62019017'}
    ];
  } else if (this.selectedPiece === '7') {
    this.availableMaquinas  = [
      { value: '1', label: '62019702' },
      { value: '2', label: '900'},
      { value: '2', label: '62019018'}
    ];
  } else if (this.selectedPiece === '8') {
    this.availableMaquinas  = [
      { value: '1', label: '2425' },
      { value: '2', label: '19241908'}
    ];
  } else if (this.selectedPiece === '9') {
    this.availableMaquinas  = [
      { value: '1', label: '2275' },
      { value: '2', label: '1794' }
    ];
  } else if (this.selectedPiece === '10') {
    this.availableMaquinas  = [
      { value: '1', label: '2478' },
      { value: '2', label: '758157' }
    ];
  } else if (this.selectedPiece === '11') {
    this.availableMaquinas  = [
      { value: '1', label: '790948' },
      { value: '2', label: '49239' }
    ];
  } else if (this.selectedPiece === '12') {
    this.availableMaquinas  = [
      { value: '1', label: '2420' },
      { value: '2', label: '790951' }
    ];
  } else if (this.selectedPiece === '13') {
    this.availableMaquinas  = [
      { value: '1', label: '62018951' },
      { value: '2', label: '62019123' }
    ];
  } else if (this.selectedPiece === '14') {
    this.availableMaquinas  = [
      { value: '1', label: '790944' },
      { value: '2', label: '75818156' }
    ];
  } else if (this.selectedPiece === '15') {
    this.availableMaquinas  = [
      { value: '1', label: '2422' },
      { value: '2', label: '2045' },
      { value: '2', label: '12426'},
      { value: '2', label: '732162'}
    ];
  } else if (this.selectedPiece === '16') {
    this.availableMaquinas  = [
      { value: '1', label: '62018952' },
      { value: '2', label: '758740' },
      { value: '2', label: '758741' },
      { value: '2', label: '62019174' }
    ];
  } else if (this.selectedPiece === '17') {
    this.availableMaquinas  = [
      { value: '1', label: '62017341' },
      { value: '2', label: '62019120' },
      { value: '2', label: '335' },
      { value: '2', label: '62017340'}
    ];
  } else if (this.selectedPiece === '18') {
    this.availableMaquinas  = [
      { value: '1', label: '62019119' },
      { value: '1', label: '62019429' },
      { value: '1', label: '62017341' },
      { value: '1', label: '62018856' },
      { value: '1', label: '62019719' },
      { value: '2', label: '62017340' }
    ];

  } else if (this.selectedPiece === '19') {
    this.availableMaquinas  = [
      { value: '1', label: '62019429' },
      { value: '1', label: '62019119' },
      { value: '1', label: '62019719' },
      { value: '2', label: '62018856' }
    ];
  } else if (this.selectedPiece === '20') {
    this.availableMaquinas  = [
      { value: '1', label: '2519' },
      { value: '2', label: '2682' },
      { value: '2', label: '2416' },
      { value: '2', label: '2680' },
      { value: '2', label: '3037' },
      { value: '2', label: '1222' }

    ];
  } else if (this.selectedPiece === '21') {
    this.availableMaquinas  = [
      { value: '1', label: '2680' },
      { value: '2', label: 'NULL' }
    ];
  } else if (this.selectedPiece === '22') {
    this.availableMaquinas  = [
      { value: '1', label: '2706' },
      { value: '1', label: '2378' },
      { value: '2', label: '2556' }
    ];
  } else if (this.selectedPiece === '23') {
    this.availableMaquinas  = [
      { value: '1', label: '2269' }

    ];

  } else if (this.selectedPiece === '24') {
    this.availableMaquinas  = [
      { value: '1', label: '2829' },
      { value: '1', label: '2837' },
      { value: '1', label: '2843' },
      { value: '1', label: '8414' },
      { value: '2', label: '9335' }
    ];
  } else if (this.selectedPiece === '25') {
    this.availableMaquinas  = [
      { value: '1', label: '62018953' },
      { value: '2', label: '2470' },
      { value: '2', label: '2469' },
      { value: '2', label: '2381' },
      { value: '2', label: '2476' },
      { value: '2', label: '2383' },
      { value: '2', label: '2384' }
    ];
  } else {
    this.availableMaquinas  = [];

 // Adicione mais opções de estados aqui
    this.availableEstados = [
      { value: '1', label: 'Talhagem ' },
      { value: '2', label: 'Shaving' },
      { value: '2', label: 'TTH e Retificação' },
      { value: '2', label: 'Brochagem' }
    ];


  }
}
confirmEnvio() {
  if (this.selectedPiece && this.selectedRapport && this.selectedEstado && this.selectedMaquina) {
    const confirmacao = window.confirm('Deseja mesmo enviar os dados?');
    if (confirmacao) {
      this.mostrarProtocolo();
    }
  } else {
    window.alert('Por favor, selecione todas as opções antes de enviar.');
  }
}
mostrarProtocolo() {
  const protocolo = this.gerarProtocolo();
  window.alert(`Seu protocolo: ${protocolo}`);
  this.reiniciarFormulario();
}
reiniciarFormulario() {
  this.selectedPiece = '';
  this.selectedRapport = '';
  this.selectedEstado = '';
  this.selectedMaquina = '';
}
gerarProtocolo() {
  const numeroProtocolo = Math.floor(Math.random() * 1000000);
  return `CMD-${numeroProtocolo.toString().padStart(6, '0')}`;
}
}
