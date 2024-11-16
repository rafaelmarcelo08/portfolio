import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { faCodeCommit } from '@fortawesome/free-solid-svg-icons';

import { JOBS } from 'src/app/shared/constants/jobs.constant';
import { JobInterface } from './interface/job.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public jobs = JOBS;
  public faCodeCommit = faCodeCommit;

  public selectedJob: JobInterface = this.jobs[0];

  constructor() {}

  ngOnInit() {
    this.updateCurrentJobDuration(); // Atualiza a duração do emprego atual ao iniciar o componente
  }

  selectJob(job: JobInterface) {
    this.selectedJob = job;
  }

  updateCurrentJobDuration() {
    const currentJob = this.jobs[0]; // O emprego atual é sempre o primeiro no array
    if (currentJob.endDate === 'Atualmente') {
      const startDate = moment(currentJob.startDate, 'MMMM YYYY'); // Exemplo: 'Novembro 2022'
      const currentDate = moment(); // Data atual
      const duration = moment.duration(currentDate.diff(startDate)); // Diferença entre as datas

      const years = duration.years();
      const months = duration.months();

      // Ajuste para exibir somente anos quando os meses forem 0
      if (months === 0 && years > 0) {
        currentJob.duration = `${years} ano${years > 1 ? 's' : ''}`;
      } else if (years > 0) {
        currentJob.duration = `${years} ano${
          years > 1 ? 's' : ''
        } e ${months} mês${months > 1 ? 'es' : ''}`;
      } else {
        currentJob.duration = `${months} mês${months > 1 ? 'es' : ''}`;
      }
    }
  }
}
