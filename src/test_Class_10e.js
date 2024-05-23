var N = 120
var K = 245
var persons = []
var event = []
var lines = []
/*
lines[0] = '20'
lines[1] = '30'
lines[2] = '1 0'
lines[3] = '2 0'
lines[4] = '1 A'

lines[0] = '68'
lines[1] = '85'
lines[2] = '57'
lines[3] = '32'
lines[4] = '90'
lines[5] = '74'
lines[6] = '7'
lines[7] = '2 0'
lines[8] = '4 A'
lines[9] = '3 0'
lines[10] = '1 A'
lines[11] = '4 softdrink 3781'
lines[12] = '6 softdrink 3010'
lines[13] = '4 0'
lines[14] = '5 alcohol 1018'
lines[15] = '1 0'
lines[16] = '1 softdrink 376'
lines[17] = '1 softdrink 797'
lines[18] = '2 alcohol 4284'
*/

lines[0] = '84'
lines[1] = '57'
lines[2] = '8'
lines[3] = '34'
lines[4] = '29'
lines[5] = '12'
lines[6] = '18'
lines[7] = '39'
lines[8] = '55'
lines[9] = '44'
lines[10] = '85'
lines[11] = '18'
lines[12] = '67'
lines[13] = '100'
lines[14] = '91'
lines[15] = '67'
lines[16] = '54'
lines[17] = '96'
lines[18] = '1'
lines[19] = '45'
lines[20] = '19'
lines[21] = '78'
lines[22] = '3'
lines[23] = '77'
lines[24] = '39'
lines[25] = '20'
lines[26] = '25'
lines[27] = '76'
lines[28] = '43'
lines[29] = '37'
lines[30] = '34'
lines[31] = '94'
lines[32] = '100'
lines[33] = '45'
lines[34] = '74'
lines[35] = '73'
lines[36] = '95'
lines[37] = '31'
lines[38] = '25'
lines[39] = '3'
lines[40] = '89'
lines[41] = '41'
lines[42] = '57'
lines[43] = '70'
lines[44] = '97'
lines[45] = '73'
lines[46] = '35'
lines[47] = '77'
lines[48] = '96'
lines[49] = '72'
lines[50] = '43'
lines[51] = '9'
lines[52] = '17'
lines[53] = '26'
lines[54] = '29'
lines[55] = '95'
lines[56] = '97'
lines[57] = '65'
lines[58] = '3'
lines[59] = '33'
lines[60] = '44'
lines[61] = '4'
lines[62] = '52'
lines[63] = '85'
lines[64] = '61'
lines[65] = '11'
lines[66] = '79'
lines[67] = '8'
lines[68] = '5'
lines[69] = '59'
lines[70] = '46'
lines[71] = '49'
lines[72] = '4'
lines[73] = '30'
lines[74] = '92'
lines[75] = '43'
lines[76] = '56'
lines[77] = '91'
lines[78] = '34'
lines[79] = '92'
lines[80] = '75'
lines[81] = '99'
lines[82] = '84'
lines[83] = '31'
lines[84] = '35'
lines[85] = '8'
lines[86] = '25'
lines[87] = '23'
lines[88] = '10'
lines[89] = '14'
lines[90] = '54'
lines[91] = '31'
lines[92] = '80'
lines[93] = '27'
lines[94] = '18'
lines[95] = '16'
lines[96] = '47'
lines[97] = '73'
lines[98] = '60'
lines[99] = '74'
lines[100] = '35'
lines[101] = '92'
lines[102] = '9'
lines[103] = '59'
lines[104] = '28'
lines[105] = '33'
lines[106] = '12'
lines[107] = '62'
lines[108] = '28'
lines[109] = '97'
lines[110] = '86'
lines[111] = '75'
lines[112] = '84'
lines[113] = '19'
lines[114] = '27'
lines[115] = '57'
lines[116] = '89'
lines[117] = '49'
lines[118] = '44'
lines[119] = '32'
lines[120] = '54 softdrink 694'
lines[121] = '114 softdrink 4860'
lines[122] = '99 alcohol 4395'
lines[123] = '14 softdrink 1167'
lines[124] = '102 A'
lines[125] = '3 A'
lines[126] = '101 alcohol 4785'
lines[127] = '21 A'
lines[128] = '9 food 3716'
lines[129] = '59 alcohol 332'
lines[130] = '69 food 1414'
lines[131] = '13 softdrink 1034'
lines[132] = '54 0'
lines[133] = '50 A'
lines[134] = '9 softdrink 3786'
lines[135] = '80 A'
lines[136] = '106 food 1918'
lines[137] = '93 food 4512'
lines[138] = '5 food 1901'
lines[139] = '5 softdrink 554'
lines[140] = '110 0'
lines[141] = '53 food 2109'
lines[142] = '92 softdrink 3119'
lines[143] = '34 0'
lines[144] = '39 food 2900'
lines[145] = '87 0'
lines[146] = '91 softdrink 3576'
lines[147] = '79 alcohol 4243'
lines[148] = '108 softdrink 4058'
lines[149] = '11 A'
lines[150] = '52 alcohol 471'
lines[151] = '69 food 4990'
lines[152] = '49 alcohol 1335'
lines[153] = '100 softdrink 1728'
lines[154] = '69 0'
lines[155] = '95 softdrink 2955'
lines[156] = '72 A'
lines[157] = '10 0'
lines[158] = '61 food 4953'
lines[159] = '115 softdrink 4502'
lines[160] = '27 0'
lines[161] = '40 alcohol 3640'
lines[162] = '92 0'
lines[163] = '99 A'
lines[164] = '8 food 2013'
lines[165] = '63 softdrink 1621'
lines[166] = '44 food 4421'
lines[167] = '5 softdrink 554'
lines[168] = '48 softdrink 4935'
lines[169] = '111 alcohol 4095'
lines[170] = '9 A'
lines[171] = '118 alcohol 654'
lines[172] = '110 alcohol 1749'
lines[173] = '59 alcohol 314'
lines[174] = '118 A'
lines[175] = '13 A'
lines[176] = '59 alcohol 1996'
lines[177] = '78 A'
lines[178] = '32 0'
lines[179] = '8 0'
lines[180] = '24 0'
lines[181] = '37 0'
lines[182] = '65 food 3830'
lines[183] = '116 0'
lines[184] = '30 A'
lines[185] = '109 food 2940'
lines[186] = '111 softdrink 3419'
lines[187] = '77 food 4333'
lines[188] = '96 food 3284'
lines[189] = '82 food 1142'
lines[190] = '7 A'
lines[191] = '66 softdrink 3025'
lines[192] = '83 0'
lines[193] = '110 0'
lines[194] = '87 softdrink 4892'
lines[195] = '31 softdrink 4103'
lines[196] = '12 0'
lines[197] = '90 alcohol 3862'
lines[198] = '23 food 1082'
lines[199] = '94 softdrink 3095'
lines[200] = '33 softdrink 4558'
lines[201] = '96 A'
lines[202] = '23 softdrink 2513'
lines[203] = '39 food 2281'
lines[204] = '60 softdrink 2691'
lines[205] = '45 alcohol 3386'
lines[206] = '31 softdrink 596'
lines[207] = '37 A'
lines[208] = '91 softdrink 1448'
lines[209] = '1 food 3535'
lines[210] = '51 A'
lines[211] = '22 0'
lines[212] = '19 alcohol 3420'
lines[213] = '26 0'
lines[214] = '107 alcohol 459'
lines[215] = '106 alcohol 1943'
lines[216] = '116 A'
lines[217] = '24 A'
lines[218] = '117 softdrink 4188'
lines[219] = '117 food 3868'
lines[220] = '76 food 3456'
lines[221] = '46 A'
lines[222] = '92 alcohol 3010'
lines[223] = '44 softdrink 3731'
lines[224] = '18 A'
lines[225] = '85 softdrink 1689'
lines[226] = '119 alcohol 2948'
lines[227] = '95 food 3097'
lines[228] = '42 alcohol 681'
lines[229] = '81 A'
lines[230] = '44 alcohol 2555'
lines[231] = '63 softdrink 1360'
lines[232] = '65 A'
lines[233] = '83 food 3732'
lines[234] = '5 0'
lines[235] = '38 0'
lines[236] = '14 A'
lines[237] = '10 alcohol 1995'
lines[238] = '34 softdrink 1458'
lines[239] = '98 A'
lines[240] = '64 A'
lines[241] = '111 A'
lines[242] = '57 food 1912'
lines[243] = '53 softdrink 2974'
lines[244] = '110 food 1761'
lines[245] = '10 food 2663'
lines[246] = '103 food 4852'
lines[247] = '113 softdrink 3340'
lines[248] = '83 alcohol 1550'
lines[249] = '59 food 840'
lines[250] = '107 0'
lines[251] = '35 A'
lines[252] = '32 softdrink 2133'
lines[253] = '97 alcohol 4497'
lines[254] = '22 0'
lines[255] = '16 A'
lines[256] = '32 0'
lines[257] = '105 A'
lines[258] = '40 food 1085'
lines[259] = '74 food 3224'
lines[260] = '59 food 3412'
lines[261] = '23 0'
lines[262] = '68 food 4583'
lines[263] = '63 A'
lines[264] = '82 alcohol 2530'
lines[265] = '107 A'
lines[266] = '103 food 2967'
lines[267] = '73 food 2418'
lines[268] = '103 A'
lines[269] = '15 softdrink 3952'
lines[270] = '36 A'
lines[271] = '8 alcohol 1593'
lines[272] = '28 softdrink 1107'
lines[273] = '73 alcohol 4078'
lines[274] = '95 food 3593'
lines[275] = '31 food 3895'
lines[276] = '2 alcohol 3780'
lines[277] = '85 softdrink 2274'
lines[278] = '108 food 2481'
lines[279] = '44 softdrink 3498'
lines[280] = '108 0'
lines[281] = '62 alcohol 1226'
lines[282] = '108 A'
lines[283] = '85 alcohol 1191'
lines[284] = '88 A'
lines[285] = '38 softdrink 2820'
lines[286] = '34 alcohol 4199'
lines[287] = '22 softdrink 3709'
lines[288] = '42 0'
lines[289] = '57 A'
lines[290] = '58 A'
lines[291] = '49 softdrink 2388'
lines[292] = '41 softdrink 2522'
lines[293] = '4 softdrink 2511'
lines[294] = '26 0'
lines[295] = '44 alcohol 473'
lines[296] = '29 A'
lines[297] = '27 food 4068'
lines[298] = '92 food 803'
lines[299] = '45 alcohol 432'
lines[300] = '2 0'
lines[301] = '20 alcohol 2508'
lines[302] = '104 0'
lines[303] = '87 alcohol 4283'
lines[304] = '73 A'
lines[305] = '48 alcohol 1765'
lines[306] = '95 A'
lines[307] = '55 food 2584'
lines[308] = '23 alcohol 4628'
lines[309] = '40 0'
lines[310] = '91 softdrink 673'
lines[311] = '33 food 2666'
lines[312] = '31 softdrink 4750'
lines[313] = '74 softdrink 2914'
lines[314] = '69 0'
lines[315] = '75 A'
lines[316] = '100 0'
lines[317] = '67 alcohol 2511'
lines[318] = '85 food 4209'
lines[319] = '87 alcohol 3936'
lines[320] = '40 alcohol 4624'
lines[321] = '76 softdrink 3166'
lines[322] = '41 food 1770'
lines[323] = '94 softdrink 526'
lines[324] = '69 A'
lines[325] = '44 A'
lines[326] = '34 food 596'
lines[327] = '104 0'
lines[328] = '94 A'
lines[329] = '82 softdrink 2180'
lines[330] = '60 A'
lines[331] = '27 food 3356'
lines[332] = '1 0'
lines[333] = '89 0'
lines[334] = '71 alcohol 2831'
lines[335] = '54 A'
lines[336] = '2 A'
lines[337] = '83 alcohol 2082'
lines[338] = '39 food 4827'
lines[339] = '27 alcohol 2956'
lines[340] = '62 0'
lines[341] = '31 0'
lines[342] = '17 softdrink 815'
lines[343] = '38 softdrink 4237'
lines[344] = '27 food 3576'
lines[345] = '56 softdrink 3433'
lines[346] = '5 softdrink 783'
lines[347] = '89 softdrink 4090'
lines[348] = '106 food 4555'
lines[349] = '110 softdrink 3951'
lines[350] = '56 alcohol 2443'
lines[351] = '42 softdrink 2445'
lines[352] = '74 alcohol 3814'
lines[353] = '117 softdrink 2578'
lines[354] = '114 A'
lines[355] = '92 A'
lines[356] = '1 0'
lines[357] = '26 alcohol 2666'
lines[358] = '59 0'
lines[359] = '43 A'
lines[360] = '71 softdrink 2667'
lines[361] = '45 food 3944'
lines[362] = '23 alcohol 1128'
lines[363] = '45 food 1524'
lines[364] = '66 0'

