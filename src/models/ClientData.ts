export type ClientData = {
    TotalHours: number,
    RecentEntries: Array<{ Name: string, EntryType: string, Time: number }>,
    ApprovalsRemaining: number,
    ApprovalsComplete: number,
}
