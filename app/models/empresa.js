import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  nit: DS.attr('string'),
  gerente: DS.attr('string'),
  telefono: DS.attr('string'),
  direccion: DS.attr('string')
});
