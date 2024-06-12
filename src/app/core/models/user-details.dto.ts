export interface UserDetailsDto {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    gender: string;
    birthdate: string;
    email: string;
    pictureUrl?: string;
    userType: string;
    study?: string | undefined | null
}
