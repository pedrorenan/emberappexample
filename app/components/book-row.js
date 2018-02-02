import Component from '@ember/component';

export default Component.extend({
  tagName: 'tr',
  didInsertElement(){
    this.$().hide().show('slow');
  }
});
