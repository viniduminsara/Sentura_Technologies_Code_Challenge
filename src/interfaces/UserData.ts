interface UserData {
    id: number;
    uid: string;
    display_name: string;
    avatar_url: string;
    email: string;
    given_name: string;
    middle_name: string;
    name: string;
    family_name: string;
    nickname: string;
    phone_number: string;
    comment: string;
    metadata: Record<string, unknown>;
    tags: string[];
    presence: string;
    directory_id: number;
    created_at: string;
    updated_at: string;
    is_bot: boolean;
    is_suspended: boolean;
    is_trashed: boolean;
}

interface ResponseData {
    data: UserData[];
    start: number;
    end: number;
    count: number;
}
