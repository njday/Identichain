import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CheckType, ICheckData } from '../../../services/DataService';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.css'],
})
export class CheckEmailComponent implements OnChanges {
  @Input() checkType: CheckType;
  @Input() details: ICheckData;
  defaultText: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.details?.currentValue) {
      const details = changes.details.currentValue;
      if (this.checkType === CheckType.Employment) {
        this.defaultText = `Please can you confirm that ${details.firstName} ${details.lastName} was employed at ${details.employer} during ${details.tenure} in the capacity of ${details.title}.`;
      } else {
        this.defaultText = `Please can you confirm that ${details.firstName} ${details.lastName} graduated from the ${details.institute} with a ${details.degree} in the year ${details.year}. A consent form has been attached to this email.`;
      }
    }
  }
}
