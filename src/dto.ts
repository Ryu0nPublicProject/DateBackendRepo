export interface get_info {
    login_id: string;
    login_password: string;
    profile_url: string;
    name: string;
    birth: string;
    d_day: string;
    tag: any[];
    description: string;
    match_id: string;
}

export interface set_info {
    profile_url: string;
    name: string;
    birth: string;
    d_day: string;
    tag: any[];
    description: string;
}