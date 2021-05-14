import { Project } from '@/models/Project';
import { Client } from '@/models/Client';
import { User } from '@/models/User';
import { WorkType } from '@/models/WorkType';
import { Prospect } from '@/models/Prospect';
import { Landman } from '@/models/Landman';
import { LegalDescription } from '@/models/LegalDescription';

export default class StateContainer {
    user: User = { LoggedIn: false }

    projects: Array<Project> = []

    clients: Array<Client> = []

    activeClient: Client = {
      Id: 0,
      Name: '',
    }

    workTypes: Array<WorkType> = []

    prospects: Array<Prospect> = []

    landPeople: Array<Landman> = []

    legalDescriptions: Array<LegalDescription> = []
}
