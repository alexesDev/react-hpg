export const ELEMENTS = ['N', 'P', 'K', 'Ca', 'Mg', 'S'];

export const SALTS = [
  {
    name: 'Кальций азотнокислый Са(NО3)2*4H2O',
    elements: [
      {
        name: 'Ca',
        defaultFraction: 16.9715,
      },
      {
        name: 'NO3',
        defaultFraction: 11.8626,
      },
      {
        name: 'NH4',
        defaultFraction: 0,
      },
    ],
  },
  {
    // https://ru.webqc.org/molecular-weight-of-Ca%28NO3%292.html
    name: 'Кальций азотнокислый Ca(NO3)2',
    elements: [
      {
        name: 'K',
        defaultFraction: 38.872,
      },
      {
        name: 'NO3',
        defaultFraction: 13.854,
      },
    ],
  },
  {
    name: 'Аммоний азотнокислый NH4NO3',
    elements: [
      {
        name: 'NH4',
        defaultFraction: 17.499,
      },
      {
        name: 'NO3',
        defaultFraction: 17.499,
      },
    ],
  },
  {
    name: 'Магний сернокислый MgSO4*7H2O',
    elements: [
      {
        name: 'Mg',
        defaultFraction: 9.861,
      },
      {
        name: 'S',
        defaultFraction: 13.010,
      },
    ],
  },
  {
    name: 'Калий фосфорнокислый KH2PO4',
    elements: [
      {
        name: 'K',
        defaultFraction: 28.731,
      },
      {
        name: 'P',
        defaultFraction: 22.761,
      },
    ],
  },
  {
    name: 'Калий сернокислый K2SO4',
    elements: [
      {
        name: 'K',
        defaultFraction: 44.874,
      },
      {
        name: 'S',
        defaultFraction: 18.401,
      },
    ],
  },
  {
    name: 'Магний азотнокислый Mg(NO3)2*6H2O',
    elements: [
      {
        name: 'Mg',
        defaultFraction: 9.479,
      },
      {
        name: 'NO3',
        defaultFraction: 10.925,
      },
    ],
  },
  {
    name: 'Хлорид кальция 6-водный CaCl2*6H2O',
    elements: [
      {
        name: 'Ca',
        defaultFraction: 18.294,
      },
      {
        name: 'Cl',
        defaultFraction: 32.366,
      },
    ],
  },
];
