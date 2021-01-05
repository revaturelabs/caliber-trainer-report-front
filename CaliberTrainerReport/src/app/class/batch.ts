import { Assessment } from './assessment';
import { QCNote } from './QCNote';

export class Batch {
    id : number;
    batchId : string;
    name : string;
    startDate : string;
    endDate : string;
    skill : string;
    location : string;
    type : string;
    qcNotes : QCNote[];
    assessments : Assessment[];
    currentWeek : number;
}