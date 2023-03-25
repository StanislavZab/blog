import { Country } from 'entities/Country';
import { Currents } from 'entities/Currency';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currents;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
