import { Country } from '../interfaces/policy.interface';

const countries : Country[] = [
        {
            id: '0',
            name: 'Hong Kong',
            currency: {
                id: '0', // think about UUID/GUID
                name: 'HKD',
                rate: 1
            },
        },
        {
            id: '1',
            name: 'USA',
            currency: {
                id: '1', // think about UUID/GUID
                name: 'USD',
                rate: 2
            },
        },
        {
            id: '2',
            name: 'Australia',
            currency: {
                id: '2', // think about UUID/GUID
                name: 'AUD',
                rate: 3
            },
        },
    ];

export default countries;
