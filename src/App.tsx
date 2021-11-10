import * as React from 'react';
import { Input } from './components/Input';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { times, round3 } from './utils';
import { ELEMENTS, SALTS } from './data';

const titleClassName = 'my-5 font-bold';

const App = () => {
  const formula =
    'N=220 NO3=200 NH4=20 P=40 K=180 Ca=200 Mg=50 S=73 Cl=0 Fe=2 Mn=0.55 B=0.5 Zn=0.33 Cu=0.063 Mo=0.063 Co=0 Si=0';

  const values: { [key: string]: number } = {};

  formula.split(' ').forEach((p) => {
    const [name, v] = p.split('=');
    values[name] = parseFloat(v);
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      <div className="p-10 max-w-5xl">
        <DarkModeSwitch />
        <div>{formula}</div>
        <h2 className={titleClassName}>Макропрофиль в мг/л (ppm)</h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: '30px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
          <div />
          {ELEMENTS.map((ce) => (
            <div key={`${ce}label`}>
              <div>{ce}</div>
            </div>
          ))}
          <div>Cl</div>
          <div>EC</div>
          <div />
          {ELEMENTS.map((ce) => (
            <div key={`${ce}input`}>
              <input value={values[ce]} className="input" type="number" />
            </div>
          ))}
          <div>
            <input value={values.Cl} className="input" type="number" />
          </div>
          <div>
            <Input />
          </div>
        </div>
        <h2 className={titleClassName}>Матрица соотношения элементов</h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: '30px 1fr 1fr 1fr 1fr 1fr 1fr' }}>
          <div />
          {ELEMENTS.map((ce) => (
            <div key={`${ce}label`}>
              <div>{ce}</div>
            </div>
          ))}
          {ELEMENTS.map((re) => (
            <React.Fragment key={`${re}row`}>
              <div>{re}</div>
              {ELEMENTS.map((ce) => {
                if (re === ce) {
                  return '1';
                }

                const value = round3(values[ce] / values[re]);

                return (
                  <div key={re + ce}>
                    <input className="input" type="number" step={0.001} min={0.001} max={999} value={value} />
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <h2 className={titleClassName}>Составы солей</h2>
        <div className="grid gap-2" style={{ gridTemplateColumns: '350px 30px 1fr 30px 1fr 30px 1fr 1fr' }}>
          {SALTS.map((s) => (
            <React.Fragment key={s.name}>
              <div>{s.name}</div>
              {times(3, (n) => {
                const e = s.elements[n];
                if (!e) {
                  return (
                    <React.Fragment key={n}>
                      <div />
                      <div />
                    </React.Fragment>
                  );
                }

                return (
                  <React.Fragment key={e.name}>
                    <div>{e.name}</div>
                    <input className="input" value={e.defaultFraction} type="number" />
                  </React.Fragment>
                );
              })}
              <Input />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
