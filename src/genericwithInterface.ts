interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        relezedYear: string;
    };
    smartWatch: T;
}



interface BrandCaraWatch { 
    heartRet: string;
    stopWatch: boolean;

}
interface AppleWatch{
    heartRet: string;
    callSapport: boolean;
    calculator:boolean;
    aiFeature:boolean;

}



const poorDeveloper: Developer<BrandCaraWatch> = {
    name: 'mora',
    salary: 20,
    device: {
        brand: 'samsung',
        model: 'G20',
        relezedYear: '2020',

    },
    smartWatch: {
        heartRet:'70',
        stopWatch:true

    }

}



const richDeveloper: Developer<
    AppleWatch
> = {
    name: 'jorina',
    salary: 20,
    device: {
        brand: 'lenovo',
        model: 'G20',
        relezedYear: '2025',

    },
    smartWatch: {
        heartRet:'70',
        callSapport:true,
        calculator:true,
        aiFeature:true

    }

}