interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}
  
// phoneType을 home, office, studio로 제한하기
enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

export { Contact, PhoneType };