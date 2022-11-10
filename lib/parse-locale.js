'use strict'

function parseLocale(strapiLocale) {
  const unstripped = strapiLocale.toUpperCase()
  const stripped = unstripped.split('-')[0]
  switch (stripped) {
    case 'AF':
    case 'SQ':
    case 'AM':
    case 'AR':
    case 'HY':
    case 'AZ':
    case 'EU':
    case 'BE':
    case 'BN':
    case 'BS':
    case 'BG':
    case 'CA':
    case 'CEB':
    case 'ZH':
    case 'ZH-CN':
    case 'ZH-TW':
    case 'CO':
    case 'HR':
    case 'CS':
    case 'DA':
    case 'NL':
    case 'EN':
    case 'EO':
    case 'ET':
    case 'FI':
    case 'FR':
    case 'FY':
    case 'GL':
    case 'KA':
    case 'DE':
    case 'EL':
    case 'GU':
    case 'HT':
    case 'HA':
    case 'HAW':
    case 'HE':
    case 'IW':
    case 'HI':
    case 'HMN':
    case 'HU':
    case 'IS':
    case 'IG':
    case 'ID':
    case 'GA':
    case 'IT':
    case 'JA':
    case 'JV':
    case 'KN':
    case 'KK':
    case 'KM':
    case 'RW':
    case 'KO':
    case 'KU':
    case 'KY':
    case 'LO':
    case 'LA':
    case 'LV':
    case 'LT':
    case 'LB':
    case 'MK':
    case 'MG':
    case 'MS':
    case 'ML':
    case 'MT':
    case 'MI':
    case 'MR':
    case 'MN':
    case 'MY':
    case 'NE':
    case 'NO':
    case 'NY':
    case 'OR':
    case 'PS':
    case 'FA':
    case 'PL':
    case 'PT':
    case 'PA':
    case 'RO':
    case 'RU':
    case 'SM':
    case 'GD':
    case 'SR':
    case 'ST':
    case 'SN':
    case 'SD':
    case 'SI':
    case 'SK':
    case 'SL':
    case 'SO':
    case 'ES':
    case 'SU':
    case 'SW':
    case 'SV':
    case 'TL':
    case 'TG':
    case 'TA':
    case 'TT':
    case 'TE':
    case 'TH':
    case 'TR':
    case 'TK':
    case 'UK':
    case 'UR':
    case 'UG':
    case 'UZ':
    case 'VI':
    case 'CY':
    case 'XH':
    case 'YI':
    case 'YO':
    case 'ZU':
      return stripped
    default:
      throw new Error('unsupported locale')
  }
}

module.exports = {
  parseLocale,
}
