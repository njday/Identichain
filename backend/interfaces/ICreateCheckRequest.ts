export interface ICreateCheckRequest {
  client_ref?: string;
  cost_centre?: string;
  billing_code?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  single_name?: false;
  dob?: string;
  birth_place?: string;
  birth_state?: string;
  birth_country?: string;
  sex?: string;
  email: string;
  other_names?: {
    first_name: string;
    last_name: string;
    type: string;
    single_name: boolean;
  }[];
  resid?: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    years: number;
    months: number;
  };
  previous?: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
    years: number;
    months: number;
  }[];
  type: string;
  healthcare: string;
  services?: string[];
  reason: string;
  accept_status?: string;
  place_work?: string;
  result_webhook?: string;
}
