import EmberObject from '@ember/object';
import SaveMixin from 'campus/mixins/save';
import { module, test } from 'qunit';

module('Unit | Mixin | save');

// Replace this with your real tests.
test('it works', function(assert) {
  let SaveObject = EmberObject.extend(SaveMixin);
  let subject = SaveObject.create();
  assert.ok(subject);
});
