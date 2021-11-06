export interface IListResultRequest {
  candidate_url: string;
  services: {
    service: string;
    summary: string;
    result_date: string;
    expiry_date: string;
    candidate_url: string;
  }[];
}
