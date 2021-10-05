import { Boe, construirBoe } from '@repositories/models';
import { Sumario } from '@services/models';
import { readFileSync } from 'fs';
import { boeMapper } from './boe.mapper';

describe('Boe Mapper specs', () => {
  it.each([undefined, null, {}, []])('Devuelve un BOE vacío si el parámetro es [%s]', (parametroInvalido) => {
    const defaultBoe = construirBoe();
    expect(boeMapper(parametroInvalido as Sumario)).toStrictEqual(defaultBoe);
  });

  it('Transforma un Sumario en un BOE', () => {
    const boe = readFileSync('./test/mocks/json/boe.json', { encoding: 'utf-8' });
    const sumario: Boe = boeMapper(JSON.parse(boe));
    expect(sumario).toEqual({
      idContratos: [
        'BOE-B-2020-27644',
        'BOE-B-2020-27645',
        'BOE-B-2020-27646',
        'BOE-B-2020-27647',
        'BOE-B-2020-27648',
        'BOE-B-2020-27649',
        'BOE-B-2020-27650',
        'BOE-B-2020-27651',
        'BOE-B-2020-27652',
        'BOE-B-2020-27653',
        'BOE-B-2020-27654',
        'BOE-B-2020-27655',
        'BOE-B-2020-27656',
        'BOE-B-2020-27657',
        'BOE-B-2020-27659',
        'BOE-B-2020-27660',
        'BOE-B-2020-27661',
        'BOE-B-2020-27662',
        'BOE-B-2020-27663',
        'BOE-B-2020-27664',
        'BOE-B-2020-27665',
        'BOE-B-2020-27667',
        'BOE-B-2020-27668',
        'BOE-B-2020-27669',
        'BOE-B-2020-27670',
        'BOE-B-2020-27671',
        'BOE-B-2020-27672',
        'BOE-B-2020-27677',
        'BOE-B-2020-27678',
        'BOE-B-2020-27679',
        'BOE-B-2020-27681',
        'BOE-B-2020-27682',
        'BOE-B-2020-27683',
      ],
    });
  });
});
