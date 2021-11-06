export interface IListCheckRequest{
    first_name: string;
    last_name: string;
    dob: string;
    sex: string;
    client_ref: string;
    status: string;
    verify_status: string;
    accept_status: string;
    parameters:{
        sort: string;
        dir: string;
        limit: string;
        offset: string;
    }
}