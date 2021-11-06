export interface ICreateCheckResponse {
  id: number;
  continue_url: string;
  candidate_token: {
    access_token: string;
    token_type: string;
    expires_in: number;
  };
}
