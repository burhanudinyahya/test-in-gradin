// with JavaScript

/*
Assessment test 1
Diketahui table pegawai di bawah ini :
ID	Nama	Gaji per bulan	    Region	                Level
1	Anto	8.000.000	        Asia	                1
2	Andi	5.000.000	        Europe	                2
3	Budi	11.000.000	        Asia	                1
4	Nita	10.000.000	        North America	        3
5	Bagus	2.000.000	        Europe	                2

1.	Bila gaji per bulan lebih dari 7.000.000, maka orang tersebut akan mendapatkan tambahan 10% 
    dari gaji per bulan, bila di bawah 7.000.000 dan di atas 4.000.000, maka orang tersebut akan 
    mendapatkan tambahan 20% dari gaji per bulan, bila di bawah 4.000.000, maka orang tersebut 
    akan mendapatkan tambahan sebesar 40%

2.	Bila region mereka berada di Asia, maka mereka mendapatkan pajak 2% dari seluruh pendapatan 
    mereka beserta bonus pada bulan tersebut, Bila mereka berada di Eropa, mereka mendapatkan 2,5% pajak, 
    Bila di North America, mereka mendapatkan 3% pajak

3.	Bila level mereka 1, mereka mendapatkan bonus sebesar 200.000 setelah tambahan persen di peraturan 
    no 1, bila level 2 mereka mendapatkan 500.000, bila level 3 mereka akan mendapatkan 1.000.000

Buatlah program untuk menghitung gaji akhir masing pegawai dengan menggunakan 
konsep Object Oriented Programming, dengan bentuk list Nama: Gaji.
*/

/*
hasil:
https://codesandbox.io/s/gradinassessmenttest1-u21c7
*/

class Payroll {
    constructor(){
        this.nama = '';
        this.gaji = 0;
        this.level = 0;
        this.region = '';
    }

    hitungTambahan(){
        if(this.gaji >= 7000000){
            this.gaji += (10 / 100) * this.gaji;
        }else if(this.gaji >= 4000000 && this.gaji < 7000000){
            this.gaji += (20 / 100) * this.gaji;
        }else if(this.gaji < 4000000){
            this.gaji += (40 / 100) * this.gaji;
        }
    }

    hitungBonus(){
        if(this.level === 1){
            this.gaji += 200000;
        }else if(this.level === 2){
            this.gaji += 500000;
        }else if(this.level === 3){
            this.gaji += 1000000;
        }
    }

    hitungPajak(){
        this.region = this.region.toLowerCase();
        if(this.region === 'asia'){
            this.gaji += (2 / 100) * this.gaji;
        }else if(this.region === 'europe'){
            this.gaji += (25 / 10 / 100) * this.gaji;;
        }else if(this.region === 'north america'){
            this.gaji += (3 / 100) * this.gaji;;
        }
    }

    cetakGajiAkhir(){
        return `${this.nama}: ${this.gaji}`;
    }
}

const dataPayroll = [
    {nama: 'Anto', gaji: 8000000, region: 'Asia', level: 1},
    {nama: 'Andi', gaji: 5000000, region: 'Europe', level: 2},
    {nama: 'Budi', gaji: 11000000, region: 'Asia', level: 1},
    {nama: 'Nita', gaji: 10000000, region: 'North America', level: 3},
    {nama: 'Bagus', gaji: 2000000, region: 'Europe', level: 2},
];

const pay = new Payroll();

for(const data of dataPayroll){
    // console.table(data);

    pay.nama = data.nama;
    pay.gaji = data.gaji;
    pay.level = data.level;
    pay.region = data.region;
    console.log(`Gaji                               => ${pay.cetakGajiAkhir()}`);
    
    pay.hitungTambahan();
    console.log(`Gaji + Tambahan                    => ${pay.cetakGajiAkhir()}`);

    pay.hitungBonus();
    console.log(`Gaji + Tambahan + Bonus            => ${pay.cetakGajiAkhir()}`);
    
    pay.hitungPajak();
    console.log(`Gaji + Tambahan + Bonus + Pajak    => ${pay.cetakGajiAkhir()}`);
    
    console.log('\n');
}

/*
Assessment test 2
Buatlah program sehingga menghasilkan keluaran dibawah ini.

Input 5, output:
5 4 3 2 1
  4 3 2 
    3
  2 3 4
1 2 3 4 5

Input 7, output:
7 6 5 4 3 2 1
  6 5 4 3 2 
    5 4 3
      4
    3 4 5
  2 3 4 5 6
1 2 3 4 5 6 7
*/

/*
hasil:
https://codesandbox.io/s/gradinassessmenttest2-xrpdn
*/

function hourglass(input){
    const isOdd = input%2===0 ? 1 : 2;
    for(let i = 1; i <= input; i++){
        let arr = [];
        for(let j = i; j <= input; j++){
            arr.push(j);
        }
        for(let k = 1; k < i; k++){
            arr.push(" ");
        }
        input--;
        console.log(arr.reverse().join(' '));
    }
    for(let i = input; i > 0; i--){
        let arr = [];
        for(let k = 1; k < i; k++){
            arr.push(" ");
        }
        for(let j = i; j <= input+isOdd; j++){
            arr.push(j);
        }
        input++;
        console.log(arr.join(' '));
    }
    console.log('\n');
}

hourglass(5);
hourglass(7);

/*
Assessment test 3
Buatlah program sederhana untuk menghitung luas bangunan lingkaran, persegi panjang, dan segitiga.
*/

/*
hasil:
https://codesandbox.io/s/gradinassessmenttest3-zdu4i
*/

function luasLingkaran(radius){
    return Math.PI * (radius ** 2);
}

function luasPersegiPanjang(panjang, lebar){
    return panjang * lebar;
}

function luasSegitiga(alas, tinggi){
    return 0.5 * alas * tinggi;
}

console.log(`
Luas lingkarang dengan jari-jari 10                 =>  ${luasLingkaran(10)}
Luas persegi panjang dengan panjang 10 dan lebar 5  =>  ${luasPersegiPanjang(10,5)}
Luas segitiga dengan alas 10 dan tinngi 15          =>  ${luasSegitiga(10, 15)}
`);

/*
I know from intagram @loker.programmer, 
This full-time onsite job? Surabaya right?, 
I am remote job hunter :D, but I run and send this test because I just love solving problem with code.
thanks, have a nice day
*/