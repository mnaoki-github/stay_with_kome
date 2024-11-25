
interface ProfileData {
    name:string,
    sex:string,
    birthday:Date,
    age:null | string,
    breed:string,
    color:string,
    hair :string,
    personality:string,
};

interface Birthday{
    year:number,
    month:number,
    day:number,
};

export default function Profile(){

    const profileData: ProfileData = {
        name: 'コメ',
        sex:'male',
        birthday:new Date(2024, 1, 16),
        age:null,
        breed:'立ち耳スコティッシュフォールド',
        color:'レッドタビー&ホワイト',
        hair :'長毛',
        personality:'わがままで寂しがり屋',
    };

    profileData.age=getAge(profileData.birthday);

    return(
        <table>
            <tr>
                <th></th>
                <td></td>
            </tr>

        </table>
    );
} ;

function getAge(birthday:Date):string {
    const today:Date = new Date();
    
    const separateBirthday:Birthday={
        year:birthday.getFullYear(),
        month:birthday.getMonth(),
        day:birthday.getDate(),
    };

    const pathYear:number= today.getFullYear() - separateBirthday.year;
    let pathMonth:number= today.getMonth() - separateBirthday.month;

    if (today.getDate() < separateBirthday.day) {
        pathMonth--;
    }

    const age:string= `${pathYear}歳${pathMonth}ヶ月`;

    return age;

};