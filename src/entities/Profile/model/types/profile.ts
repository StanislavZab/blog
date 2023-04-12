import { Country } from 'entities/Country';
import { Currents } from 'entities/Currency';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currents;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
