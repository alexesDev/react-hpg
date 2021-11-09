import * as React from 'react';
import { Input } from './components/Input';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { times } from './utils';
import { ELEMENTS, SALTS } from './data';

const titleClassName = 'my-5 font-bold';

const App = () => (
  <div className="dark:bg-gray-800 dark:text-white min-h-screen">
    <div className="p-10 max-w-4xl">
      <DarkModeSwitch />
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
            <Input />
          </div>
        ))}
        <div>
          <Input />
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
            {ELEMENTS.map((ce) => (
              <div key={re + ce}>
                <Input />
              </div>
            ))}
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
                  <Input />
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

export default App;
