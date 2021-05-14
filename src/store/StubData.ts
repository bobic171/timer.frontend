import { ClientData } from '@/models/ClientData';
import StateContainer from '@/store/StateContainer';
import { Store } from 'vuex';

export default class StubData {
  public static AddProjects(store: Store<StateContainer>): void {
    store.state.projects.push({
      Id: 1,
      Name: 'Project 1',
      ClientId: 1,
    });
    store.state.projects.push({
      Id: 2,
      Name: 'Project 2',
      ClientId: 1,
    });
    store.state.projects.push({
      Id: 3,
      Name: 'Project 3',
      ClientId: 2,
    });
    store.state.projects.push({
      Id: 4,
      Name: 'Project 4',
      ClientId: 2,
    });
    store.state.projects.push({
      Id: 5,
      Name: 'Project 5',
      ClientId: 2,
    });
    store.state.projects.push({
      Id: 6,
      Name: 'Project 6',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 7,
      Name: 'Project 7',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 8,
      Name: 'Project 8',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 9,
      Name: 'Project 9',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 10,
      Name: 'A really long project name',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 12,
      Name: 'A really long project name',
      ClientId: 3,
    });
    store.state.projects.push({
      Id: 13,
      Name: 'A really long project name',
      ClientId: 4,
    });
    store.state.projects.push({
      Id: 14,
      Name: 'A really long project name',
      ClientId: 4,
    });
    store.state.projects.push({
      Id: 15,
      Name: 'A really long project name',
      ClientId: 5,
    });
  }

  public static AddClients(store: Store<StateContainer>): void {
    store.state.clients.push({
      Id: 1,
      Name: 'AA Johns',
    });
    store.state.clients.push({
      Id: 2,
      Name: 'BF Gains',
    });
    store.state.clients.push({
      Id: 3,
      Name: 'Diggers R\'Us',
    });
    store.state.clients.push({
      Id: 4,
      Name: 'Miners Massive',
    });
  }

  public static AddProspects(store: Store<StateContainer>): void {
    store.state.prospects.push({
      Id: 1,
      Name: 'El prospectos',
      ClientId: 1,
    });
  }

  public static AddWorkType(store: Store<StateContainer>): void {
    store.state.workTypes.push({
      Id: 1,
      Name: 'Abstracting',
    });
    store.state.workTypes.push({
      Id: 2,
      Name: 'Administrative/Clerical',
    });
    store.state.workTypes.push({
      Id: 3,
      Name: 'BD Event',
    });
    store.state.workTypes.push({
      Id: 4,
      Name: 'Bonus Review',
    });
    store.state.workTypes.push({
      Id: 5,
      Name: 'Bonus Title',
    });
    store.state.workTypes.push({
      Id: 6,
      Name: 'Business Development',
    });
    store.state.workTypes.push({
      Id: 7,
      Name: 'Cold Calls',
    });
    store.state.workTypes.push({
      Id: 8,
      Name: 'Curative',
    });
    store.state.workTypes.push({
      Id: 9,
      Name: 'Damages',
    });
    store.state.workTypes.push({
      Id: 10,
      Name: 'Day Off',
    });
    store.state.workTypes.push({
      Id: 11,
      Name: 'Defect Resolution',
    });
    store.state.workTypes.push({
      Id: 12,
      Name: 'Due Diligence/ A and D',
    });
    store.state.workTypes.push({
      Id: 13,
      Name: 'Emails/Followup',
    });
    store.state.workTypes.push({
      Id: 14,
      Name: 'Flex Time',
    });
    store.state.workTypes.push({
      Id: 15,
      Name: 'Holiday',
    });
    store.state.workTypes.push({
      Id: 16,
      Name: 'Imaging',
    });
    store.state.workTypes.push({
      Id: 17,
      Name: 'Lease Check',
    });
    store.state.workTypes.push({
      Id: 18,
      Name: 'Lease Review (RWW)',
    });
    store.state.workTypes.push({
      Id: 19,
      Name: 'Lease Title (RWW)',
    });
    store.state.workTypes.push({
      Id: 20,
      Name: 'Leasing',
    });
    store.state.workTypes.push({
      Id: 21,
      Name: 'Leasing and associated title/Check and Buy Area',
    });
    store.state.workTypes.push({
      Id: 22,
      Name: 'Litigation',
    });
    store.state.workTypes.push({
      Id: 23,
      Name: 'Mapping',
    });
    store.state.workTypes.push({
      Id: 24,
      Name: 'Mineral Review (RWW)',
    });
    store.state.workTypes.push({
      Id: 25,
      Name: 'Mineral Title (RWW)',
    });
    store.state.workTypes.push({
      Id: 26,
      Name: 'Non-Rebill expense',
    });
    store.state.workTypes.push({
      Id: 27,
      Name: 'Office Rental',
    });
    store.state.workTypes.push({
      Id: 28,
      Name: 'Ownerships/Area checks and associated title',
    });
    store.state.workTypes.push({
      Id: 29,
      Name: 'Project Management',
    });
    store.state.workTypes.push({
      Id: 30,
      Name: 'Rebill Expense',
    });
    store.state.workTypes.push({
      Id: 31,
      Name: 'Regulatory',
    });
    store.state.workTypes.push({
      Id: 32,
      Name: 'Review',
    });
    store.state.workTypes.push({
      Id: 33,
      Name: 'Review (MR)',
    });
    store.state.workTypes.push({
      Id: 34,
      Name: 'Review (Non-Billable)',
    });
    store.state.workTypes.push({
      Id: 35,
      Name: 'ROW',
    });
    store.state.workTypes.push({
      Id: 36,
      Name: 'Seismic Options/Permitting',
    });
    store.state.workTypes.push({
      Id: 37,
      Name: 'Supplemental Title',
    });
    store.state.workTypes.push({
      Id: 38,
      Name: 'Time Off',
    });
    store.state.workTypes.push({
      Id: 39,
      Name: 'Time Off (Unpaid)',
    });
    store.state.workTypes.push({
      Id: 40,
      Name: 'Title',
    });
    store.state.workTypes.push({
      Id: 37,
      Name: 'Title (MR)',
    });
    store.state.workTypes.push({
      Id: 38,
      Name: 'Title (Non-billable)',
    });
    store.state.workTypes.push({
      Id: 39,
      Name: 'Title Opinion data entry',
    });
    store.state.workTypes.push({
      Id: 40,
      Name: 'Training',
    });
  }

  public static CreateClientData(): ClientData {
    return {
      TotalHours: 205,
      RecentEntries: [
        { Name: 'Joe Bloggs', EntryType: 'Project', Time: 1.5 },
        { Name: 'Jane Doza', EntryType: 'Review', Time: 4.5 },
        { Name: 'Jane Doza', EntryType: 'Other', Time: 1.0 },
      ],
      ApprovalsRemaining: 36,
      ApprovalsComplete: 47,
    };
  }

  public static AddLandPeople(store: Store<StateContainer>): void {
    store.state.landPeople.push({
      CompanyName: 'oil people',
      City: 'Block Town',
      Fax: 'NO!',
      Group: '',
      Mobile: '0123456789',
      State: 'State',
      StreetAddress: 'Street',
      TaxId: 'Tax ID',
      Telephone: '0123456789',
      Unit: 'Unit',
      Zip: 'AB123',
    });
  }
}