class customer {
  constructor() {
    this.age = 0
    this.total = 0
    this.adult = false
    this.off = false
  }

  getTotal() {
    return this.total
  }

  getAdult() {
    return this.adult
  }

  getOff() {
    return this.off
  }
  getAge() {
    return this.age
  }

  setAge(age) {
    this.age = age
    if (age >= 20) {
      this.adult = true
    }
  }

  setOff() {
    this.off = true
  }

  takeFood(price) {
    if (this.off) {
      this.total = +price
      this.total = -200
    } else {
      this.total = +price
    }
  }

  takeSoftdrink(price) {
    this.total = +price
  }

  takeAlcohol() {
    this.total = +500
  }
}

for (var i = 0; i < lines.length; i++) {
  if (i < N) {
    var person = new customer()
    person.setAge(Number.parseInt(lines[i]))
    persons.push(person)
  } else if (i >= N) {
    event.push(lines[i])
  }
}
var exit = 0

for (var et of event) {
  ary = et.split(' ')
  var j = Number.parseInt(ary[0]) - 1
  var total = 0
  total = persons[j].getTotal()
  if (isNaN(ary[1]) == false) {
    var price = Number.parseInt(ary[1])

    if (price == 0) {
      if (persons[j].getAdult()) {
        persons[j].takeAlcohol()
        persons[j].setOff()
      }
    }
  } else {
    price = Number.parseInt(ary[2])
    if (ary[1] == 'A') {
      console.log(persons[j].getTotal())
      exit++
    } else if (ary[1].includes('food')) {
      persons[j].takeFood(price)
    } else if (ary[1].includes('softdrink')) {
      persons[j].takeSoftdrink(price)
    } else if (ary[1].includes('alcohol')) {
      persons[j].takeSoftdrink(price)
    }
  }
}
console.log(exit)
